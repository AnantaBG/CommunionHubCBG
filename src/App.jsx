import { Card } from 'flowbite-react';
import React from 'react';
import NavBar from './Components/Home/Navbar';
import Intro from './Components/Home/Intro';
import Hero from './Components/Home/Hero';

const App = () => {
  return (
    <section className='w-11/12 mx-auto'>
      <NavBar></NavBar>
      <Intro></Intro>
      <Hero></Hero>
    </section>
  );
};

export default App;