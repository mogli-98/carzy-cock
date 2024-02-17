import React, { useEffect } from 'react'
import "./Homeintro01.css";
import backvedio from "../../assets/backvedio.mp4";
import intro2ndpageback from "../../assets/intro2ndpageback.jpg";
import bigcock from "../../assets/bigcock.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import homemobilelogo from "../../assets/image/mobilehome/homemobilelogo.png";
const Homeintro01 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className='homeintro01'>

      <div className="homeintro01-wrapper">


        <div className="homeintro01-wrapper-cock">
          <img src={bigcock} alt="" className="homeintro01-wrapper-cock-img" />
        </div>

        <div className="homeintro01-wrapper-top">

          <div className="homeintro01-wrapper-top-left">
            <div className="homeintro01-wrapper-top-left-item">
              <span className='homeintro01-wrapper-top-left-item-text1 homemargin'>
                A DIFFERENT
              </span>
              <span className='homeintro01-wrapper-top-left-item-text1'>
                KIND OF CRAZY.
              </span>
              <div className="homeintro01-wrapper-top-left-items">
                <div className="homeintro01-wrapper-top-left-item-outerbox">
                  <Link to="/Whisky" style={{ zIndex: '2' }}>
                    <div className="homeintro01-wrapper-top-left-item-innerbox">
                      <span className='homeintro01-wrapper-top-left-item-text2'>
                        DISCOVER YOURS
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="homeintro01-wrapper-top-mobileview-middle">
            <div className="homeintro01-wrapper-top-logomobileview">
              <img src={homemobilelogo} alt="" className="homeintro01-mobilelogo" />
            </div>
          </div>
          <div className="homeintro01-wrapper-top-right">
            <div className="homeintro01-wrapper-top-right-item">
              <div className="homeintro01-wrapper-top-right-item-vedio">
                <video autoplay autoPlay muted loop className='myvedio'>
                  < source src={backvedio} type="video/mp4" />
                </video>
              </div>

            </div>
          </div>
        </div>

        <div className="homeintro01-wrapper-middle">
          <div className="homeintro01-wrapper-bottom-mobileviewcock">
            <img src={bigcock} alt="" className="homeintro01-wrapper-cock-mobileimg" />
          </div>
          <div className="homeintro01-wrapper-bottom-blankmobile"></div>
          <div className="homeintro01-wrapper-middle-image">
            <img src={intro2ndpageback} alt="" className="homeintro01-wrapper-middle-img" />
          </div>
        </div>
        <div className="homeintro01-wrapper-bottom">


          <div className="homeintro01-wrapper-bottom-wrap-mobileview">
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            Crazy Cock is an exceptional single malt whisky
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
             extracted from 6 row Indian barley , handpicked
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            all the way from the pristine  plains of North plains
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            of North India. 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            The barley is malted and distilled in the old, 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            traditional method ; In Copper Pots which bring 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            alive a rich melange of  delicate notes and a medley 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            of subtle aromas. 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            The whisky is matured in ex-Bourbon, ex-Sherry 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            casks for a full-bodied and complex flavour profile.
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            Batches of it are smoked for a rich, peaty experience
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            and set aside for Crazy Cock Dhua.
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            These eclectic single malts are carefully selected by 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            the Master Blender, each for its uniquely rewarding
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            aroma and palate and crafted to perfection in Small
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-textmobileview">
            Batches of Crazy Cock Single Malt Whiskies.
            </span>
          </div>
          <div className="homeintro01-wrapper-bottom-wrap"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="2000"

          >




            <span className="homeintro01-wrapper-bottom-wrap-text">
            Crazy Cock is an exceptional single malt whisky extracted
from 6 row Indian barley, handpicked
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
            all the way from the pristine plains of North India. 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
            The barley is malted and distilled in the old, traditional method; In Copper Pots which bring 
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
            alive a rich melange of delicate notes and a medley of subtle aromas.
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
            The whisky is matured in ex-Bourbon, ex-Sherry casks for a full-bodied and complex flavour profile.
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
            Batches of it are smoked for a rich, peaty experience and set aside for Crazy Cock Dhua.
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
            These eclectic single malts are carefully selected by the Master Blender, each for its uniquely rewarding
            </span>
            <span className="homeintro01-wrapper-bottom-wrap-text">
             aroma  and palate and crafted to perfection in Small Batches of Crazy Cock Single Malt Whiskies.
            </span>
          </div>

        </div>


      </div>


    </div>

  )
}

export default Homeintro01