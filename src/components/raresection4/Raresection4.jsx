import React, { useContext, useEffect } from 'react'
import "./Raresection4.css";
import thinline from "../../assets/image/exotic/thinline.png";
import smoky from "../../assets/image/rare/smoky.png";
import exotic from "../../assets/image/rare/exotic.png";
import { Link } from 'react-router-dom';
import AuthContext from '../../utility/Usecontext';

const Raresection4 = () => {
    const {offset}= useContext(AuthContext);
   
    
    return (
        <div className='raresection4' id='raresection4'>
            <div className="raresection4-top"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="500">
                <span className='raresection4-top-title'>
                    DISCOVER
                </span>
            </div>
            <div className="raresection4-middle">
                <div className="raresection4-middle-linetop"
                data-aos="fade"
                data-aos-offset="-100"
                data-aos-delay="3000">
                    <img src={thinline} alt="" className="raresection4-middle-line-imgtop" />
                </div>
                <div className="raresection4-middle-wrap">
                    <div className="raresection4-middle-wrap-left">
                    <div className="raresection4-middle-wrap-left-textanimation"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="1000">
                        <div className="raresection4-middle-wrap-left-1 " >
                            <span className='raresection4-middle-wrap-left-title-text1'>SMOKY</span>
                        </div>
                        <div className="raresection4-middle-wrap-left-2 ">
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                For those who like their whisky mildly peated and infused
                            </span>
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                with honeyed smokiness, this is an experience you will
                            </span>
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                want to return to time and again.
                            </span>
                        </div>
                        </div>   
                        <Link to="/Smoky" className='blackColor'>
                            <div className="raresection4-button1-cover"
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-delay="2500">
                                <div className="raresection4-button1">
                            EXPLORE
                        </div></div></Link>

                    </div>
                    <div className="raresection4-middle-wrap-righttop">
                        <div className="raresection4-middle-wrap-right-image1"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="1500" >
                            <img src={smoky} className="raresection4-middle-wrap-right-img1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="raresection4-bottom">
                <div className="raresection4-middle-linemiddle "
                data-aos="fade"
                
                data-aos-delay="2000" >
                    <img src={thinline} alt="" className="raresection4-middle-line-imgmiddle" />
                </div>
                <div className="raresection4-middle-wrap">
                    <div className="raresection4-middle-wrap-left">
                        <div className="raresection4-middle-wrap-left-animation1"
                        data-aos="fade-up"
                        
                        data-aos-delay="2000">
                        <div className="raresection4-middle-wrap-left-1 " 
                         >
                            <span className='raresection4-middle-wrap-left-title-text1'>EXOTIC</span>
                        </div>
                        <div className="raresection4-middle-wrap-left-2">
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                Aged in oak casks, this is a blended malt whisky
                            </span>
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                with the smoothness of a fine single malt whisky.
                            </span>
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                Casks: Ex Bourbon and Ex Sherry casks.
                            </span>
                            <span className='raresection4-middle-wrap-left-title-text2'>
                                Savour a new level of smoothness.
                            </span>
                        </div>
                        </div>
                        <Link to="/Exotic" className='blackColor'>
                        <div className="raresection4-button1-cover"
                        data-aos="fade-up"
                        data-aos-offset="50"
                        data-aos-delay="2500">
                            <div className="raresection4-button2 " >
                            EXPLORE

                        </div></div></Link>

                    </div>
                    <div className="raresection4-middle-wrap-rightbottom">
                        <div className="raresection4-middle-wrap-right-image2 " 
                         data-aos="fade-up"
                        
                         data-aos-delay="2500">
                            <img src={exotic} className="raresection4-middle-wrap-right-img2" />
                        </div>
                    </div>
                </div>
                <div className="raresection4-middle-linebottom " 
                data-aos="fade"
                
                data-aos-delay="2000">
                    <img src={thinline} alt="" className="raresection4-middle-line-imgbottom" />
                </div>
            </div>

        </div>
    )
}

export default Raresection4