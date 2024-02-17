import React from 'react'
import "./Exoticmobileview2.css";
import mobilelineexotic from "../../../assets/image/exotic/mobilelineexotic.png"
import section2img from "../../../assets/image/exotic/section2img.jpg";
import mobileviewexoticdesign from "../../../assets/image/exotic/mobileviewexoticdesign.png";
import section2leftimg from "../../../assets/image/exotic/section2leftimg.png";
import intro3 from "../../../assets/intro3.png";
import section2cock from "../../../assets/image/exotic/section2cock.png";
import upsprial from "../../../assets/image/exotic/upsprial.png";
import downsprial from "../../../assets/image/exotic/downsprial.png";

export const Exoticmobileview2 = () => {
  return (
    <div className='exoticmobileview2'>
      
      <div className="exoticmobileview2-up">
            <div className="exoticmobileview2-up-lineimage">
                <img src={mobilelineexotic} alt="" className="exoticmobileview2-up-lineimg" />
            </div> 
            <div className="exoticmobileview2-up-top"></div>
            <div className="exoticmobileview2-up-bottom">
                <div className="exoticmobileview2-up-bottom-sprial">
                  <img src={upsprial} alt="" className="exoticmobileview2-up-bottom-sprial-img" />
                </div>
                <div className="exoticmobileview2-up-bottom-design">
                   <img src={mobileviewexoticdesign} alt="" className="exoticmobileview2-up-bottom-design-img" />
                 </div>
                <div className="exoticmobileview2-up-bottom-design1">
                  <img src={section2leftimg} alt="" className="exoticmobileview2-up-bottom-design1-img" />
                 </div>
                  <div className="exoticmobileview2-up-bottom-color"></div>
              <div className="exoticmobileview2-up-bottom-items1">
                  <span className='exoticmobileview2-up-bottom-items1-text1'>
                      TASTING
                  </span>
                  <span className='exoticmobileview2-up-bottom-items1-text1'>
                       NOTES
                  </span>
              </div>
              <div className="exoticmobileview2-up-bottom-items2">
                <span className="exoticmobileview2-up-bottom-items2-text2">
                COLOUR
                </span>
                <span className="exoticmobileview2-up-bottom-items2-text3">
                Rich amber.
                </span>
              </div>
              <div className="exoticmobileview2-up-bottom-items3">
              <span className="exoticmobileview2-up-bottom-items2-text2">
              AROMA
              </span>
                <span className="exoticmobileview2-up-bottom-items2-text3">
                Citrus, toffee, vanilla, dried fruits
                </span>
                <span className="exoticmobileview2-up-bottom-items2-text3">
                and warm oak.
                </span>
              </div>
              <div className="exoticmobileview2-up-bottom-items4">
              <span className="exoticmobileview2-up-bottom-items2-text2">
              PALATE
              </span>
                <span className="exoticmobileview2-up-bottom-items2-text3">
                Sweet and balanced with subtle
                </span>
                <span className="exoticmobileview2-up-bottom-items2-text3">
                notes of vanilla and fruits.
                </span>
              </div>
              <div className="exoticmobileview2-up-bottom-items5">
              <span className="exoticmobileview2-up-bottom-items2-text2">
              FINISH
              </span>
                <span className="exoticmobileview2-up-bottom-items2-text3">
                Smooth with a pleasant and lingering finish.
                </span>
              </div>
            </div>
        </div>
      <div className="exoticmobileview2-down">
        <div className="exoticmobileview2-down-spiraldown">
          <img src={downsprial} alt="" className="exoticmobileview2-down-spiraldown-img" />
        </div>
        <div className="exoticmobileview2-down-cock">
          <img src={section2cock} alt="" className="exoticmobileview2-down-cock" />
        </div>
        <div className="exoticmobileview2-down-lineimage">
          <img src={intro3} alt="" className="exoticmobileview2-down-lineimg" />
        </div>
        <div className="exoticmobileview2-down-image">
          <img src={section2img} alt="" className="exoticmobileview2-down-img" />
        </div>
      </div>
    </div>
  )
}
