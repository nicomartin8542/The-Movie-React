import React from 'react'
import { Fragment } from 'react';
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
          <Fragment>
            <div key={pel} className='carousel__container-img'>
              <img src={pel} alt='a' className='carousel__img'/>
            </div>
            <div className="carousel__info">
              <h3>Jhon</h3>
              <div className="carousel__info-favorite">
                <p>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </p>
                <p>action|supense - duration</p>
              </div>
            </div>
        </Fragment>
        ))
      }
    </Carousel>

  )
}
