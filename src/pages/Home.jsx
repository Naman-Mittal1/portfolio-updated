import React from 'react';
import HeadInfo from '../components/HeadInfo/HeadInfo';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/Timeline/Timeline';
import Skillset from '../components/Skillset/Skillset';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header1 from '../components/Header/Header1';

const Home = () => {
  return (
    <>
      <Header1 />
      <HeadInfo />
      <Skillset />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
