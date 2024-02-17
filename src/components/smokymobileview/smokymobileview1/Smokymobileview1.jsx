import React from 'react';
import "./Smokymobileview1.css"
import mobileviewsmoky from "../../../assets/image/smoky/mobileviewsmoky.jpg";
import floatlogo from "../../../assets/image/smoky/floatlogo.png";



const Smokymobileview1 = () => {
  return (
    <div className='smokymobileview1'>
      <div className="smokymobileview1-section1">
      <div className="smokymobileview1-logo">
        <img src={floatlogo} alt="" className="smokymobileview1-logo-img" />
      </div>
      <div className="smokymobileview1-top">
          <div className="smokymobileview1-top-image">
            <img src={mobileviewsmoky} alt="" className="smokymobileview1-top-img" />
          </div>
      </div>
      <div className="smokymobileview1-bottom"></div>
      </div>
      <div className="smokymobileview1-section2">
        <div className="smokymobileview1-section2-top">
          <span className="smokymobileview1-section2-top-text">
          Expect a rich, full-bodied single malt whisky
aged in imported Bourbon
          </span>
          <span className="smokymobileview1-section2-top-text">
          and Sherry Casks, meticulously crafted
by our Master Blende who has
          </span>
          <span className="smokymobileview1-section2-top-text">
          made use of old Peat Bogs
and rare Sherry Casks to skillfully craft a
          </span>
          <span className="smokymobileview1-section2-top-text">
          balanced whisky.
They say home isn't a place. It's a feeling. Welcome home. 
          </span>
        </div>
        
      </div>

    </div>
  )
}

export default Smokymobileview1