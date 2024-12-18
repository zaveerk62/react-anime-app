/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/globalContext';
import { useEffect } from 'react';
import AnimeCategory from './AnimeCategory';

const Popular = ({ rendered }) => {
  // const { popularAnime, searchResults, isSearching } = useGlobalContext();

  // const { state, actions } = useGlobalContext();
  // const { popularAnime, searchResults, isSearching, upcomingAnime, airingAnime } = state;
  // const { getPopularAnime } = actions;

  // useEffect(() => {
  //   if (rendered === 'popular') {
  //     actions.getPopularAnime();
  //   } else if (rendered === 'upcoming') {
  //     actions.getUpcomingAnime();
  //   } else if (rendered === 'airing') {
  //     actions.getAiringAnime();
  //   }
  // }, [rendered]);

  // const animeList = isSearching && searchResults.length > 0
  //   ? searchResults
  //   : rendered === 'popular'
  //   ? popularAnime
  //   : rendered === 'upcoming'
  //   ? upcomingAnime
  //   : rendered === 'airing'
  //   ? airingAnime
  //   : []

  //   console.log('Popular:', popularAnime);
  //   console.log('Search:', searchResults);
  //   console.log('Upcoming:', upcomingAnime);
  //   console.log('Airing:', airingAnime);
  return (
    <>
      {/* <div className='container mx-auto grid grid-rows-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center mt-10 mb-5'> */}
        {/* {!isSearching && rendered === 'popular'
          ? popularAnime.map((anime) => (
              <div key={anime.mal_id} className='flex flex-col justify-center'>
                <Link to={`/anime/${anime.mal_id}`}>
                  <div className='bg-white border shadow-lg border-slate-200 shadow-orange-300 rounded-lg m-2 w-72 duration-500 hover:scale-105 hover:shadow-xl max-h-[500px]'>
                    <img
                      src={anime?.images?.jpg?.large_image_url}
                      alt={anime?.title}
                      className='object-cover size-96 rounded-lg'
                    />
                  </div>
                  <h2 className='text-xl text-center text-gray-900 pt-2 font-medium leading-tight'>
                    {anime?.title}
                  </h2>
                </Link>
              </div>
            ))
          : searchResults?.map((anime) => (
              <div key={anime.mal_id} className='flex flex-col justify-center'>
                <Link to={`/anime/${anime.mal_id}`}>
                  <div className='bg-white border shadow-lg border-slate-200 shadow-orange-300 rounded-lg m-2 w-72 duration-500 hover:scale-105 hover:shadow-xl max-h-[500px]'>
                    <img
                      src={anime?.images?.jpg?.large_image_url}
                      alt={anime?.title}
                      className='object-cover size-96 rounded-lg'
                    />
                  </div>
                  <h2 className='text-xl text-center text-gray-900 pt-2 font-medium leading-tight'>
                    {anime?.title}
                  </h2>
                </Link>
              </div>
            ))} */}
        {/* {isSearching && <div>Searching...</div>}
        <AnimeList animeList={animeList} />  
      </div> */}
      <AnimeCategory 
      rendered={rendered}

        />
    </>
  );
};

export default Popular;
