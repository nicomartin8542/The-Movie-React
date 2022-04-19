import React,{useReducer} from 'react';
import movieContext from './movieContext';
import movieReducer from './movieReducer';
import { CARGAR_SPINNER, CARGAR_ULTIMO_FILTER, OBTENER_LATEST, OBTENER_PELICULAS, OBTENER_PELIS_CAROUSEL, OBTENER_POPULARES, OBTENER_PROXIMAS, OBTENER_RANKING, OBTENER_ULTIMAS_PELIS } from '../../types';

import clienteAxios from '../../../config/axios';
import axios from 'axios';

const MovieState = props => {

  const initialState = {
    spinner:false,
    moviesNow:[],
    moviesPopular:[],
    moviesRanking:[],
    moviesUpcoming:[],
    moviesCurrent:[],
    lastFilterMovie:'',
  }



  //dispatch para ejecutar las acciones
  const [state,dispatch] = useReducer(movieReducer,initialState);

  const getMoviesCarousel = async () => {
    cargarSpinner();
    resetdataCurrent();
    let result= await getMovieAPI('popular');
    let data=[];
    if(result.length > 10 ){
      data=result.splice(0,6);
    }

    dispatch({
      type:OBTENER_PELIS_CAROUSEL,
      payload:data
    })
  }

  const cargarSpinner = () => {
    dispatch({
      type:CARGAR_SPINNER,
    })
  }

  const getMoviesPopular = async () => {
    let data = [];
    resetdataCurrent();
    (state.moviesPopular.length > 0 )
     ? data =state.moviesPopular
     : data = await getMovieAPI('popular');
    dispatch({
       type:OBTENER_POPULARES,
       payload:data
     })

  }
  const getMoviesRanking = async () => {
    let data = [];
    resetdataCurrent();
    (state.moviesRanking.length > 0 )
     ? data =state.moviesRanking
     : data = await getMovieAPI('top_rated');


     dispatch({
       type:OBTENER_RANKING,
       payload:data
     })
  }

  const getMoviesUpcoming = async () => {
    let data = [];
    resetdataCurrent();
    (state.moviesUpcoming.length > 0 )
     ? data =state.moviesUpcoming
     : data = await getMovieAPI('upcoming');
    dispatch({
       type:OBTENER_PROXIMAS,
       payload:data
     })
  }

  const loadMoviesFilterLinks = filter => {
    switch (filter) {
      case 'release':
        getMoviesPopular();
        break;
      case 'ranking':
      getMoviesRanking();
      break;
      case 'upcoming':
      getMoviesUpcoming()
      break;
      default:
        break;
    }
  }

  const getMovieAPI = async(filter) => {
    try {
      console.log('LLAMANDO API....')
       const urlCurrente = `movie/${filter}?api_key=03281d4dd269fed9a3f7cbd614e8140b&language=en-US&page=1`;
       const current = await clienteAxios.get(urlCurrente);
       return current.data.results;

    } catch (error) {
      return [];
     }
  }

  const resetdataCurrent = () => {
     dispatch({
       type:OBTENER_PELICULAS,
     })
  }

  const setLastFilterMovie = filter => {
     dispatch({
       type:CARGAR_ULTIMO_FILTER,
       payload:filter
     })
  }




  return (
    <movieContext.Provider
      value= {{
        spinner:state.spinner,
        moviesNow:state.moviesNow,
        moviesPopular:state.moviesPopular,
        moviesRanking:state.moviesRanking,
        moviesUpcoming:state.moviesUpcoming,
        moviesCurrent:state.moviesCurrent,
        lastFilterMovie:state.lastFilterMovie,
        getMoviesCarousel,
        getMoviesPopular,
        getMoviesRanking,
        getMoviesUpcoming,
        resetdataCurrent,
        setLastFilterMovie,
        loadMoviesFilterLinks,
        cargarSpinner
        }}
    >
      {props.children}
    </movieContext.Provider>
  )
}

export default MovieState;