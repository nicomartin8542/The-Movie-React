import React from 'react'
import { SectionCategories } from './SectionCategories'
import { SectionFilter } from './SectionFilter'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SectionFilter titulo='Peliculas Mas Vistas'/>
      <SectionFilter titulo='Peliculas Populares'/>
      <SectionCategories/>
    </div>
  )
}
