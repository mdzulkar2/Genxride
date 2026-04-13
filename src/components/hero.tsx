'use client'
import React from 'react';
import {motion} from "framer-motion"
function Hero ()  {
  return (
	<div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:"url('/hero.jpeg')"}}>
  <div className='absolute inset-0 bg-black/80'/>
  <div className='relative z-10 flex items-center justify-center h-full'>
    <h1 className='text-white text-4xl font-bold'>Welcome to GenXRide</h1>
  </div>
  <div className='realative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center'>
    <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6}}
    className='text-white font-bold text-4xl sm:text-5xl md:text-6xl'>
        Welcome to GenXRide
    </motion.div>
  </div>
</div>
  );
};

export default Hero;