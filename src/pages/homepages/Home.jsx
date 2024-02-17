import React, { useState } from 'react'

import ContactUs from '../../components/contactus/ContactUs';

import Homeintro2 from '../../components/home-intro-2/Homeintro2';
import Homeintro3 from "../../components/home-intro-3/Homeintro3.jsx";
import Homeintro4 from "../../components/home-intro-4/Homeintro4.jsx";

import Landing from '../../components/landing/Landing';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homeintro01 from "../../components/home-intro-0&1/Homeintro01.jsx";
import Manifesto from '../../components/manifesto/Manifesto';

const Home = () => {
  

  return (
    <>
    
      <Manifesto />
      <ContactUs />
      <Landing />
      <div className='home background-blur remove-scroll axies' id='homeDiv'>

        <Header/>
      
        <Homeintro01/>
        <Homeintro2/>
        <Homeintro3 />
        <Homeintro4 />
        
        <Footer/>
      

      </div>

    </>
  )
}

export default Home
