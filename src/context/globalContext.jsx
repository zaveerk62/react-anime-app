/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';
import { reducer, ACTIONS } from '../reducers/reducer';

const GlobalContext = createContext();

const baseUrl = 'https://api.jikan.moe/v4';

export const GlobalContextProvider = ({ children }) => {
  const initialStates = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearching: false,
    searchResults: [],
    loading: false,
    search: '',
  };

  const [state, dispatch] = useReducer(reducer, initialStates);
  const [search, setSearch] = useState('');
  const [cache, setCache] = useState({});

  const fetchAnimeData = async (url, actionType) => {
    
    let isMounted = true;

    if (cache[url]) {
      if(isMounted) dispatch({ type: actionType, payload: cache[url] });

      return;
    }

    dispatch({ type: ACTIONS.LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      const extractedData = data?.data || [];

      setCache((prev) => ({ ...prev, [url]: extractedData }));
      dispatch({ type: actionType, payload: extractedData });
    } catch (error) {
      console.error('Failed to fetch anime data', error);
    }
    return () => {
      isMounted = false;
    }
  };

  const handleSearch = (e) => {
    dispatch({ type: ACTIONS.SET_SEARCH, payload: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.search.trim()) {
      searchAnime(state.search);
    } 
    else {
      alert('Please enter a search term');
    }
  };

  const resetSearch = () => {
    dispatch({ type: ACTIONS.SET_SEARCH, payload: false }); 
    dispatch({ type: ACTIONS.SEARCH_ANIME, payload: [] }); 
  };
  
  

  const getPopularAnime = () => {
    fetchAnimeData(
      `${baseUrl}/top/anime?filter=bypopularity`,
      ACTIONS.GET_POPULAR_ANIME
    );
  };

  const getUpcomingAnime = () => {
    fetchAnimeData(
      `${baseUrl}/top/anime?filter=upcoming`,
      ACTIONS.GET_UPCOMING_ANIME
    );
  };

  const getAiringAnime = () => {
    fetchAnimeData(
      `${baseUrl}/top/anime?filter=airing`,
      ACTIONS.GET_AIRING_ANIME
    );
  };

  const searchAnime = async (anime) => {
    if (!anime.trim()) return;

    const url = `https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`;

    try {
      dispatch({ type: ACTIONS.LOADING });
      const data = await fetch(url);
      const results = await data.json();
      dispatch({ type: ACTIONS.SEARCH_ANIME, payload: results.data });
      dispatch({ type: ACTIONS.SET_SEARCH, payload: '' });
    } catch (error) {
      console.error('Search error', error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
     
        state,
        actions: {
          getPopularAnime,
          getUpcomingAnime,
          getAiringAnime,
          searchAnime,
        },
        handlers: { handleSearch, handleSubmit, resetSearch },
        search,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
