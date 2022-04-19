import React, { useContext, useEffect, useState } from 'react'
import movieContext from '../context/movies/movieContext';

export const SectionLinks = ({title}) => {
  const Links = [
    {id:1 , text:'Release'},
    {id:2 , text:'Ranking'},
    {id:3 , text:'Upcoming'}
  ]

const [activeLink,setActiveLink] = useState(1);
const movieCont = useContext(movieContext);
const {loadMoviesFilterLinks,setLastFilterMovie,lastFilterMovie} = movieCont;

useEffect(() => {
  reloadSection();
}, [activeLink])



const reloadSection = e => {


  if(!e) return;
  const parentNode = e.target.parentElement.id;
  console.log(e.target.id)
  setActiveLink(e.target.id)
  if(parentNode === 'Peliculas')
  {
    loadMoviesFilterLinks(e.target.textContent.toLowerCase());
    setLastFilterMovie(activeLink);

  } else{

  }
  //activeClass();
  //e.target.classList.add('active');
}




return (
    <>
      <h2>{title}</h2>
        <ul className="section__container-filter" id={title}>
          {Links.map((val) => (
            <li key={val.id}
              id={val.id}
              onClick={reloadSection}
              className={(activeLink === val.id) ? "active" :"" }>
                {val.text}
            </li>
          ))}
        </ul>
    </>
  )
}
