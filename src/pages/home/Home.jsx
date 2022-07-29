import React from 'react';
import GetInTouch from '../../components/getInTouch/GetInTouch';
import Help from '../../components/help/Help';
import Hero from '../../components/hero/Hero';
import Questions from '../../components/questions/Questions';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  return (
    <div>
        <Hero />
        <Testimonials />
        <Help />
        <Questions />
        <GetInTouch />
    </div>
  )
}

export default Home