import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { buildSrcImage } from '../../utils/utils';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselItem = ({movies}) => {


return (
<Carousel showThumbs={false}>
      {
        movies.map(pel => (
          <div className='animate__animated animate__fadeIn' key={pel.id}>
            <div  className='carousel__container-img '>
              <img src={buildSrcImage(pel.backdrop_path)} alt='a' className='carousel__img'/>
            </div>
            <div className="carousel__info" >
              <h3>{pel.original_title}</h3>
              <div className="carousel__info-favorite">
                <p>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {pel.vote_average}
                </p>
                <p className='carousel__info-overview'>{pel.overview.slice(0,200)+"..."}</p>
              </div>
            </div>
        </div>
        ))
      }
    </Carousel>

  )
}
