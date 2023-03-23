import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import Preloader from './PreLoader'
const Main = () => {
    const {isloading} = useSelector(state => state.location)
  return (
    <div className='main'>
       {
        isloading ? <Preloader />  : <Map />
       }
    </div>
  )
}

export default Main