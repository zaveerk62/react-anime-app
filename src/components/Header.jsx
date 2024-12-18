/* eslint-disable react/prop-types */

import { useGlobalContext } from '../context/globalContext';
import { Link } from 'react-router-dom';

const Header = ({ setRendered }) => {
  
  const { state, actions, handlers } = useGlobalContext();
  console.log(state);
  const { search } = state;

  const handleSearchChange = (e) => {
  
    handlers.handleSearch(e);
    // actions.searchAnime(e.target.value);
  };

  const handleSubmit = (e) => {
    handlers.handleSubmit(e);
    actions.searchAnime(search);
  };

  const handleRenderedChange = (type) => {
    handlers.resetSearch();
    setRendered(type);
    if (type === 'popular') actions.getPopularAnime();
    if (type === 'upcoming') actions.getUpcomingAnime();
    if (type === 'airing') actions.getAiringAnime();
    
  };

  return (
    <>
      <header className='p-8 px-24 flex justify-between bg-white items-center shadow-md'>
        <Link to='/'>
          <div className='text-2xl'>
            <span className='text-gray-900 font-bold'>MY</span>
            <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-3xl text-transparent font-mono font-bold rounded-md'>
              ANIME
            </span>
            <span className='text-gray-900 font-bold'>LIST</span>
          </div>
        </Link>
        <div>
          <form
            onSubmit={() => {
             handleSubmit();
            }}
          >
            <div className='inline-flex items-center justify-center gap-4'>
              <input
                type='text'
                placeholder='Search for an anime'
                className='w-full h-10 px-5 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                value={search}
                onChange={handleSearchChange}
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-red-500 font-medium to-orange-500 text-white px-5 py-2 rounded-md'
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='flex gap-4'>
          {['airing', 'popular', 'upcoming'].map((type) => (
            <button
              key={type}
              className='bg-gradient-to-r from-red-500 to-orange-500 font-medium text-white px-5 py-2 rounded-md'
              onClick={() => handleRenderedChange(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
