import React from 'react';
import "./Raremobileview1.css";
import mobileviewimage from "../../../assets/image/rare/mobileviewimage.jpg";
import section1floatlogo from "../../../assets/image/rare/section1floatlogo.png";

const Raremobileview1 = () => {
  return (
    <div className='raremobileview1'>
      <div className="raremobileview1-section1">
      <div className="raremobileview1-logo">
        <img src={section1floatlogo} alt="" className="raremobileview1-logo-img" />
      </div>
      <div className="raremobileview1-top">
          <div className="raremobileview1-top-image">
            <img src={mobileviewimage} alt="" className="raremobileview1-top-img" />
          </div>
      </div>
      <div className="raremobileview1-bottom"></div>
      </div>
      <div className="raremobileview1-section2">
        <div className="raremobileview1-section2-top">
          <span className="raremobileview1-section2-top-text">
          This is a rare and exquisite,
full-bodied single malt whisky matured
          </span>
          <span className="raremobileview1-section2-top-text">
          to perfection
in two kinds of imported oak casks:
Bourbon Casks
          </span>
          <span className="raremobileview1-section2-top-text">
          and Sherry Casks.
          </span>
        </div>
        <div className="raremobileview1-section2-bottom">
        <span className="raremobileview1-section2-top-text1">
        This exceptional whisky hits the sweet spot
to offer the finest fusion of the two Casks. 
        </span>
        <span className="raremobileview1-section2-top-text1">
        Expect a warm palate and enhanced viscosity.
Salut! Here's a toast to your fine taste.

        </span>
        </div>
      </div>
      </div>
  )
}

export default Raremobileview1