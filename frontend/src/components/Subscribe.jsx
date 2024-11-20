// import React from 'react'

export const Subscribe = () => {
  return (
    <div className='flex items-center justify-between p-[20px] px-8 h-[30vh]'>
       <div>
        <div className="py-4">
          <h1 className='font-semibold text-[50px]'>Our Newsletter</h1>
          <p className='text-[20px]'>Subscribe to our Newsletter And Get Updated</p>
        </div>
        <div className='bg-white h-[6vh] flex justify-between w-[30vw]'>
          <input placeholder='Enter your email' className="pl-4"></input>
          <button className='bg-[#afad55] w-[25%] h-full text-white'>Subscribe</button>
        </div>
      </div>
      <div>
        <h1 className='text-[50px]'>Pure by Nature, Perfect by You.</h1>
        <p className="w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptates consequuntur explicabo voluptatibus accusantium 
         </p>
      </div>
     

    </div>
  )
}
