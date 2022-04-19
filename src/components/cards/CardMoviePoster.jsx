import React from 'react'
import { buildSrcImage } from '../../utils/utils'

export const CardMoviePoster = ({pills=true,movie,hiddenTitle=false}) => {
  const overview = movie.release_date || movie.first_air_date;
  const title = movie.title || movie.original_name;
  return (
    <div className="card__movie">
      <div className="card__movie-body">
      {/* <img src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362'} */}
      <img src={buildSrcImage(movie.poster_path)}
      alt="poster"  className="card__movier-poster"/>
      {
        (pills) &&
        <div className="card__movie-body-info">
           <p>
            <i className="fa fa-star" aria-hidden="true"></i>
            <span>{(Math.round(movie.vote_average * 100) / 100).toFixed(1)}</span>
          </p>
          <p>{overview.slice(0,4)}</p>
        </div>
      }

      </div>
      {
        (!hiddenTitle)
            ? <div className="card__movie-title">
              <h3>{title}</h3>
            </div>
            : null
      }

    </div>
  )
}
