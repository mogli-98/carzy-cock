import React, { useEffect } from 'react'
import "./Homeintro4.css";
import homeintroimagecock from "../../assets/homeintroimagecock.png";
import smokyimg from "../../assets/smokyimg.webp";
import intro4lineimage from "../../assets/intro4lineimage.png";
import mobileviewline from "../../assets/mobileviewline.png";
import { Link } from 'react-router-dom';
import exoticimg from '../../assets/exoticimg.webp';
import rareimg from '../../assets/rareimg.webp';
import homeintro4design1 from '../../assets/homeintro4design1.png';
import homeintro42nddesign from '../../assets/homeintro42nddesign.png';
import mobileviewcock from '../../assets/mobileviewcock.png';
import mobilehomeintro4 from '../../assets/mobilehomeintro4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homeintro4 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='homeintro4'>
            {/***********************mobileview****************/}
            <div className="homeintro4-mobileview">
                <div className="homeintro4-mobileview-top">
                    <div className="homeintro4-mobileview-design1" >
                        <img src={homeintro4design1} alt="" className="homeintro4-mobileview-design1-img" />
                    </div>
                    <div className="homeintro4-top-mobileview-wrap">
                        <div className="homeintro4-mobileview-top-wrapper-bottom">
                            <div className="homeintro4-mobileview-top-w-l-smoky-text" >
                                <div className="homeintro4-mobileview-top-w-l-smoky">
                                    <span className='homeintro4-mobileview-title'> RARE</span>
                                </div>
                                <div className="homeintro4-mobileview-top-w-l-items">
                                    <span className='homeintro4-mobileview-des'>Aged in oak casks, this is a blended malt whisky</span>
                                    <span className='homeintro4-mobileview-des'>with the smoothness of a fine single malt whisky.</span>

                                </div>
                                <div className="homeintro4-mobileview-top-w-l-items1">
                                    <span className='homeintro4-mobileview-des'>Casks: Ex Bourbon and Ex Sherry casks.</span>
                                    <span className='homeintro4-mobileview-des'>Savour a new level of smoothness.</span>

                                </div>

                            </div>
                            <Link to="/Rare">
                                <span className='homeintro4-mobileview-btn'>
                                    EXPLORE
                                </span>
                            </Link>


                        </div>

                        <div className="homeintro4-mobileview-top-wrapper-top">
                            <div className="homeintro4-mobileview-top-wrapper-right-image">
                                <img src={exoticimg} className="homeintro4-mobileview-top-wrapper-right-img" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="homeintro4-middle-mobileview-wrap">
                        <div className="homeintro4-middle-mobileview-wrap-cock">
                            <img src={mobileviewcock} alt="" className="homeintro4-middle-mobileview-wrap-cock-img" />
                        </div>
                        <div className="homeintro4-mobileview-middle-wrapper-line">
                            <img src={mobileviewline} alt="" className="homeintro4-mobileview-middle-wrapper-lineimage" />
                        </div>
                        <div className="homeintro4-middle-mobileview-wrap-design">
                            <img src={homeintro42nddesign} alt="" className="homeintro4-middle-mobileview-wrap-design-img" />
                        </div>
                        <div className="homeintro4-mobileview-top-wrapper-bottom">
                            <div className="homeintro4-mobileview-top-w-l-smoky-text" >
                                <div className="homeintro4-mobileview-top-w-l-rare">
                                    <span className='homeintro4-mobileview-title'>SMOKY</span>
                                </div>
                                <div className="homeintro4-mobileview-top-w-l-items">
                                    <span className='homeintro4-mobileview-des'>For those who like their whisky mildly peated and infused</span>
                                    <span className='homeintro4-mobileview-des'>with honeyed smokiness, this is an experience you will</span>
                                    <span className='homeintro4-mobileview-des'>want to return to time and again.</span>
                                </div>
                                

                            </div>
                            <Link to="/Smoky">
                                <span className='homeintro4-mobileview-btn'>
                                    EXPLORE
                                </span>
                            </Link>


                        </div>

                        <div className="homeintro4-mobileview-middle-wrapper-top">
                            <div className="homeintro4-mobileview-top-wrapper-right-image">
                                <img src={exoticimg} className="homeintro4-mobileview-top-wrapper-right-img" alt="" />
                            </div>
                        </div>

                    </div>
                    {/* <div className="homeintro4-bottom-mobileview-wrap">
                        <div className="homeintro4-bottom-mobileview-wrap-line">
                            <img src={mobileviewline} alt="" className="homeintro4-bottom-mobileview-wrap-line-img" />
                        </div>
                        <div className="homeintro4-bottom-mobileview-wrap-design">
                            <img src={mobilehomeintro4} alt="" className="homeintro4-bottom-mobileview-wrap-design-img" />
                        </div>
                        <div className="homeintro4-mobileview-top-wrapper-bottom">
                            <div className="homeintro4-mobileview-top-w-l-smoky-text" >
                                <div className="homeintro4-mobileview-top-w-l-exotic">
                                    <span className='homeintro4-mobileview-title'>EXOTIC</span>
                                </div>
                                <div className="homeintro4-mobileview-top-w-l-items">
                                    <span className='homeintro4-mobileview-des'>Aged in oak casks, this is a blended malt whisky</span>
                                    <span className='homeintro4-mobileview-des'>with the smoothness of a fine single malt whisky.</span>
                                    <span className='homeintro4-mobileview-des'>Casks: Ex Bourbon and Ex Sherry casks.</span>
                                    <span className='homeintro4-mobileview-des'>Savour a new level of smoothness.</span>
                                </div>

                            </div>
                            <Link to="/Exotic">
                                <span className='homeintro4-mobileview-exoticbtn'>
                                    EXPLORE
                                </span>
                            </Link>


                        </div>

                        <div className="homeintro4-mobileview-top-wrapper-bottom">
                            <div className="homeintro4-mobileview-top-wrapper-right-image">
                                <img src={exoticimg} className="homeintro4-mobileview-top-wrapper-right-img" alt="" />
                            </div>
                        </div>

                    </div> */}
                </div></div>


            {/***********************END************************/}

            <div className="homeintro4-wrap">
                <div className="homeintro4-wrap-top">
                    <div className="homeintro4bg"
                        data-aos="fade-down-right"

                        data-aos-duration="1000"
                        data-aos-offset='300'
                        data-aos-delay='3000'
                    >
                        <img src={homeintroimagecock} alt="" className="homeintro4bg-img" />
                    </div>
                    <div className="homeintro4-top-wrapper">
                        <div className="homeintro4-top-wrapper-left">
                            <div className="homeintro4-top-w-l-exotic-text"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500" >
                                <div className="homeintro4-top-w-l-exotic">
                                    <span className='homeintro4-title'>RARE</span>
                                </div>
                                <div className="homeintro4-top-w-l-items">
                                    <span className='homeintro4-des'>Aged in oak casks, this is a blended malt whisky</span>
                                    <span className='homeintro4-des'>with the smoothness of a fine single malt whisky.</span>
                                </div>
                                <div className="homeintro4-top-w-l-items1">
                                    <span className='homeintro4-des'>Casks: Ex Bourbon and Ex Sherry casks.</span>
                                    <span className='homeintro4-des'>Savour a new level of smoothness.</span>
                                </div>
                              

                            </div>
                            <Link to="/Rare">
                                <span className='homeintro4-btn-exotic'
                                    data-aos="zoom-in"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    data-aos-delay='1500'>
                                    EXPLORE
                                </span>
                            </Link>


                        </div>

                        <div className="homeintro4-top-wrapper-right">
                            <div className="homeintro4-top-wrapper-right-image"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay='1000'>
                                <img src={exoticimg} className="homeintro4-top-wrapper-right-image-img" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="homeintro4-top-wrapper-line"
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"

                        data-aos-duration="500"
                        data-aos-offset="-50"
                        data-aos-delay='1800'>
                        <img src={intro4lineimage} alt="" className="homeintro4-top-wrapper-lineimage" />
                    </div>
                    <div className="homeintro4-top-wrapper">
                        <div className="homeintro4-top-wrapper-left">
                            <div className="homeintro4-top-wrapper-left-text"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay='500'



                            >
                                <div className="homeintro4-top-w-l-rare"


                                >
                                    <span className='homeintro4-title'>SOMKY</span>
                                </div>
                                <div className="homeintro4-top-w-l-items">
                                    <span className='homeintro4-des'>A confluence of the choicest Scotch Malts, Indian Malts</span>
                                    <span className='homeintro4-des'>and Bourbon. A feast for the senses.</span>
                                </div>
                                {/* <div className="homeintro4-top-w-l-items1">
                                    <span className='homeintro4-des'>Casks: Ex Bourbon and Ex Sherry casks.</span>
                                    <span className='homeintro4-des'>Savour a new level of smoothness.</span>
                                </div> */}
                            </div>

                            <Link to="/Smoky"><span
                                data-aos="zoom-in"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"

                                data-aos-delay='1000'
                                className='homeintro4-btn-rare'>EXPLORE</span></Link>


                        </div>
                        <div className="homeintro4-top-wrapper-right">
                            <div className="homeintro4-top-wrapper-right-image"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"

                                data-aos-delay='1000'>
                                <img src={rareimg} className="homeintro4-top-wrapper-right-image-img" alt="" />
                            </div>
                        </div>


                    </div>
                    <div className="homeintro4-top-wrapper-line"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-offset='200'>
                        <img src={intro4lineimage} alt="" className="homeintro4-top-wrapper-lineimage" />
                    </div>
                </div>
                {/* <div className="homeintro4-wrap-bottom">
                    <div className="homeintro4-top-wrapper">
                        <div className="homeintro4-top-wrapper-left">
                            <div className="homeintro4-top-wrapper-left-somkytext"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay="100"
                            >
                                <div className="homeintro4-top-w-l-smoky">
                                    <span className='homeintro4-title'>SMOKY</span>
                                </div>
                                <div className="homeintro4-top-w-l-items">
                                    <span className='homeintro4-des'>For those who like their whisky mildly peated and infused</span>
                                    <span className='homeintro4-des'>with honeyed smokiness, this is an experience you will</span>
                                    <span className='homeintro4-des'>want to return to time and again.</span>
                                </div>
                            </div>

                            <Link to="/Smoky"><span className='homeintro4-btn-smoky'
                                data-aos="zoom-in"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"

                                data-aos-delay='800'>EXPLORE</span></Link>


                        </div>

                        <div className="homeintro4-top-wrapper-right">
                            <div className="homeintro4-top-wrapper-right-image"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"

                                data-aos-delay='1000'>
                                <img src={smokyimg} className="homeintro4-top-wrapper-right-image-img" alt="" />
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>



        </div>
    )
}

export default Homeintro4