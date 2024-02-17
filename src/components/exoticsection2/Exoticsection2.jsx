import React from 'react'
import "./Exoticsection2.css";
import section2img from '../../assets/image/exotic/section2img.jpg';
import section2line from '../../assets/image/exotic/section2line.png';
import section2cock from '../../assets/image/exotic/section2cock.png';
import dashimg from '../../assets/image/exotic/dashimg.png';

const Exoticsection2 = () => {
  return (
    <div className='exoticsection2'>
      <div className="exoticsection2-topwrapper">
        <div className="exoticsection2-topwrapper-image">
        <img src={section2img} alt="" className="exoticsection2-topwrapper-img" />
        </div>
        <div className="exoticsection2-topwrapper-image1">
        <img src={section2line} alt="" className="exoticsection2-topwrapper-img1" />
        </div>
        <div className="exoticsection2-topwrapper-image2">
        <img src={section2cock} alt="" className="exoticsection2-topwrapper-img2" />
        </div>
        
        </div>
        <div className="exoticsection2-bottomwrapper" id='exoticsection2-bottomwrapper'>
          <div className="exoticsection2-bottomwrapper-items">
            <span className="exoticsection2-bottomwrapper-items-text">
            FOOD PAIRINGS
            </span>
            <div className="exoticsection2-bottomwrapper-item">
              <div className="exoticsection2-bottomwrapper-item-imgwarp1">
                <img src={dashimg} alt="" className="exoticsection2-bottomwrapper-items-img" />
              </div>
          
              <span className="exoticsection2-bottomwrapper-items-text1">
                WITH
              </span>
            <div className="exoticsection2-bottomwrapper-item-imgwarp2">
           <img src={dashimg} alt="" className="exoticsection2-bottomwrapper-items-img" />
            </div>
            </div>
            <span className="exoticsection2-bottomwrapper-items-text2">
            CRAZY COCK EXOTIC
            </span>
          </div>
        </div>
    </div>
  )
}

export default Exoticsection2