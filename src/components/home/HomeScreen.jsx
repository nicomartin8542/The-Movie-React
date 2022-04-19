import React from 'react'
import { SectionMovies } from '../sections/movies/SectionMovies'
import { SectionSeries } from '../sections/series/SectionSeries'
import {Sidebar} from '../layouts/Sidebar';


export const HomeScreen = () => {
  return (
      <div className='main'>
      <div className="wrapper-sections">
        <SectionMovies titulo='Peliculas'/>
        <SectionSeries titulo='Series'/>
      </div>
       <Sidebar/>
    </div>


  )
}
