import React, { useEffect, useRef } from 'react'
import "../../assets/css/recpie.css";
import "../../assets/css/cocktails.css";
import section12 from "../../assets/image/cocktails/section12.svg";
import section21 from "../../assets/image/recipe/section1.jpg";
import section22 from "../../assets/image/recipe/section2.jpg"
import section23 from "../../assets/image/recipe/section3.jpg"
import section24 from "../../assets/image/recipe/section4.jpg"
import section25 from "../../assets/image/recipe/section5.jpg"
import section26 from "../../assets/image/recipe/section6.jpg"
import section27 from "../../assets/image/recipe/section7.jpg"
import section28 from "../../assets/image/recipe/section8.jpg"
import section29 from "../../assets/image/recipe/section9.jpg"
import Section02 from "../../assets/image/recipe/Section02.svg";
import Section003 from "../../assets/image/recipe/Section03.svg";
import Section04 from "../../assets/image/recipe/Section04.svg";
import FootPrint from "../../assets/image/recipe/Foot-Prints.gif";
import Section05 from "../../assets/image/recipe/Section05.svg";
import Section07 from "../../assets/image/recipe/Section07.svg";
import section15 from "../../assets/image/cocktails/section15.webp";
import aftertext8 from "../../assets/image/legends/aftertext8.png";
import cockwings from "../../assets/image/cocktails/cockwing5.png"
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
const Recipe = () => {
    return (
        <>
            <section className='recipebg d-none d-md-block d-lg-block d-sm-none desktop' >
                <div className="container">
                    <div className="box">
                        <center>
                            <h2 className='Recipe-heading-top text-center' id="title1">CRAZY COCKTAILS</h2>
                            {/* <hr style={{ width: "50%",color:"#cb753a",border:"2px solid #cb753a",position:"relative", top:"1vh"}} /> */}
                            <h1 className='Recipe-heading-top1 text-center mt-5' style={{width:"50%"}}>RARE OLD FASHIONED</h1>
                            <hr />
                        </center>
                        <img src={Section04} alt="" className='recipe-top-logo mt-3' />
                        <img src={section12} alt="" className='recipe-line-top' />
                        <img src={section15} alt="" className='Recipe-img1' />
                    </div>
                </div>
            </section>
            <ParallaxProvider>
                <section style={{ backgroundColor: "#233243", height: "50vw",marginTop:"-45vh" }} className='d-none d-md-block d-lg-block d-sm-none desktop' >
                    <Parallax translateY={[-15, -5]} speed={700}>
                        <center>

                            <img src={Section003} alt="" className="recipe-middle-loGo" />

                            <h1 className=' recipe-middle-text'>
                                WHISKY REPLACES GIN <br />
                                AND BEE POLLEN REPLACES <br />
                                SWEET VERMOUTH FOR <br />
                                A NEGRONI WITH A TWIST. <br />

                            </h1>
                        </center>
                        <img src={Section02} alt="" className="recipe-middle-cock" />
                    </Parallax>
                </section>
                <Parallax translateY={[-5, -2]}

                    speed={30000}>

                    <section style={{ backgroundColor: "black" }} className='d-none d-md-block d-lg-block d-sm-none desktop'>

                       <center>
                       <img src={FootPrint} alt="" className="recipe-footprint" />
                       </center>
                        {/* <img src={section12} alt="" className='line' /> */}

                        <div className="container  recipetale ">
                            <div className="row pb-5">
                                <div className="col">
                                   <div className="recpie-tablebox1">
                                        <p className='text-light recpie-tablebox-odd'>GLASS</p>
                                        <hr style={{ color: "#fff", width: "16%",border:"1px solid #fff"  }} />
                                        <p className='text-light recpie-tablebox-even '>Rock Glass</p>
                                   </div>
                                    <div className="recpie-tablebox2">
                                        <p className='text-light recpie-tablebox-odd'>GARNISH</p>
                                        <hr style={{ color: "#fff", width: "20%", border:"1px solid #fff" }} />
                                        <p className='text-light recpie-tablebox-even'>Orange Peel</p>
                                    </div>
                                    <div className="recipe-tablebox3">
                                        <p className='text-light recpie-tablebox-odd'>ICE</p>
                                        <hr style={{ color: "#fff", width: "13%",border:"1px solid #fff"  }} />
                                        <p className='text-light recpie-tablebox-even'>Cubes</p>
                                    </div>
                                    <div className="recipe-tablebox4">
                                        <p className='text-light recpie-tablebox-odd'>INGREDIENTS</p>
                                        <hr style={{ color: "#fff", width: "25%",border:"1px solid #fff"  }} />
                                        <p className='text-light recpie-tablebox-even text-bold'>50 ml Crazy Cock Blended Malt <br />
                                            <span className='small'>2 bs Coconut Syrup (Recipe below)</span></p>
                                        <p className='text-light '>3 dashes Angostura Bitters <br /></p>
                                            {/* <span className='small'>(Recipe on the right)</span></p>
                                        <p className='text-light pt-1'>30 ml Dolin Dry</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <p className='text-light recpie-tablebox-odd'>METHOD</p>
                                    <hr style={{ color: "#fff", width: "21%" ,border:"1px solid #fff" }} />  
                                    <p className='text-light recpie-tablebox-even'>Pour all the ingredients into a mixing glass with ice.<br />Stir until icy cold and strain into a rock glass.
                                    Garnish with an Orange Peel.
                                    </p>
                                    <div className="recipe-tablecol2-box">
                                        <p className='text-light '></p>
                                        <p className='text-light '><b>RECIPE FOR COCONUT SYRUP</b><br />
                                           <span className='small'> INGREDIENTS</span><br />
                                           200 ml Coconut Water<br />
                                           150 gms Sugar
                                        </p>
                                        <p className='text-light mt-5'></p>
                                        
                                        <p className='text-light small'>METHOD</p>
                                        <p className='text-light'>In a pot, simmer the coconut water and add sugar.<br />
                                        Stir for 5 minutes until the sugar dissolves.<br />
                                        Let it cool down. Filter and bottle.<br />
                                           
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src={Section07} alt=""  className='recipetable-imgg'/>
                        </div>


                    </section>


                    <div data-aos="fade-down" data-aos-once="true"
                 data-aos-duration="1000">
                    <section style={{  }} className='d-none d-md-block d-sm-none d-lg-block desktop next-bg'>
                
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='explore text-center'>EXPLORE</h1>
                    </div>
                </div>

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
        <section className=' d-none d-md-block d-sm-none d-lg-block desktop recpie-desktp'>
            
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
                </Parallax>
            </ParallaxProvider>
            <section className='d-sm-block d-md-none tablet top-section'>
                <div backgroundColor="#f0e9e3">
                    <center>
                        <h2 className='Recipe-heading-tab text-center'>CRAZY COCKTAILS</h2>
                        <hr style={{ width: "50%", marginTop: '-1vh', color: "#C2B59B" }} />
                        <h1 className='Recipe-heading1-tab text-center'>RARE OLD FASHIONED</h1>
                        <hr style={{ width: "50%", marginTop: '-1vh', color: "#b16d1d" }} />
                        <img src={section21} alt="" className='Recipe-img-tab' />
                    </center>
                </div>
            </section>
            <section className='d-sm-block d-md-none  tablet section2-recipe' style={{ backgroundColor: '#233243' }} >
                <div style={{ backgroundColor: '#233243' }} >
                    <center>
                        <img src={Section003} alt="" className='section2-img' />
                        <h1 c>
                            WHISKY REPLACES GIN <br />
                            AND BEE POLLEN REPLACES <br />
                            SWEET VERMOUTH FOR <br />
                            A NEGRONI WITH A TWIST. <br />
                        </h1>
                    </center>
                    <img src={Section02} alt="" className='section2-img2' />
                </div>
            </section>
            <section style={{ backgroundColor: 'black' }} className='section-03 d-sm-block d-md-none  tablet'>
                <center>
                    <img src={Section04} alt="" className='section3-img' />
                    <img src={Section07} alt="" className='section3-img2' />
                    <img src={Section07} alt="" className='section3-img3' />
                </center>
                <div className='section-03-text'>
                    <h5>
                        GlASS
                    </h5>
                    <hr style={{ width: " 17%" }} />
                    <p>Rock Glass</p>
                    <h5>
                        GARNISH
                    </h5>
                    <hr style={{ width: " 25%" }} />
                    <p>Orange Peel</p>
                    <h5>
                        ICE
                    </h5>
                    <hr style={{ width: " 12%" }} />
                    <p>Cubes</p>
                    <h5>
                        INGREDIENTS
                    </h5>
                    <hr style={{ width: " 36%" }} />
                    <div className='spannn2'>
                        <span className='spannn'>50 ml Crazy Cock Blended Malt</span> <br />
                        <span className='spannn1'>2 bs Coconut Syrup (Recipe below)</span><br />
                        <span className='spannn'>3 dashes Angostura Bitters</span><br />
                        {/* <span className='spannn1'>(Recipe on the right)</span><br />
                        <span className='spannn'>30 ml Dolin Dry</span><br /> */}
                    </div>
                    <h5 className='mt-4'>METHOD</h5>
                    <hr style={{ width: " 25%" }} />
                    <p className='mt-3'>Pour all the ingredients into a mixing glass with ice.<br/>Stir until icy cold and strain into a rock glass.
                    <br />Garnish with an Orange Peel.</p>
                    <h5>RECIPE FOR COCONUT SYRUP</h5>
                    <h6 className='mt-4'>INGREDIENTS</h6>
                    <p className='mt-4'>200 ml Coconut Water</p>
                    <p>150 gms Sugar</p>
                    
                    <p className='mt-4'>
                        In a pot, simmer the coconut water and add sugar.<br />
                        Stir for 5 minutes until the sugar dissolves.<br />
                        Let it cool down. Filter and bottle.<br />
                        {/* lected at the other end. Measure the ABV with a<br />
                        refractometer and rectify with mineral water<br />
                        until 43% ABV. Store in a bottle.<br /> */}
                    </p>

                </div>
                <img src={Section05} alt="" className='section-03-img4' />
                <img src={Section07} alt="" className='section-03-img5' />
            </section>
            <section className='section-04 d-sm-block d-md-none  tablet ' style={{ backgroundColor: "#f0e9e3" }}>
                <h1 className='text-center pt-5 pb-5 explore1'>EXPLORE</h1>
                {/* <img src={Section07} alt="" className='section-04-img1' /> */}
                <center> <img src={Section003} alt="" className='section-04-img1' /></center>
                <div className='section-04-text '>
                    <center>
                        <h6>EXOTIC</h6>
                        <h3>MIZUWARI</h3>
                        <span><u><Link to='/Exotic-Mizuwari'>EXPLORE</Link></u></span>
                        <hr />
                        <h6>RARE</h6>
                        <h3>OLD FASHIONED</h3>
                        <span><u><Link to='/Rare-Old-Fashioned'>EXPLORE</Link></u></span>
                        <hr />
                        <h6>RARE</h6>
                        <img src={Section04} alt="" className='section-04-img4' />
                        <h3 className='FLORAL'>FLORAL</h3>
                        <span className='FLORAL'><u><Link to='/Rare-Floral'>EXPLORE</Link></u></span>
                        <hr className='FLORAL-hr' />
                        <h6>RARE</h6>
                        <h3>BERRY</h3>
                        <span><u><Link to='/Rare-Berry'>EXPLORE</Link></u></span>
                        <hr />
                        <h6>EXOTIC</h6>
                        <h3>STINGER</h3>
                        <span><u><Link to='/Exotic-Stinger'>EXPLORE</Link></u></span>
                        <hr />
                        <h6>SMOKY</h6>
                        <h3>TAIL</h3>
                        <span><u><Link to='/Smoky-Tails'>EXPLORE</Link></u></span>
                        <hr />
                        <h6>SOMKY</h6>
                        <h3>EDEN</h3>
                        <img src={aftertext8} alt="" className='section-04-img2' />
                        <img src={section12} alt="" className='section-04-img3' />
                        <span className='EDEN'><u><Link to='/Somky-Eden'>EXPLORE</Link></u></span>
                        <div className='section-04-text2'>
                            <hr className='' />
                            <h6>EXOTIC</h6>
                            <h3>HIGHBALL</h3>
                            <span><u><Link to='/Exotic-Highball'>EXPLORE</Link></u></span>
                            <hr />
                            <h6>EXOTIC</h6>
                            <h3>OLD FASHIONED</h3>
                            <span><u><Link to='/Smoky-Old-Fashioned'>EXPLORE</Link></u></span>
                        </div>

                    </center>
                </div>

            </section>

        </>

    )
}

export default Recipe
