import React, { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import Bgfooter from '../bgfooter/Bgfooter';
import ContactUs from '../../components/contactus/ContactUs';
import Manifesto from '../../components/manifesto/Manifesto';
import Landing from '../../components/landing/Landing';

function  WithNav()  {
  
  
  
  return (
    <>
      <Manifesto />
      <ContactUs/>
      <Landing />
      <div id='homeDiv' className='background-blur remove-scroll restrictHeight'>
        <Header/>
        <Outlet />
        <Footer />
      </div>
      
    </>
  );
};
export default WithNav;