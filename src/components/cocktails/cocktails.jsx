import React, { useEffect } from 'react'
import "../../assets/css/cocktails.css";
import Section03 from "../../assets/image/cocktails/section03.jpg";
import section11 from "../../assets/image/cocktails/section11.svg";
import section12 from "../../assets/image/cocktails/section12.svg";
import section21 from "../../assets/image/cocktails/section1desk.webp";
import section22 from "../../assets/image/cocktails/section2desk.webp";
import section23 from "../../assets/image/cocktails/section3desk.webp";
import section24 from "../../assets/image/cocktails/section4desk.webp";
import section25 from "../../assets/image/cocktails/section5desk.webp";
import section26 from "../../assets/image/cocktails/section6desk.webp";
import section27 from "../../assets/image/cocktails/section7desk.webp";
import section28 from "../../assets/image/cocktails/section8desk.webp";
import section29 from "../../assets/image/cocktails/section9desk.webp";
import phone1 from "../../assets/image/cocktails/cocktails_mobile-01.png"
import phone2 from "../../assets/image/cocktails/cocktails_mobile-02.png"
import phone3 from "../../assets/image/cocktails/cocktails_mobile-03.png"
import phone4 from "../../assets/image/cocktails/cocktails_mobile-04.png"
import phone5 from "../../assets/image/cocktails/cocktails_mobile-05.png"
import phone6 from "../../assets/image/cocktails/cocktails_mobile-06.png"
import phone7 from "../../assets/image/cocktails/cocktails_mobile-07.png"
import phone8 from "../../assets/image/cocktails/cocktails_mobile-08.png"
import phone9 from "../../assets/image/cocktails/cocktails_mobile-09.png"
// import aftertext8 from "../../assets/image/legends/aftertext8.png";
// import Section07 from "../../assets/image/recipe/Section07.svg";
// import navbarlogo from "../../assets/navbarlogo.png";
import aftertext88 from "../../assets/image/cocktails/aftertext88.png"
import cockwing1 from "../../assets/image/cocktails/cockwing1.png";
import cockwing2 from "../../assets/image/cocktails/cockwing2.png";
import cockwing3 from "../../assets/image/cocktails/cockwing3.png";
import cockwing4 from "../../assets/image/cocktails/cockwing4.png";
// import cockwing5 from "../../assets/image/cocktails/cockwing5.png";
import cockwing6 from "../../assets/image/cocktails/cockwing6.png";

