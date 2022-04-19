import React, { Fragment } from 'react'
import { CardMoviePoster } from '../cards/CardMoviePoster'

export const SectionMoviesFilter = ({titulo,movies}) => {
  return (
  <Fragment>
    <h2 className='sidebar-title'>{titulo}</h2>
    <div className="section__movies-filter">
      {
        movies.map(movie => (
        <CardMoviePoster pills={false} movie={movie}  hiddenTitle={true} key={movie.id}/>
        ))
      }

    </div>
    </Fragment>
  )
}
