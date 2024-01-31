import React from 'react'

const ClientGird = ({image, about, name, profile}) => {
  return (
    <div className='bg-slate-200 px-6 py-8 flex justify-center items-center flex-col gap-4 rounded-xl'>
        <img src={image} alt="image" width={140} height={140} />
        <p className='text-[15px] text-center text-gray-800'>{about}</p>
        <h1 className='text-center text-green-800 font-bold'>{name}</h1>
        <p className='text-center text-[15px] text-gray-800'>{profile}</p>
    </div>
  )
}

export default ClientGird