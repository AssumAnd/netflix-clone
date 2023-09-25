import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div>
      <div className='page'>
        <section className='lists'>
          {movieList.map((item, key) => (
            <MovieRow />
          ))}
        </section>
        <div className='commit'>
          <h1>commit</h1>
        </div>
   
      </div>
    </div>
  )
}
