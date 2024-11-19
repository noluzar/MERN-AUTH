import React from 'react'

export const About = () => {
    return (
        <div className='h-full flex items-center bg-[#afad55]'>
                <div className='w-[50%]'>
                    <img
                        src='./skin.jpg' 
                        className='h-[100vh]'
                        />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[100px]'>Pure by Nature, <br />Perfect by You.</h1>
                    <p className='w-[70%] text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Tempore debitis sapiente, consectetur a eligendi at vitae voluptatibus?
                        Impedit, aliquid. Laudantium amet expedita dolorum culpa ex sit ad, consectetur i
                        ncidunt dolorem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Tempore debitis sapiente, consectetur a eligendi at vitae voluptatibus?
                        Impedit, aliquid. Laudantium amet expedita dolorum culpa ex sit ad, consectetur i
                        ncidunt dolorem?
                    </p>
                </div>
            </div>
    )
}
