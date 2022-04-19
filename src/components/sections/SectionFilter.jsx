import React,{useContext,useEffect} from 'react'
import movieContext from '../context/movies/movieContext';
import { Spinner } from '../layouts/Spinner';
import { SectionMoviesFilter } from './SectionMoviesFilter';



export const SectionFilter = ({titulo}) => {
  const movieCont = useContext(movieContext);
  const {getMoviesPopular,moviesPopular,spinner} = movieCont;

  useEffect(() => {
    getMoviesPopular();

  }, [])
  return (
    <div className='section__movies-filter-container'>
      {
        (spinner)
          ? <Spinner/>
          : <SectionMoviesFilter titulo={titulo} movies={moviesPopular}/>
      }

    </div>
  )
}
