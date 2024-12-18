/* eslint-disable react/prop-types */
import  { useEffect } from 'react';
import { useGlobalContext } from '../context/globalContext';
import AnimeGrid from './AnimeGrid';

const AnimeCategory = ({ rendered }) => {
  const { state, actions } = useGlobalContext();
  
  const { popularAnime, upcomingAnime, airingAnime, loading} = state;
  const { getPopularAnime, getUpcomingAnime, getAiringAnime } = actions;

  useEffect(() => {
    
    if (rendered === 'popular' && !popularAnime.length && !loading) {
      getPopularAnime();
    } else if (rendered === 'upcoming' && !upcomingAnime.length && !loading) {
      getUpcomingAnime();
    } else if (rendered === 'airing' && !airingAnime.length && !loading) {
      getAiringAnime();
    }
  }, [rendered, state.isSearching]);

  const animeList =
    state.isSearching && state.searchResults.length > 0
      ? state.searchResults
      : rendered === 'popular'
      ? state.popularAnime
      : rendered === 'upcoming'
      ? state.upcomingAnime
      : rendered === 'airing'
      ? state.airingAnime
      : [];

  return (
   <>
    <AnimeGrid animeList={animeList} />
   </>
  );
};

export default AnimeCategory;
