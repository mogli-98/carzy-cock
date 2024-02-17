import React, { useContext, useEffect } from 'react'
import "./Exoticsection4.css";
import thinline from "../../assets/image/exotic/thinline.png";
import section4img from "../../assets/image/exotic/section4img.jpg";
import { Link } from 'react-router-dom';
import AuthContext from '../../utility/Usecontext';
import rare from '../../assets/image/exotic/rare.png';
import smoky from '../../assets/image/exotic/smoky.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Exoticsection4 = () => {
    const{offset} = useContext(AuthContext)
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='exoticsection4' id='exoticsection4'>
            <div className="exoticsection4-top"
             data-aos="fade-up"
             data-aos-offset="300">
                <span className='exoticsection4-top-title'>
                    DISCOVER
                </span>
            </div>
            <div className="exoticsection4-middle">
                <div className="exoticsection4-middle-line1"
                data-aos="fade"
                data-aos-offset="100"
                data-aos-delay="2500" >
                    <img src={thinline} alt="" className="exoticsection4-middle-line-img1" />
                </div>
                <div className="exoticsection4-middle-wrap">
                    <div className="exoticsection4-middle-wrap-left">
                        <div className="exoticsection4-middle-wrap-left-animation"
                        data-aos="fade-up"
                        data-aos-offset="300">
                        <div className="exoticsection4-middle-wrap-left-1 ">
                            <span className='exoticsection4-middle-wrap-left-title-text1'>RARE</span>
                        </div>
                        <div className="exoticsection4-middle-wrap-left-2" id='exotic-raretext2'>
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                Aged in oak casks, this is a blended malt whisky
                            </span>
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                with the smoothness of a fine single malt whisky.
                            </span>
                        </div>
                        <div className="exoticsection4-middle-wrap-left-3" >
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                Casks: Ex Bourbon and Ex Sherry casks.
                            </span>
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                Savour a new level of smoothness.
                            </span>
                        </div>
                        </div>
                        <div className="exoticsection4-button1-cover"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-delay="1000">
                        <Link to="/Rare" className='blackColor'><div className="exoticsection4-button1">
                            EXPLORE
                        </div></Link>
                        </div>

                    </div>
                    <div className="exoticsection4-middle-wrap-righttop">
                        <div className="exoticsection4-middle-wrap-right-image1"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="500">
                            <img src={rare} className="exoticsection4-middle-wrap-right-img1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="exoticsection4-bottom">
                <div className="exoticsection4-middle-line1" 
                data-aos="fade"
                
                data-aos-delay="2000">
                    <img src={thinline} alt="" className="exoticsection4-middle-line-img1" />
                </div>
                <div className="exoticsection4-middle-wrap">
                    <div className="exoticsection4-middle-wrap-left">
                        <div className="exoticsection4-middle-wrap-left-anima"
                        data-aos="fade-up"
                        data-aos-offset="300">
                        <div className="exoticsection4-middle-wrap-left-1">
                            <span className='exoticsection4-middle-wrap-left-title-text1'>SMOKY</span>
                        </div>
                        <div className="exoticsection4-middle-wrap-left-2" >
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                For those who like their whisky mildly peated and infused
                            </span>
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                with honeyed smokiness, this is an experience you will
                            </span>
                            <span className='exoticsection4-middle-wrap-left-title-text2'>
                                want to return to time and again.
                            </span>
                        </div>
                        </div>
                        <Link to="/Smoky" className='blackColor'>
                        <div className="exoticsection4-button1-cover"
                         data-aos="fade-up"
                         data-aos-offset="100"
                         data-aos-delay="1000">
                            <div className="exoticsection4-button2">
                            EXPLORE
                        </div>
                        </div>
                        </Link>

                    </div>
                    <div className="exoticsection4-middle-wrap-rightbottom">
                        <div className="exoticsection4-middle-wrap-right-image2 "
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="500">
                            <img src={smoky} className="exoticsection4-middle-wrap-right-img2" />
                        </div>
                    </div>
                </div>
                <div className="exoticsection4-middle-line2"
                data-aos="fade"
                
                data-aos-delay="2000">
                    <img src={thinline} alt="" className="exoticsection4-middle-line-img2" />
                </div>
            </div>

        </div>
    )
}

export default Exoticsection4