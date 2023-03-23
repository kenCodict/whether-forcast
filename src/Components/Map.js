import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ReactMap, { Marker, Popup } from 'react-map-gl';
import env from "react-dotenv";
import {setViewPort} from "../Features/LocationSlice/LocationSlice";
import {  FaMapMarkerAlt } from 'react-icons/fa';
import PopupContent from './PopupContent';
const Map = () => {
 
  const [pop, setPop] = useState(false)
  const {eventData, viewPort} = useSelector(state => state.location)
    const dispatch = useDispatch()
   const act = (e) => {
    e.preventDefault()
    setPop(!pop)
   }
   
  return (
    <div className='h-[100vh] max-w-full'> 
    <ReactMap
  initialViewState={ { ...viewPort }}
    mapboxAccessToken = {env.REACT_APP_MAP_API_KEY}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    onViewportChange = {(viewport) => (
      dispatch(setViewPort(viewport))
    )}
    >
      <Marker 
       latitude={viewPort.latitude}
       longitude={viewPort.longitude}
       color="green"
       >
        <button className="text-green-900 text-4xl w-fit" onClick={act}>
          <FaMapMarkerAlt />
        </button>
       </Marker>
       {pop ?  <Popup 
      latitude={viewPort?.latitude}
       longitude={viewPort?.longitude}
       onClose={() => setPop(false)}
       closeOnClick={false}
       maxWidth={'none'}
      >
        <PopupContent eventData={eventData}/>
      </Popup> : null} 
    
    </ReactMap>
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 6.5364,
        lng: 7.4356,
    }
}
export default Map