import React,{useContext, useEffect} from 'react'
import { CarouselItem } from './CarouselItem';
import movieContext from '../context/movies/movieContext';
import { Spinner } from '../layouts/Spinner';

export const Carousel = () => {
  const movieCont = useContext(movieContext);
  const {getMoviesCarousel,moviesNow,spinner} = movieCont;


  useEffect(() => {
    getMoviesCarousel();
  }, [])

  return (
    <section className='carousel__container'>
      <div className="bg-carousel"></div>

    {
    (spinner)
      ? <Spinner/>
      :
        <CarouselItem movies={moviesNow}/>

    }
  </section>
  )
}
