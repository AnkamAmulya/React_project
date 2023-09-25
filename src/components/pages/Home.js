import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import SignUp from './SignUp';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      <SignUp/>
    </>
  );
}

export default Home;