import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaCloud } from 'react-icons/fa'
// http://openweathermap.org/img/w/10d.png
const PopupContent = ({eventData}) => {
const {city, list} = eventData
const [displayForcast, setDisplayForcast] = useState(false)
console.log(eventData); 
const {
    clouds, 
    dt_txt, 
    main:{feels_like, grnd_level, humidity, pressure, sea_level,temp, temp_max, temp_min},
    weather,
    wind: {deg, gust, speed}
} = list[0]
const WindDirecton = ({dir}) => {
    const value = Number(dir)
    return (
        value === 0 | value === 360 ? "E" : value > 0 & value < 90 ? "NE" : value === 90 ? "N" : value > 90 & value < 180 ? "NW" : value === 180 ? "W" : value > 180 & value < 270 ? "SW" : value === 270 ? "S" : "SE"
    )
}
const {description, icon, main} = weather[0]
  return (
    <div className='flex flex-col bg-green-900 rounded-md duration-500 max-h-[300px] overflow-auto'>
        <div className="flex items-center justify-center text-gray-50 gap-2 w-full ">
        <div className="">
          <div className="flex items-center justify-between">
          <div className="pl-2">
           <h1 className="uppercase ">Current Weather</h1>
            <p className="text-xs text-gray-200 pl-5">{new Date().toLocaleTimeString()}</p>
           </div>
            <h1 className="text-2xl text-center px-2 uppercase"> {city.name} </h1>
          </div>
        <div className="flex">
           <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" className="" />
           <div className="">
           <h1 className="text-2xl"> {temp}<sup className='text-xs'>0</sup><span className="text-3xl">C</span></h1>
           <h1 className="text-md">Real Feel {feels_like}<sup className='text-xs'>0</sup></h1>
           </div>
          <div className="mx-4">
          <div className="flex border-b-2 border-gray-200">
            <p className="pr-4">
                Wind Speed
            </p>
            <p className="flex"><WindDirecton dir={deg}/> {speed}km/hr </p>
           </div>
          <div className="flex border-b-2 border-gray-200">
            <p className="pr-4">
                Wind Gust
            </p>
            <p className="flex">{gust}km/hr </p>
           </div>
          </div>
        </div>
           </div>
        
        </div>
        <div className="flex mx-4 my-2">
        {displayForcast ? <p className="text-gray-50 text-xl">{description}</p> : null}
           {displayForcast && <button className="flex gap-1 text-white ml-4 items-center" onClick={() => setDisplayForcast(false)}>Hide Forcast<FaArrowAltCircleUp /> </button>}
           </div>
        {displayForcast && <div className="">
            {
                list.map(({clouds, 
                    dt_txt, 
                    main:{feels_like, grnd_level, humidity, pressure, sea_level,temp, temp_max, temp_min},
                    weather,
                    wind: {deg, gust, speed}}) => {
                        return (
                            <div className="flex items-center justify-center bg-gray-50 gap-2 text-green-900 w-full my-2 shadow-lg rounded-lg">
                            <div className="">
                              <div className="flex items-center justify-between">
                              <div className="pl-2">
                                <p className="text-xs text-green-900 pl-2 pr-2">{new Date(dt_txt).toDateString()}, {new Date(dt_txt).toLocaleTimeString()}</p>
                               </div>
                               <p className="text-gren-900 text-xl">{description}</p> 
                              </div>
                            <div className="flex">
                               <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" className="" />
                               <div className="">
                               <h1 className="text-2xl"> {temp}<sup className='text-xs'>0</sup><span className="text-3xl">C</span></h1>
                               <h1 className="text-md">Real Feel {feels_like}<sup className='text-xs'>0</sup></h1>
                               </div>
                              <div className="mx-4">
                              <div className="flex border-b-2 border-green-400">
                                <p className="pr-4">
                                    Wind Speed
                                </p>
                                <p className="flex"><WindDirecton dir={deg}/> {speed}km/hr </p>
                               </div>
                              <div className="flex border-b-2 border-green-400">
                                <p className="pr-4">
                                    Wind Gust
                                </p>
                                <p className="flex">{gust}km/hr </p>
                               </div>
                              </div>
                            </div>
                               </div>
                            
                            </div>
                        )
                })
            }
            </div>}
        <div className="flex mx-4 my-2">
        {!displayForcast ? <p className="text-gray-50 text-xl">{description}</p> : null}
           {!displayForcast ? <button className="flex gap-1 text-white ml-4 items-center" onClick={() => setDisplayForcast(true)}>Click To See Weather Forcast for Next 5 days <FaArrowAltCircleRight /> </button> : <button className="flex gap-1 text-white ml-4 items-center" onClick={() => setDisplayForcast(false)}>Hide Forcast<FaArrowAltCircleUp /> </button>}
        </div>
    </div>
  )
}

export default PopupContent