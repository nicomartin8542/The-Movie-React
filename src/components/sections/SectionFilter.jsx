import React from 'react'
import { CardSection } from '../cards/CardSection'
import { Sections } from './Sections'

export const SectionFilter = ({titulo}) => {
  return (
    <div className='section__movies-filter-container'>
      <h2>{titulo}</h2>
      <div className="section__movies-filter">
        <CardSection pills={false}/>
        <CardSection pills={false}/>
        <CardSection pills={false}/>
        <CardSection pills={false}/>
      </div>
    </div>
  )
}
