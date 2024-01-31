import React from 'react'
import {call, fb, insta, sms, yt} from '../assets/icons'



const Contact = () => {
  return (
  <>
  <section className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-2 justify-center items-center'>

    <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-2 py-10 z-20'>

      <div className='flex justify-center items-start  gap-4 w-full'>
        <h1 className='text-green-800 font-bold text-[20px]'>Contact Info</h1>

        <div className='flex justify-center items-center text-lg font-semibold text-gray-600 mt-10 '>

          <span className='bg-green-400 p-2 rounded-full'> <img src={call} width={14} height={14} /></span>+252 63 3388317

        </div>

        <div className='flex justify-center items-center text-lg font-semibold text-gray-600 mt-10 '>

          <span className='bg-green-400 p-2 rounded-full'> <img src={call} width={14} height={14} /></span>+252 63 3388317

        </div>

        <div className='flex justify-center items-center text-lg font-semibold text-gray-600 mt-10 '>

          <span className='bg-green-400 p-2 rounded-full'> <img src={call} width={14} height={14} /></span>+252 63 3388317

        </div>
      </div>

    </div>

  </section>
  
  
  </>
  )
}

export default Contact