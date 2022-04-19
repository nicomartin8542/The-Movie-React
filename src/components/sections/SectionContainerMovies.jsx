import React from 'react'
import { CardMoviePoster } from '../cards/CardMoviePoster'


export const SectionContainerMovies = ({movies}) => {
  console.log(movies)
  return (
  <div className="section__container-movies">
    {
      movies.map(movie => (
      <CardMoviePoster movie={movie} key = {movie.id}/>
      ))
    }
  </div>
  )
}
