import React, { useState } from 'react'
import {  FaMapMarkerAlt, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import {setSelectedEvent, setViewPort,setOpenSideBar} from "../Features/LocationSlice/LocationSlice";
import TextInput from './textInput';
const SideBar = () => {
    const [searchInput, setSearchInput] = useState();
    const {NigeriaStates,openSideBar} = useSelector(state => state.location)
    const [filteredValues, setFilteredValues] = useState(null)
    const newList = filteredValues ? filteredValues : NigeriaStates
    const dispatch = useDispatch()
    const filterState = (e) => {
        
        setSearchInput(e.target.value)
        const items = NigeriaStates.filter((item) => {
            const {name} = item
            if (name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return item
            }

        })
        setFilteredValues(items)
    }

    const handleClick = (item) => {
        console.log(item);
       dispatch( setViewPort({
        latitude: Number(item.lat),
        longitude: Number(item.long),
        zoom: 7,
        width: "100vw",
        height: "100vh",
        pitch: 50,
    }))
       dispatch(setSelectedEvent(item))
    }
const sideBar = () => {
    dispatch(setOpenSideBar(false))
}
  return (
    <div className={`sidebar bg-green-400 duration-500 ${openSideBar ? 'translate-x-0' : "-translate-x-[200%] lg:translate-x-0"}`}>
       <div className=" items-center justify-end mt-10 pr-5 flex lg:hidden">
       <button className="text-red-700 bg-transparent border-transparent active:outline-none text-2xl hover:scale-125 duration-500" onClick={sideBar}>
            <FaWindowClose />
        </button>
       </div>
         <div className="my-10 flex justify-center">
            <TextInput 
            type="search"
            name='city'
            id='city'
            placeholder="Filter for Nigeria State"
            handleChange = {filterState}
            className="p-2"
            value={searchInput}
            />
                
        </div>
        <div className="flex flex-col pl-5 justify-center w-full my-4 ">
           
            {newList.map((item,index) => {
                const {name} = item
                return (
                    <div className="flex flex-row gap-4 text-white my-4 items-center cursor-pointer hover:scale-110" onClick={() => handleClick(item)} key={index}>
                        <FaMapMarkerAlt  />
                        <h4 className="text-xl text-white ">{name}</h4>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SideBar