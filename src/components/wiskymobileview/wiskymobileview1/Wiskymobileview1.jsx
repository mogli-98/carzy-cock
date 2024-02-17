import React from 'react';
import "./Wiskymobileview1.css";
import mobileview from "../../../assets/image/whiskysection/mobileview.png"
import mobileviewbg from "../../../assets/image/whiskysection/mobileviewbg.jpg";
import mobileviewlogo from "../../../assets/image/whiskysection/mobileviewlogo.png";
import mobileviewcock from "../../../assets/image/whiskysection/mobileviewcock.png";
import designlinemobileview from"../../../assets/image/whiskysection/designlinemobileview.png";

const Wiskymobileview1 = () => {
  return (
    <div className='wiskymobileview1'>
      <div className="wiskymobileview1-section1">
        <div className="wiskymobileview1-section1-items">
          <span className="wiskymobileview1-section1-text">
          WHAT’S YOUR
          </span>
          <span className="wiskymobileview1-section1-text">
          KIND OF CRAZY?
          </span>
        </div>
        <div className="wiskymobileview1-section1-image">
          <img src={mobileview} alt="" className="wiskymobileview1-section1-img" />
        </div>
      </div>
      <div className="wiskymobileview1-section2">
      <div className="wiskymobileview1-section2-btn">
      <span className="wiskymobileview1-section2-text">
      DISCOVER
      </span>
      </div>
      </div>
      <div className="wiskymobileview1-section3">
        <div className="wiskymobileview1-section3-logo">
          <img src={mobileviewlogo} alt="" className="wiskymobileview1-section3-logo-img" />
        </div>
        <div className="wiskymobileview1-section3-top"></div>
        <div className="wiskymobileview1-section3-bottom">
          <div className="wiskymobileview1-section3-bottom-image">
         <img src={mobileviewbg} alt="" className="wiskymobileview1-section3-bottom-img" />
          </div>
        </div>
        
      </div>
      <div className="wiskymobileview1-section4">
        <div className="wiskymobileview1-section4-top">
            <span className="wiskymobileview1-section4-top-text">
            EXOTIC, RARE AND SMOKY -
            </span>
            <span className="wiskymobileview1-section4-top-text">
            THREE CHARACTERS OF
            </span>
            <span className="wiskymobileview1-section4-top-text">
            THE CRAZY COCK 
            </span>
        </div>
        <div className="wiskymobileview1-section4-bottom">

        </div>
      </div>
      <div className="wiskymobileview1-section5">
        <div className="wiskymobileview1-section5-designline">
          <img src={designlinemobileview} alt="" className="wiskymobileview1-section5-designline-img" />
        </div>
      <div className="wiskymobileview1-section5-image">
        <img src={mobileviewcock} alt="" className="wiskymobileview1-section5-img" />
      </div>
      </div>
      <div className="wiskymobileview1-section6">
        <div className="wiskymobileview1-section6-items">
          <span className="wiskymobileview1-section6-items-text">
          DISCOVER
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default Wiskymobileview1