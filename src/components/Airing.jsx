/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import AnimeGrid from "./AnimeGrid";
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

  // return (
  //   <>
  //     <div className='container mx-auto grid grid-rows-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center mt-10 mb-5'>
  //     {!isSearching && rendered === 'popular'
  // ? airingAnime.map((anime) => (
  //     <div key={anime.mal_id} className="flex flex-col justify-center">
  //       <Link to={`/anime/${anime.mal_id}`}>
  //         <div className="bg-white border shadow-lg border-slate-200 shadow-orange-300 rounded-lg m-2 w-72 duration-500 hover:scale-105 hover:shadow-xl max-h-[500px]">
  //           <img
  //             src={anime?.images?.jpg?.large_image_url}
  //             alt={anime?.title}
  //             className="object-cover size-96 rounded-lg"
  //           />
  //         </div>
  //         <h2 className="text-xl text-center text-gray-900 pt-2 font-medium leading-tight">
  //           {anime?.title}
  //         </h2>
  //       </Link>
  //     </div>
  //   ))
  // : searchResults?.map((anime) => (
  //     <div key={anime.mal_id} className="flex flex-col justify-center">
  //       <Link to={`/anime/${anime.mal_id}`}>
  //         <div className="bg-white border shadow-lg border-slate-200 shadow-orange-300 rounded-lg m-2 w-72 duration-500 hover:scale-105 hover:shadow-xl max-h-[500px]">
  //           <img
  //             src={anime?.images?.jpg?.large_image_url}
  //             alt={anime?.title}
  //             className="object-cover size-96 rounded-lg"
  //           />
  //         </div>
  //         <h2 className="text-xl text-center text-gray-900 pt-2 font-medium leading-tight">
  //           {anime?.title}
  //         </h2>
  //       </Link>
  //     </div>
  //   ))}

  //     </div>
  //   </>
  // )
}

export default Airing