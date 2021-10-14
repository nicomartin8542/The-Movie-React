import React from 'react'
import { CardMoviePoster } from '../cards/CardMoviePoster'


export const SectionFilter = ({titulo}) => {
  return (
    <div className='section__movies-filter-container'>
      <h2>{titulo}</h2>
      <div className="section__movies-filter">
        <CardMoviePoster pills={false}/>
        <CardMoviePoster pills={false}/>
        <CardMoviePoster pills={false}/>
        <CardMoviePoster pills={false}/>
      </div>
    </div>
  )
}
