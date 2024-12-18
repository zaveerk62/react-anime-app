import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AnimePage = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await res.json();
    setAnime(data.data);
  }

  const getCharacters = async (anime) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`);
    const data = await res.json();
    setCharacters(data.data);
    console.log(data.data);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAnime(id);
      await getCharacters(id);
    };
    fetchData();
  }, [id]);

  return (
 
    <div className='container mx-auto py-24'>
       
          <div className='flex gap-20 border border-slate-300 p-10 rounded-lg'>
          <img
            src={images?.jpg?.large_image_url}
            alt={title}
            className='size-96 h-full rounded-lg'
          />
        
        
        <div className='flex flex-col justify-center'>
          <h2 className='text-6xl font-bold mb-10 p-0'>{title}</h2>
          <div className="flex flex-col gap-4">
          <p className='inline-flex gap-10'><span className='span'>Rank:</span><span>{rank}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Aired:</span><span>{aired?.string}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Score:</span><span>{score}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Rating:</span><span>{rating}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Status:</span><span>{status}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Source:</span><span>{source}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Season:</span><span>{season}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Duration:</span><span>{duration}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Scored By:</span><span>{scored_by}</span></p>
          <p className='inline-flex gap-10'><span className='span'>Popularity:</span><span>{popularity}</span></p>
          </div>
      <div className='pt-10'>
        <p>{readMore ? synopsis : synopsis?.substring(0, 450) + '...'}
          <button className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent' onClick={()=>setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Show More'}</button>
        </p>
      </div>
        </div>
      </div>
      <div className='pt-10'>
        <h3 className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold text-4xl pb-6'>Trailer:</h3>
        <div>
          {trailer?.embed_url ? (
            <iframe src={trailer?.embed_url} title='Trailer' width='800' height='400' frameBorder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          ) : 'No trailer available'}
        </div>
      </div>
      <div className='pt-10'>
        <h3 className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold text-4xl pb-6'>Characters:</h3>
        <div className='grid grid-cols-5 grid-rows-4'>
          {characters?.slice(0, 25).map((character, index) => {
            const { role } = character
            const {images,name,mal_id} = character.character
            return <Link to={`/character/${mal_id}`} key={index}>
              <div className='py-4'>
                <img className='shadow-lg hover:scale-105 hover:shadow-xl duration-300' src={images?.jpg.image_url} alt="" />
                <h3 className='text-xl py-1 font-bold'>{name}</h3>
                <p className='text-gray-900 text-sm'>{role}</p>
              </div>
            </Link>
          }
            
          )}
        </div>
      </div>
    </div>
  );
};


export default AnimePage;
