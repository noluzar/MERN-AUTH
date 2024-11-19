// import React from 'react';
import { Home } from '../pages/Home';
import { About } from '../components/About';
import { Subscribe } from '../components/Subscribe';


export const MainLayout = () => {
  return (
    <div>
      <section id='home'>
      <Home/>
      </section>

      <section id='about'>
      <About/>
      </section>

      <section id='contact'>
      <Subscribe/>
      </section>
   
    </div>
  )
}
