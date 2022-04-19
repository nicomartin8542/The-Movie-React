import React, {useContext,useEffect, useState } from 'react'
import serieContext from '../../context/series/serieContext';
import { Spinner } from '../../layouts/Spinner';
import { SectionContainer } from '../SectionContainer';

export const SectionSeries = () => {
  const seasonCont = useContext(serieContext);
  const {getSeasonPopular,seasonCurrent} = seasonCont;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    if(seasonCurrent.length ===0 ){
      getSeasonPopular();
    }

  }, [])

   useEffect(() => {
    console.log(seasonCurrent)
    if(seasonCurrent.length > 0 )
    {
      setLoading(false)
    }

  }, [seasonCurrent])

  return (
        (loading)
        ? <Spinner/>
        : <SectionContainer title="Series" data={seasonCurrent} />


  )
}
