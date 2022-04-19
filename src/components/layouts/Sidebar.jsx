import React from 'react'

import { SectionFilter } from '../sections/SectionFilter'
import {SectionCategories} from  '../sections/movies/SectionCategories';
export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SectionFilter titulo='Peliculas Mas Vistas'/>
        <SectionFilter titulo='Peliculas Populares'/>
        <SectionCategories/>
    </div>
  )
}
