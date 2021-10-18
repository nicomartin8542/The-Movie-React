import React from 'react'
import { CarouselItem } from './CarouselItem';

export const Carousel = () => {
  return (
  <section className='carousel__container'>
    <div className="bg-carousel"></div>
      <CarouselItem/>
  </section>
  )
}
