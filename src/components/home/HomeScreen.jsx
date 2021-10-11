import React from 'react'
import { Sections } from '../sections/Sections'
import { Sidebar } from '../sections/Sidebar'

export const HomeScreen = () => {
  return (
    <div className='main'>
      <div className="wrapper-sections">
        <Sections titulo='Peliculas'/>
        <Sections titulo='Series'/>
      </div>
      <Sidebar/>
    </div>
  )
}
