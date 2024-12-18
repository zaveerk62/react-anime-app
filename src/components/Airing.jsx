/* eslint-disable react/prop-types */
import { useGlobalContext } from "../context/globalContext";
import { useEffect } from "react";
import AnimeCategory from "./AnimeCategory";


const Airing = ({ rendered }) => {

  const { state, actions } = useGlobalContext();
  const { airingAnime, searchResults, isSearching } = state;
  const { getAiringAnime } = actions;

  useEffect(() => {
    getAiringAnime(); // Fetch airing anime when this component is mounted
  }, []);

  return (
    <>
      <AnimeCategory 
      rendered={rendered} 
        animeData={airingAnime} 
        searchResults={searchResults} 
        isSearching={isSearching} 
       />
    </>
  )
}

export default Airing