import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../layout/header/Header';
import Bgfooter from '../../layout/bgfooter/Bgfooter.jsx';
const Cocktails = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        
            <section className='COCKTAILS  d-none d-md-block  d-lg-block d-sm-none desktop' >

                <div className="box ">

                    <center>
                        <h2 className='COCKTAILS-heading text-center'>CRAZY COCKTAILS</h2>
                        <div data-aos="fade-up"
                            data-aos-once="true">
                            {/* <img src={Section07} alt=""className='cocktails-wingtop' /> */}
                            <img src={Section03} alt="" className='COCKTAILS-img' width={"90%"} />
                        </div>
                    </center>

                </div>


            </section>
            <section style={{ backgroundColor: "black", marginTop: '-29vh' }} className='d-none d-md-block  d-lg-block d-sm-none desktop'>
                <div data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1000">
                    <center>   <img src={section11} alt="" className="cocktailss-logo" />
                        <img src={section12} alt="" className='line' />
                    </center>

                </div>
            </section>
            <section style={{ backgroundColor: "black" }} className='d-none d-md-block  d-lg-block d-sm-none desktop'>
                <div className="container">
                    <div className="row">
                        <div className="col ">
                            <div data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-duration="3000">

                                <h6 className='cocktail-content'>WE COMMISIONED SOME OF THE COUNTRY'S FINEST MIXOLOGISTS TO CONCOCT A FEW CRAZY <br />
                                    RECIPES AND THE RESULTS HAVE BEEN DELICIOUS. DON'T TAKE OUR WORD FOR IT. TRY THEM <br />
                                    OUT YOURSELE AND SURPRISE YOUR FRIENDS WITH YOUR NEW-FOUND SKILLS.</h6>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <div data-aos="fade-down" data-aos-once="true"
                data-aos-duration="3000">
                <section style={{ backgroundColor: "black" }} className='d-none d-md-block  d-lg-block d-sm-none desktop'>

                    <div className="container">


                        <div className="row recipe-img">
                            <div className="col-sm-4 g-0">
                                <Link to="/Exotic-Highball">
                                    <div className="image-container">
                                        <img src={section22} alt="" />
                                        <div className="hover-text">
                                            <center>
                                                <hr />
                                            </center>
                                            <p>EXOTIC </p>
                                            <h1>HIGHBALL</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 g-0 box-bg">
                                <Link to="/Exotic-Mizuwari">
                                    <div className="image-container">
                                        <img src={section24} alt="" />
                                        <div className="hover-text">
                                            <hr />
                                            <p>EXOTIC</p>
                                            <h1>MIZUWARI</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 g-0">
                                <Link to="/Exotic-Stinger">
                                    <div className="image-container">
                                        <img src={section27} alt="" />
                                        <div className="hover-text">
                                            <hr />
                                            <p>EXOTIC</p>
                                            <h1>STINGER</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='next-bg d-none d-md-block  d-lg-block d-sm-none desktop'>
                    <div className="container">
                        <div className="row recipe-img">
                            <div className="col-sm-4 g-0">
                                <Link to="/Rare-Old-Fashioned">
                                    <div className="image-container">
                                        <img src={section26} alt="" />
                                        <div className="hover-text-RARE">
                                            <hr />
                                            <p>RARE AND </p>
                                            <h1>OLD-FASHIONED</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 g-0">
                                <Link to="/Rare-Floral">
                                    <div className="image-container">
                                        <img src={section29} alt="" />
                                        <div className="hover-text-RARE">
                                            <hr />
                                            <p>RARE </p>
                                            <h1>AND FLORAL</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 g-0">
                                <Link to="/Rare-Brerry">
                                    <div className="image-container">
                                        <img src={section21} alt="" />
                                        <div className="hover-text-RARE-last">
                                            <hr />
                                            <p>RARE </p>
                                            <h1>BERRY</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row recipe-img">
                            <div className="col-sm-4 g-0">
                                <Link to="/Smoky-Tails">
                                    <div className="image-container">
                                        <img src={section28} alt="" />
                                        <div className="hover-text-SMOKY-last">
                                            <hr />
                                            <p>SMOKY </p>
                                            <h1>TAIL</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 g-0">
                                <Link to="/Smoky-Old-Fashioned">
                                    <div className="image-container">
                                        <img src={section25} alt="" />
                                        <div className="hover-text-SMOKY">
                                            <hr />
                                            <p>SMOKY </p>
                                            <h1>OLD-FASHIONED</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 g-0">
                                <Link to="/Smoky-Eden">
                                    <div className="image-container">
                                        <img src={section23} alt="" />
                                        <div className="hover-text-SMOKY-last">
                                            <hr />
                                            <p>SMOKY </p>
                                            <h1>EDEN</h1>
                                            <hr />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="d-sm-block d-md-none d-lg-none  tablet section-1-tab" >
                <div className=" ">
                    <center>
                        <h2 className='text-center'>CRAZY  COCKTAILS</h2>
                    </center>
                    <div data-aos="fade-up">
                        <img src={Section03} alt="" className='cocktails-img' width={"100%"} style={{ width: '100vw' }} />                                </div>
                </div>
            </section>
            <section style={{ backgroundColor: "black", marginTop: '-100px' }} className='d-sm-block d-md-none d-lg-none tablet'>
                <div className="box">
                    <div data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="3000">
                        <center>
                            <h6 className='cocktail-section-2content '>WE COMMISIONED SOME OF THE COUNTRY'S FINEST MIXOLOGISTS TO CONCOCT A FEW CRAZY
                                RECIPES AND THE RESULTS HAVE BEEN DELICIOUS. </h6>
                            <h6 className='cocktail-section-2content2 ' style={{ width: "60%" }}>
                                DON'T TAKE OUR WORD FOR IT. TRY THEM
                                OUT YOURSELE AND SURPRISE YOUR FRIENDS WITH YOUR NEW-FOUND SKILLS.
                            </h6>
                        </center>
                    </div>
                    <img src={aftertext88} alt="" className='cocktail-section-img' />
                </div>
            </section>
            <section style={{ backgroundColor: "black" }} className='d-sm-block d-md-none d-lg-none tablet'>
                <div className="last-box-cocktails">
                    <center>
                        <div className="outerbox1-cocktails">
                            <img src={section11} alt="" width={120} className='cock-box1-img' />
                            <img src={cockwing1} alt="" className='box1-cockwing' />
                            <img src={phone1} alt="" width={"85%"} className='outerbox1-cocktails-img' />
                            <div className="text-box-1">
                                <h4 >EXOTIC</h4>
                                <h1>MIZUWARI</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Exotic-Mizuwari'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox2-cocktails">
                            <img src={cockwing6} alt="" className='box2-cockwing' />
                            <img src={phone2} alt="" width={"85%"} className='cock-box2-img2' />
                            <img src={section11} alt="" width={100} className='cock-box2-img' />

                            <div className="text-box-2">
                                <h4 className=''>RARE </h4>
                                <h1>OLD FASHIONED</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Rare-Old-Fashioned'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox3-cocktails">
                            <img src={phone3} alt="" className='outerbox3-img2' />
                            <img src={section12} alt="" className='outerbox3-img1' />
                            <div className="text-box-3">
                                <h4 className=''>RARE </h4>
                                <h1>FLORAL</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Rare-Floral'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox4-cocktails">
                            <img src={phone4} alt="" className='outerbox4-img2' />
                            <img src={cockwing2} alt="" className='outerbox4-img1' />
                            <img src={section11} alt="" className='outerbox4-img3' />
                            <div className="text-box-4">
                                <h4 className=''>RARE </h4>
                                <h1>BERRY</h1>
                                <p className='pt-3 pb-5'><u><Link to='/Rare-Berry'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox5-cocktails">
                            <img src={phone5} alt="" className='outerbox5-img1' />
                            <img src={section12} alt="" className='outerbox5-img2' />
                            <img src={aftertext88} alt="" className='outerbox5-img3' />
                            <div className="text-box-5">
                                <h4 className=''>EXOTIC </h4>
                                <h1>STINGER</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Exotic-Stinger'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox6-cocktails">
                            <img src={cockwing3} alt="" className='outerbox6-img1' />
                            <img src={phone6} alt="" className='outerbox6-img2' />
                            <img src={section12} alt="" className='outerbox6-img3' />
                            <div className="text-box-6">
                                <h4 className=''>SMOKY </h4>
                                <h1>TAIL</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Smoky-Tail'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox7-cocktails">
                            <img src={phone7} alt="" className='outerbox7-img1' />
                            <img src={cockwing4} alt="" className='outerbox7-img2' />
                            <div className="text-box-7">
                                <h4 className=''>SMOKY </h4>
                                <h1>EDEN</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Somky-Eden'>EXPLORE</Link></u></p>
                            </div>
                        </div>
                        <div className="outerbox8-cocktails">
                            <img src={phone8} alt="" className='outerbox8-img1' />
                            <img src={section12} alt="" className='outerbox8-img2' />
                            <div className="text-box-8">
                                <h4 className=''>EXOTIC </h4>
                                <h1>HIGHBAILL</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Exotic-Highball'>EXPLORE</Link></u></p>
                            </div>
                            <img src={section11} alt="" className='outerbox8-img3' />
                        </div>
                        <div className="outerbox9-cocktails">
                            <img src={phone9} alt="" className='outerbox9-img1' />
                            <img src={aftertext88} alt="" className='outerbox9-img2' />
                            <div className="text-box-9">
                                <h4 className=''>SMOKY </h4>
                                <h1>OLD-FASHIONED</h1>
                                <p className='pt-3 pb-3'><u><Link to='/Smoky-Old-Fashioned'>EXPLORE</Link></u></p>
                            </div>
                            <img src={section12} alt="" className='outerbox9-img3' />
                        </div>
                        <div className='outerbox10-cocktails'></div>
                    </center>
                </div>
            </section>
                
        </>

    )
}

export default Cocktails