import React from 'react'

export const CardSection = ({pills=true}) => {
  return (
    <div className="card__movie">
      <div className="card__movie-body">
      <img src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362'}
      alt="poster"  className="card__movier-poster"/>
      {
        (pills) &&
        <div className="card__movie-body-pills">
           <span className="pills pills-yellow">Pelicula</span>
          <span className="pills pills-orange">2021</span>
        </div>
      }

      </div>
      <div className="card__movie-title">
        <h3>After</h3>
      </div>
    </div>
  )
}
