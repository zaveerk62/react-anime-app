/* eslint-disable react/prop-types */
import { AnimeList } from "../components/AnimeList";
import { useGlobalContext } from "../context/globalContext";


const AnimeGrid = ({ animeList, rendered }) => {
  
  const { state } = useGlobalContext();
  const {searchResults, isSearching, popularAnime, upcomingAnime, airingAnime} = state;

  if (!isSearching) {
    if (rendered === 'popular') animeList = popularAnime;
    if (rendered === 'airing') animeList = airingAnime;
    if (rendered === 'upcoming') animeList = upcomingAnime;
  }
  return (
  <div>
    

    <div className="container mx-auto grid grid-rows-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center mt-10 mb-5">
      <AnimeList animeList={!searchResults.length ? animeList : searchResults} />
    </div>
    
  </div>
);
}

export default AnimeGrid