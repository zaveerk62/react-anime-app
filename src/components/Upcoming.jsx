/* eslint-disable react/prop-types */
import { useGlobalContext } from "../context/globalContext";
import AnimeCategory from "../components/AnimeCategory";
import { useEffect } from "react";


const Upcoming = ({ rendered }) => {

  const { state, actions } = useGlobalContext();
  const { upcomingAnime, searchResults, isSearching } = state;
  const { getUpcomingAnime } = actions;

  useEffect(() => {
    getUpcomingAnime(); // Fetch upcoming anime when this component is mounted
  }, []);

  return (
    <>
     <AnimeCategory 
     rendered={rendered} 
        animeData={upcomingAnime} 
        searchResults={searchResults} 
        isSearching={isSearching} />
    </>
  );
}

export default Upcoming