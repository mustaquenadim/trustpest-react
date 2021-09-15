import React from 'react';
import Footer from '../components/common/Footer';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Clients from '../components/home/Clients';
import Expect from '../components/home/Expect';
import Process from '../components/home/Process';
import Services from '../components/home/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Process />
      <Expect />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;