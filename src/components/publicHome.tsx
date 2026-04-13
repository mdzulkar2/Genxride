'use client'
import React, { useState } from 'react';
import Hero from './hero';
import Vehicle from './vehicle';
import AuthModel from './authModel';

const PublicHome: React.FC = () => {
    const[authopen,setAuthopen]=useState(false)
  return (
  <>
    
    <Hero/>
    <Vehicle/>
    [/*<AuthModel open={authopen} onClose={() => setAuthopen(false)}/>*/]
  </>
  );
};

export default PublicHome;