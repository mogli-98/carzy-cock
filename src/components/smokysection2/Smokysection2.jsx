import React from 'react'
import "./Smokysection2.css";

import section3 from '../../assets/image/smoky/section3.jpg';
import section1img from '../../assets/image/smoky/section1img.png';
import section2cock from '../../assets/image/exotic/section2cock.png';
import dashimg from '../../assets/image/exotic/dashimg.png';



const Smokysection2 = () => {
  return (
    <div className='smokysection2'>
      <div className="smokysection2-topwrapper">
        <div className="smokysection2-topwrapper-image">
        <img src={section3} alt="" className="smokysection2-topwrapper-img" />
        </div>
        <div className="smokysection2-topwrapper-image1">
        <img src={section1img} alt="" className="smokysection2-topwrapper-img1" />
        </div>
        <div className="smokysection2-topwrapper-image2">
        <img src={section2cock} alt="" className="smokysection2-topwrapper-img2" />
        </div>
        
        </div>
        <div className="smokysection2-bottomwrapper" id='smokysection2-bottomwrapper'>
          <div className="smokysection2-bottomwrapper-items">
            <span className="smokysection2-bottomwrapper-items-text">
            FOOD PAIRINGS
            </span>
            <div className="smokysection2-bottomwrapper-item">
              <div className="smokysection2-bottomwrapper-item-imgwarp1">
                <img src={dashimg} alt="" className="smokysection2-bottomwrapper-items-img" />
              </div>
          
              <span className="smokysection2-bottomwrapper-items-text1">
                WITH
              </span>
            <div className="smokysection2-bottomwrapper-item-imgwarp2">
           <img src={dashimg} alt="" className="smokysection2-bottomwrapper-items-img" />
            </div>
            </div>
            <span className="smokysection2-bottomwrapper-items-text2">
            CRAZY COCK SMOKY
            </span>
          </div>
        </div>
    </div>
  )
}

export default Smokysection2