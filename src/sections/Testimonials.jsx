import React from 'react'
import { clients } from '../exports'
import ClientGird from '../components/ClientGird'

const Testimonials = () => {
  return (
    <section className='w-full flex flex-col h-fit  p-5 lg:gap-15'>
      <p className='text-center text-xl'>Testimonials</p>
      <h1 className='text-6xl text-green-900 font-bold text-center leading-[68px]'>What Clients Says</h1>
      <p className='text-[25px] text-slate-950 text-center ml-10 mr-10'>
        
       Welcome to StellarHost, where dreams take flight! 🚀 Our agency's web hosting services 
       are out of this world! Clients rave about the seamless experience, lightning-fast speeds 
       ⚡, and top-notch customer support. "StellarHost made my website launch a breeze! 👏 Highly 
       recommend for reliability and stellar service!" 
      </p>

      <div className='flex justify-center items-center flex-wrap mt-5 w-full gap-2'>
        {
          clients.map((client)=> (
            <div key={client.name} className='w-80'>
              <ClientGird {...client} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials