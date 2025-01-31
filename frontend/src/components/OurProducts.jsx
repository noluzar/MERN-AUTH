import React from 'react'

const OurProducts = () => {
  return (
    <div className='bg-[#f6e9db] p-[50px] space-y-[50px]'>
      <h1 className='text-center text-3xl lg:text-5xl font-semibold'>OUR PRODUCTS</h1>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center space-y-4 text-2xl font-semibold bg-'>
            <div className='bg-[#f1e2c2] rounded-full p-8 w-[35%]'>
                 <img
            src='cream.png'
            className=''
            />
            </div>
            <p>Cream</p>
        </div>
        <div className='flex flex-col items-center space-y-4 text-2xl font-semibold'>
            <div className='bg-[#f1e2c2] rounded-full p-8 w-[35%]'>
                 <img
            src='serum.png'
            className=''
            />
            </div>
            <p>Serum</p>
        </div>
        <div className='flex flex-col items-center space-y-4 text-2xl font-semibold'>
            <div className='bg-[#f1e2c2] rounded-full p-8 w-[35%]'>
                 <img
            src='lotion.png'
            className=''
            />
            </div>
            <p>Lotion</p>
        </div>
        <div className='flex flex-col items-center space-y-4 text-2xl font-semibold'>
            <div className='bg-[#f1e2c2] rounded-full p-8 w-[35%]'>
                 <img
            src='sunblock.png'
            className=''
            />
            </div>
            <p>Sunscreen</p>
        </div>
        <div className='flex flex-col items-center space-y-4 text-2xl font-semibold'>
            <div className='bg-[#f1e2c2] rounded-full p-8 w-[35%]'>
                 <img
            src='coconut.png'
            className=''
            />
            </div>
            <p>Coconut Oil</p>
        </div>
      </div>
    </div>
  )
}

export default OurProducts
