import { CARGAR_SPINNER, CARGAR_ULTIMO_FILTER, OBTENER_LATEST, OBTENER_PELICULAS, OBTENER_PELIS_CAROUSEL, OBTENER_POPULARES, OBTENER_PROXIMAS, OBTENER_RANKING, OBTENER_ULTIMAS_PELIS } from "../../types";

export default  (state,action) => {
  switch (action.type) {

  case OBTENER_PELIS_CAROUSEL:
  return {
    ...state,
    moviesNow:action.payload,
    moviesCurrent:action.payload,
    spinner: false
  }

  case OBTENER_POPULARES:
  return {
    ...state,
    moviesPopular:action.payload,
    moviesCurrent:action.payload,
    spinner: false
  }

  case OBTENER_RANKING:
  return {
    ...state,
    moviesRanking:action.payload,
    moviesCurrent:action.payload,
    spinner: false
  }

  case OBTENER_PROXIMAS:
  return {
    ...state,
    moviesUpcoming:action.payload,
    moviesCurrent:action.payload,
    spinner: false
  }

  case OBTENER_PELICULAS:
  return {
    ...state,
    moviesCurrent:[],
  }

  case CARGAR_SPINNER:{
    return {
      ...state,
      spinner:true
    }
  }

  case CARGAR_ULTIMO_FILTER:{
    return {
      ...state,
      lastFilterMovie:action.payload
    }
  }

  default:
      return state;
  }
}