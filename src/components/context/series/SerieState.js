import React,{useReducer} from 'react';

import { CARGAR_SPINNER, OBTENER_SERIES_POPULARES, RESET_SERIES } from '../../types';

import clienteAxios from '../../../config/axios';
import serieReducer from './serieReducer';
import serieContext from './serieContext';

const SerieState = props => {

  const initialState = {
    spinner:false,
    seasonCurrent:[],
    seasonPopulares:[]
  }

//dispatch para ejecutar las acciones
const [state,dispatch] = useReducer(serieReducer,initialState);

 const getSeasonPopular = async () => {
  let data = [];
  resetSeasonCurrent();
  (state.seasonPopulares.length > 0 )
   ? data =state.seasonPopulares
   : data = await getSeasonAPI('popular');

  dispatch({
     type:OBTENER_SERIES_POPULARES,
     payload:data
   })
}

const getSeasonAPI = async(filter) => {
  try {
    console.log('LLAMANDO API TV....')
     const urlCurrente = `tv/${filter}?api_key=03281d4dd269fed9a3f7cbd614e8140b&language=en-US&page=1`;
     const current = await clienteAxios.get(urlCurrente);

     return current.data.results;

  } catch (error) {
    return [];
   }
}

const resetSeasonCurrent = () => {
   dispatch({
     type:RESET_SERIES,
   })
}


return (
    <serieContext.Provider
      value= {{
        seasonCurrent:state.seasonCurrent,
        seasonPopulares:state.seasonPopulares,
        getSeasonPopular,
        spinner:state.spinner,
        }}
    >
      {props.children}
    </serieContext.Provider>
  )
}

export default SerieState;