import React, {useContext,useEffect, useState } from 'react'
import movieContext from '../../context/movies/movieContext';
import { Spinner } from '../../layouts/Spinner';
import { SectionContainer } from '../SectionContainer';

export const SectionMovies = () => {
  const movieCont = useContext(movieContext);
  const {getMoviesPopular,moviesCurrent,setLastFilterMovie} = movieCont;

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    getMoviesPopular();
    setLastFilterMovie('Release');
  }, [])


  useEffect(() => {
    setLoading(true)
    if(moviesCurrent.length > 0 )
    {
      setLoading(false)
    }
  }, [moviesCurrent])

  return (
         (loading)
         ? <Spinner/>
         :<SectionContainer title="Peliculas" data={moviesCurrent} />
  )
}
