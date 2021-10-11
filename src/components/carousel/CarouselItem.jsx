import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselItem = () => {

  const images = ['https://image.tmdb.org/t/p/w1280/8yhWlFcJ8zCqjfCvLy3lWFuawR1.jpg',
  'https://image.tmdb.org/t/p/w1280/p7WWudSzrIDFp7ctK2m1DDW3k9r.jpg',
];

return (
    <Carousel showThumbs={false}>
      {
        images.map(pel => (
        <div key={pel} className='carousel__container-img'>
            <img src={pel} alt='a' className='carousel__img'/>
        </div>
        ))
      }
    </Carousel>

  )
}
