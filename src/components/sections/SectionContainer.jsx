import React from 'react'
import { SectionContainerMovies } from './SectionContainerMovies'
import { SectionLinks } from './SectionLinks'

export const SectionContainer = ({title,data}) => {
  return (
  <section className="section__container">

      <div className='animate__animated animate__fadeIn'>
        <SectionLinks title={title}/>
        <SectionContainerMovies movies={data}/>
      </div>
  </section>
  )
}
