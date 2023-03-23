import React from 'react'



const Preloader = () => {
  return (
    <div className='overflow-hidden duration-700 w-full h-full bg-[rgba(0, 255, 0, 0.7)] fixed top-0 bottom-0 left-0  z-[100000] flex justify-center items-center'>
        <div className="w-[200px] rotate text-xs h-[200px] rounded-full border-[10px] border-dashed border-gray-900 dark:border-gray-100">
        </div>
        <div className="absolute  w-[180px] h-[180px] rounded-full flex items-center justify-center">
            <p className="text-2xl font-black text-red-700"><span className="text-white">Ken</span>Codict</p>
        </div>
            </div>
  )
}

export default Preloader