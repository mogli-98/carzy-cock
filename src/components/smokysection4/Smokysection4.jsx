import React, { useContext, useEffect } from 'react'
import "./Smokysection4.css";
import thinline from "../../assets/image/exotic/thinline.png";
import exotic from "../../assets/image/smoky/exotic.png";
import { Link } from 'react-router-dom';
import AuthContext from '../../utility/Usecontext';
import rare from '../../assets/image/smoky/rare.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Smokysection4 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='smokysection4' id='smokysection4'>
            <div className="smokysection4-top"
            data-aos="fade-up"
            data-aos-offset="300">
                <span className='smokysection4-top-title'>
                    DISCOVER
                </span>
            </div>
            <div className="smokysection4-middle">
                <div className="smokysection4-middle-linetop"
                data-aos="fade"
                data-aos-offset="100"
                data-aos-delay="2500">
                    <img src={thinline} alt="" className="smokysection4-middle-line-img1" />
                </div>
                <div className="smokysection4-middle-wrap">
                    <div className="smokysection4-middle-wrap-left">
                        <div className="smokysection4-middle-wrap-left-texttop"
                         data-aos="fade-up"
                         data-aos-offset="300">
                        <div className="smokysection4-middle-wrap-left-1">
                            <span className='smokysection4-middle-wrap-left-title-text1'>RARE</span>
                        </div>
                        <div className="smokysection4-middle-wrap-left-2" id='smoky-rare-text2'>
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                Aged in oak casks, this is a blended malt whisky
                            </span>
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                with the smoothness of a fine single malt whisky.
                            </span>

                        </div>
                        <div className="smokysection4-middle-wrap-left-3">
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                Casks: Ex Bourbon and Ex Sherry casks.
                            </span>
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                Savour a new level of smoothness.
                            </span>
                        </div>
                        </div>
                        <Link to="/Rare" className='blackColor'>
                            <div className="smokysection4-button1-cover"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-delay="1000">
                            <div className="smokysection4-button1 ">
                            EXPLORE
                        </div></div></Link>

                    </div>
                    <div className="smokysection4-middle-wrap-righttop">
                        <div className="smokysection4-middle-wrap-right-image1"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="500">
                            <img src={rare} className="smokysection4-middle-wrap-right-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="smokysection4-bottom">
                <div className="smokysection4-middle-linemiddle">
                    <img src={thinline} alt="" className="smokysection4-middle-line-img2" />
                </div>
                <div className="smokysection4-middle-wrap">
                    <div className="smokysection4-middle-wrap-left">
                    <div className="smokysection4-middle-wrap-left-animation"
                    data-aos="fade-up"
                    data-aos-offset="300">
                        <div className="smokysection4-middle-wrap-left-1">
                            <span className='smokysection4-middle-wrap-left-title-text1'>EXOTIC</span>
                        </div>
                        <div className="smokysection4-middle-wrap-left-2">
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                Aged in oak casks, this is a blended malt whisky
                            </span>
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                with the smoothness of a fine single malt whisky.
                            </span>
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                Casks: Ex Bourbon and Ex Sherry casks.
                            </span>
                            <span className='smokysection4-middle-wrap-left-title-text2'>
                                Savour a new level of smoothness.
                            </span>
                        </div>
                        </div>
                        <Link to="/Exotic" className='blackColor'>
                        <div className="smokysection4-button1-cover"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-delay="1000">
                            <div className="smokysection4-button2">
                            EXPLORE
                        </div>
                        </div></Link>

                    </div>
                    <div className="smokysection4-middle-wrap-rightbottom">
                        <div className="smokysection4-middle-wrap-right-image2"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="500">
                            <img src={exotic} className="smokysection4-middle-wrap-right-img2" />
                        </div>
                    </div>
                </div>
                <div className="smokysection4-middle-linebottom"
                data-aos="fade"
                
                data-aos-delay="2000">
                    <img src={thinline} alt="" className="smokysection4-middle-line-img3" />
                </div>
            </div>

        </div>
    )
}

export default Smokysection4