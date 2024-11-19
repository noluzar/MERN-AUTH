import React from 'react'

export const Subscribe = () => {
  return (
    <div className='flex items-center justify-evenly p-[20px]'>
        <div>
            <h1 className='font-semibold text-[50px]'>Our Newsletter</h1>
            <p className='text-[20px]'>Subscribe to our Newsletter And Get Updated</p>
        </div>
        <div className='bg-white p-2 w-[20%] h-[6vh] flex justify-between'>
            <input placeholder='Enter your email'></input>
            <button className='bg-[#afad55] w-1/3 h-auto'>Subscribe</button>
        </div>
    </div>
  )
}
