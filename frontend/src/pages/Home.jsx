// import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex items-center pl-[10%] h-[calc(100vh-72px)]">
      <div className='w-[60%] px-4 space-y-4'>
        <h1 className='text-[100px]'>Pure by Nature, <br />Perfect by You.</h1>
        <p className='text-2xl w-[60%]'>Indulge in the pure essence of nature with our organic skincare line,
          crafted with ingredients sourced directly from the earth.
          Each product is thoughtfully formulated to nourish and rejuvenate your skin,
          bringing out your natural radiance without harsh chemicals or artificial additives.
        </p>
        <div>
          <Link to={'./products'}>
            <button className='border-none bg-[#afad55] text-white p-[10px] w-[20%]'>View Products</button>
          </Link>
        </div>
      </div>
      <div className='w-[40%] h-full'>
        <img
          src="./skin.jpg"
          className="w-full h-full object-cover"
        />

      </div>
    </div>
  )
}
