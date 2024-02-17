import React, { useEffect } from 'react'
import "./Wiskymainline.css";
import lineshape from "../../assets/image/whiskysection/lineshape.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wiskymainline = () => {
  useEffect(() => {
    AOS.init();
}, [])
useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className="wiskymainline-wrapper">
    <div className='wiskymainline'
    data-aos="fade-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="500"
    data-aos-delay="1000">
      <img className='wiskymainline-img' src={lineshape} alt="" />
    </div>
    </div>
  )
}

export default Wiskymainline