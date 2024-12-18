export const ACTIONS = {
  LOADING: 'loading',
  GET_POPULAR_ANIME: 'get-popular-anime',
  GET_UPCOMING_ANIME: 'get-upcoming-anime',
  GET_AIRING_ANIME: 'get-airing-anime',
  GET_PICTURES: 'get-pictures',
  SEARCH_ANIME: 'search-anime',
  SET_SEARCH: 'set-search',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.GET_POPULAR_ANIME:
      return { ...state, popularAnime: Array.isArray(action.payload) ? action.payload : [], loading: false };
    case ACTIONS.GET_UPCOMING_ANIME:
      return { ...state, upcomingAnime: Array.isArray(action.payload) ? action.payload : [], loading: false };
    case ACTIONS.GET_AIRING_ANIME:
      return { ...state, airingAnime: Array.isArray(action.payload) ? action.payload : [], loading: false };
    case ACTIONS.SEARCH_ANIME:
      console.log('Reducer: Search Results', action.payload);
      return { ...state, searchResults:Array.isArray(action.payload) ? action.payload : [], loading: false };
      case ACTIONS.SET_SEARCH:
        return { ...state, search: action.payload };
    default:
      return state;
  }
};
