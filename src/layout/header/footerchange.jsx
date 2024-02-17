import React from 'react'
import Manifesto from '../../components/manifesto/Manifesto'
import ContactUs from '../../components/contactus/ContactUs'
import Landing from '../../components/landing/Landing'
import Header from './Header'
import { Outlet } from 'react-router';
import Bgfooter from '../../layout/bgfooter/Bgfooter.jsx';

const Footerchange = () => {
  return (
    <div><Manifesto />
    <ContactUs/>
    <Landing />
    <div id='homeDiv' className='background-blur remove-scroll restrictHeight'>
      <Header/>
      <Outlet />
      <Bgfooter/>
    </div></div>
  )
}

export default Footerchange