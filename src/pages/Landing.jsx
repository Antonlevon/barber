import React from 'react';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';

const Landing = () => {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Team />
      <Testimonials />
      <BookingForm />
    </>
  );
};

export default Landing;
