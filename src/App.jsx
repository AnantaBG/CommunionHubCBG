import React from 'react';
import NavBar from './Components/Home/Navbar';
import Intro from './Components/Home/Intro';
import Hero from './Components/Home/Hero';
import { Helmet } from 'react-helmet';


const App = () => {
  return (
    <section className='w-11/12 mx-auto'>
      <Helmet>
        <title>CommunionHUB</title>
      </Helmet>
      <NavBar></NavBar>
      <Intro></Intro>
      <Hero></Hero>
    </section>
  );
};

export default App;