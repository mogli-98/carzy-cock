import React, { useEffect } from 'react'
import "./Wiskymainintro1.css";
import homeintroimagecock from "../../assets/homeintroimagecock.png";
import smokyimg from "../../assets/smokyimg.webp";
import exoticimg from "../../assets/exoticimg.webp";
import rareimg from '../../assets/rareimg.webp';

import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Wiskymainintro1 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className='wiskymainintro1'>
       <div className="wiskymainintro1-image-cock">
        <img src={homeintroimagecock} alt="" className="wiskymainintro1-image-cock-img" />
       </div>
            <div className="wiskymainintro1-wrap">
                <div className="wiskymainintro1-top-wrapper">
                    <div className="wiskymainintro1-top-wrapper-left">
                        <div className="wiskymainintro1-top-wrapper-left-exotic"
                           data-aos="fade-up"
                           data-aos-easing="ease-in-sine"
                           data-aos-duration="500"
                           data-aos-delay="1200"
                           >
                            <div className="wiskymainintro1-top-w-l-items1">
                                 <span className='wiskymainintro1-title'>EXOTIC</span>
                            </div>
                             <div className="wiskymainintro1-top-w-l-items2">
                                <span className='wiskymainintro1-des'>A confluence of the choicest Scotch Malts, Indian Malts</span>
                                <span className='wiskymainintro1-des'>and Bourbon. A feast for the senses.</span>
                            </div>
                    
                        </div>
                        <Link to="/Exotic"><span className='wiskymainintro1-btn'
                        data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="1500"
                        >EXPLORE </span></Link>
                        
                        
                    </div>
                    
                    <div className="wiskymainintro1-top-wrapper-right"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="1700">
                        <div className="wiskymainintro1-top-wrapper-right-image">
                            <img src={exoticimg}  className="wiskymainintro1-top-wrapper-right-image-img" alt=""/>
                        </div>
                    </div>
            
                </div>
                
                <div className="wiskymainintro1-top-wrapper">
                    <div className="wiskymainintro1-top-wrapper-left">
                        <div className="wiskymainintro1-top-wrapper-left-rare"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="1300"
                        >
                            <div className="wiskymainintro1-top-w-l-items1">
                                <span className='wiskymainintro1-title'>RARE</span>
                            </div>
                            <div className="wiskymainintro1-top-w-l-items2">
                                 <span className='wiskymainintro1-des'>Aged in oak casks, this is a blended malt whisky</span>
                                 <span className='wiskymainintro1-des'>with the smoothness of a fine single malt whisky.</span>
                            </div>
                             <div className="wiskymainintro1-top-w-l-items3">
                                <span className='wiskymainintro1-des'>Casks: Ex Bourbon and Ex Sherry casks.</span>
                                <span className='wiskymainintro1-des'>Savour a new level of smoothness.</span>
                            </div>
                            </div>
                        
                            <Link to="/Rare"><span className='wiskymainintro1-btn'
                             data-aos="fade-up"
                             data-aos-easing="ease-in-sine"
                             data-aos-duration="500"
                             data-aos-delay="1400"
                            >EXPLORE</span></Link>
                        
                        
                    </div>
                    <div className="wiskymainintro1-top-wrapper-right"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="1700">
                        <div className="wiskymainintro1-top-wrapper-right-image">
                            <img src={rareimg} className="wiskymainintro1-top-wrapper-right-image-img" alt=""/>
                        </div>
                    </div>
                    
            
                </div>
                
                
                <div className="wiskymainintro1-top-wrapper">
                    <div className="wiskymainintro1-top-wrapper-left">
                        <div className="wiskymainintro1-top-wrapper-left-smoky"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="1200">
                            <div className="wiskymainintro1-top-w-l-items1">
                                <span className='wiskymainintro1-title'>SMOKY</span>
                            </div>
                             <div className="wiskymainintro1-top-w-l-items2">
                                <span className='wiskymainintro1-des'>For those who like their whisky mildly peated and infused</span>
                                <span className='wiskymainintro1-des'>with honeyed smokiness, this is an experience you will</span>
                                <span className='wiskymainintro1-des'>want to return to time and again.</span>
                             </div>
                    
                        </div>
                        <Link to="/Smoky"><span className='wiskymainintro1-btn'
                         data-aos="fade-up"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="500"
                         data-aos-delay="1200">EXPLORE</span></Link>
                        
                        
                    </div>
                    <div className="wiskymainintro1-top-wrapper-right"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="1700">
                        <div className="wiskymainintro1-top-wrapper-right-image">
                            <img src={smokyimg} className="wiskymainintro1-top-wrapper-right-image-img" alt=""/>
                        </div>
                    </div>
            
                </div>
                
            </div>

    </div>
  )
}

export default Wiskymainintro1