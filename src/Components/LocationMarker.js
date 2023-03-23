import React from 'react'
import {Icon} from '@iconify/react'
import fireIcon from '@iconify/icons-emojione/fire'
import volcanoIcon from '@iconify/icons-emojione/volcano'
import IceIcon from '@iconify/icons-emojione/snowflake'
import stormIcon from '@iconify/icons-emojione/cloud-with-lightning-and-rain'
import { FaFire } from "react-icons/fa";


const LocationMarker = ({lat, lng, onClick, id}) => {
    let renderIcon = id == 8 ? fireIcon : id == 10 ? stormIcon : id == 12 ? volcanoIcon : id == 15 ? IceIcon : null;
    
  return (
    <div className='' onClick={onClick}>
        <Icon icon={renderIcon} className="text-[2rem] relative"/>
    </div>
  )
}

export default LocationMarker