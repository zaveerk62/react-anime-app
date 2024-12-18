import { Link } from "react-router-dom";

export const AnimeList = ({ animeList }) => {


  return (animeList || []).map((anime,index) => (
    <div key={index} className='flex flex-col justify-center'>
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
  ));
};