import React from 'react'
import './Raresection2.css';
import section2img from '../../assets/image/rare/section2img.jpg';
import section1img from '../../assets/image/rare/section1img.png';
import section2cock from '../../assets/image/exotic/section2cock.png';
import dashimg from '../../assets/image/exotic/dashimg.png';


const Raresection2 = () => {
  return (
    <div className='raresection2'>
      <div className="raresection2-topwrapper">
        <div className="raresection2-topwrapper-image">
        <img src={section2img} alt="" className="raresection2-topwrapper-img" />
        </div>
        <div className="raresection2-topwrapper-image1">
        <img src={section1img} alt="" className="raresection2-topwrapper-img1" />
        </div>
        <div className="raresection2-topwrapper-image2">
        <img src={section2cock} alt="" className="raresection2-topwrapper-img2" />
        </div>
        
        </div>
        <div className="raresection2-bottomwrapper" id='raresection2-bottomwrapper'>
          <div className="raresection2-bottomwrapper-items">
            <span className="raresection2-bottomwrapper-items-text">
            FOOD PAIRINGS
            </span>
            <div className="raresection2-bottomwrapper-item">
              <div className="raresection2-bottomwrapper-item-imgwarp1">
                <img src={dashimg} alt="" className="raresection2-bottomwrapper-items-img" />
              </div>
          
              <span className="raresection2-bottomwrapper-items-text1">
                WITH
              </span>
            <div className="raresection2-bottomwrapper-item-imgwarp2">
           <img src={dashimg} alt="" className="raresection2-bottomwrapper-items-img" />
            </div>
            </div>
            <span className="raresection2-bottomwrapper-items-text2">
            CRAZY COCK RARE
            </span>
          </div>
        </div>
    </div>
  )
}

export default Raresection2