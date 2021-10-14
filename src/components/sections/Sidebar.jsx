import React from 'react'
import { SectionFilter } from './SectionFilter'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SectionFilter titulo='Peliculas Mas Vistas'/>
      <SectionFilter titulo='Peliculas Populares'/>
    </div>
  )
}
