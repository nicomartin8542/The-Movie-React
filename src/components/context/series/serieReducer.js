import { CARGAR_SPINNER, OBTENER_PELIS_CAROUSEL, OBTENER_POPULARES, OBTENER_SERIES_POPULARES, OBTENER_ULTIMAS_PELIS } from "../../types";

export default  (state,action) => {
  switch (action.type) {

  case OBTENER_SERIES_POPULARES:
  return {
    ...state,
    seasonPopulares:action.payload,
    seasonCurrent:action.payload,
    spinner: false
  }

  default:
      return state;
  }
}