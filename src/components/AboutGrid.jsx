import React from 'react'

const AboutGrid = ({icon, text, label, heading}) => {
  return (
    <div className='flex justify-center items-center gap-55 flex-col bg-white rounded m-2 p-3 lg:p-7'>

        <img src={icon} alt="icon" width={65} height={65} className='bg-green-400 p-3 rounded-ful hover:bg-green-500 cursor-pointer' />

        <h1 className='text-1xl lg:text-2xl text-center text-green-500 font-semibold'>{heading}</h1>

        <p className='text-[16px] text-center text-slate-500'>{text}</p>

        <p className='bg-green-800 text-white px-6 py-2 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
        
    </div>
  )
}

export default AboutGrid