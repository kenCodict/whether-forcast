import React from 'react'
import {setOpenSideBar} from "../Features/LocationSlice/LocationSlice";
import { useDispatch, useSelector } from 'react-redux'
import { FaBars, FaCloud } from "react-icons/fa";

const Header = () => {
  const {openSideBar} = useSelector(state => state.location)
  const dispatch = useDispatch()
  const SideBar = () => {
    dispatch(setOpenSideBar(!openSideBar))
  }
  return (
    <div className='bg-green-700 h-[80px] w-screen flex items-center p-3 text-[20px] justify-center  header uppercase '>
        <div className=" text-white flex items-center p-3 text-[20px] justify-center space-x-2 gap-2 uppercase flex-1">
        <FaCloud size={40} /> Nigeria Weather Forcast
        </div>
        {/* <FaFire />Extreme Weather Event */}
        <button className="text-4xl text-white mx-5 border-transparent active:outline-none w-fit bg-transparent lg:hidden" onClick={SideBar}>
          <FaBars />
        </button>
    </div>
  )
}

export default Header