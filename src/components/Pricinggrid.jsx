import React from 'react'

const Pricinggrid = ({plan, price, label, about}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white px-2 pt-10 pb-20 rounded-xl gap-4
    border-[3px] border-green-800'>
        <h1 className='text-green-00 text-2xl font-semibold font-sans'> {plan} </h1>
        <h2 className='text-green-600 text-3xl font-semibold'>{price}</h2>
        <h2 className='bg-green-800 text-white px-6 py-2 rounded-full text-[16px] hover:bg-black hover:text-white cursor-pointer'>{label}</h2>
        <p className='text-slate-900 text-[20px]'>{about}</p>
    </div>
  )
}

export default Pricinggrid