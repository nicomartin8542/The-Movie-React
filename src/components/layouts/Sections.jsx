import React from 'react'
import { CardSection } from '../cards/CardSection'

export const Sections = ({titulo}) => {
  return (
    <section className="section__container">
      <h2>{titulo}</h2>
      <ul className="section__container-filter">
        <li className="active">Ultimas</li>
        <li>Estrenos</li>
        <li>Ranking</li>
      </ul>
      <div className="section__container-movies">
        <CardSection/>
        <CardSection/>
        <CardSection/>
        <CardSection/>
      </div>

    </section>
  )
}
