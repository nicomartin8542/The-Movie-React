import React from 'react'
import { CardMoviePoster } from '../cards/CardMoviePoster'

export const SectionMovies = ({titulo}) => {
  return (
    <section className="section__container">
      <h2>{titulo}</h2>
      <ul className="section__container-filter">
        <li className="active">Ultimas</li>
        <li>Estrenos</li>
        <li>Ranking</li>
      </ul>
      <div className="section__container-movies">
        <CardMoviePoster/>
        <CardMoviePoster/>
        <CardMoviePoster/>
        <CardMoviePoster/>
        <CardMoviePoster/>
        <CardMoviePoster/>
        <CardMoviePoster/>
        <CardMoviePoster/>
      </div>

    </section>
  )
}
