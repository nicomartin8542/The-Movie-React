import React from 'react'
import { Fragment } from 'react'
import { Carousel } from '../carousel/Carousel'
import { SectionMovies } from '../sections/SectionMovies'
import { Sidebar } from '../sections/Sidebar'

export const HomeScreen = () => {
  return (
    <Fragment>
    <Carousel/>

    <div className='main'>
      <div className="wrapper-sections">
        <SectionMovies titulo='Peliculas'/>
        <SectionMovies titulo='Series'/>
      </div>
      <Sidebar/>
    </div>

  </Fragment>
  )
}
