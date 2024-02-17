import React from 'react';
import "./Smokymobileview2.css";
import mobilelineexotic from "../../../assets/image/exotic/mobilelineexotic.png"
import mobileviewsmokyimg from "../../../assets/image/smoky/mobileviewsmokyimg.jpg";
import mobileviewexoticdesign from "../../../assets/image/exotic/mobileviewexoticdesign.png";
import section2leftimg from "../../../assets/image/exotic/section2leftimg.png";
import intro3 from "../../../assets/intro3.png";
import mobilerarecock from "../../../assets/image/rare/mobilerarecock.png";
import upsprial from "../../../assets/image/exotic/upsprial.png";
import downsprial from "../../../assets/image/exotic/downsprial.png";



const Smokymobileview2 = () => {
  return (
    <div className='smokymobileview2'>
      <div className="smokymobileview2-up">
          <div className="smokymobileview2-up-lineimage">
              <img src={mobilelineexotic} alt="" className="smokymobileview2-up-lineimg" />
          </div> 
          <div className="smokymobileview2-up-top"></div>
          <div className="smokymobileview2-up-bottom">
              <div className="smokymobileview2-up-bottom-sprial">
                <img src={upsprial} alt="" className="smokymobileview2-up-bottom-sprial-img" />
              </div>
              <div className="smokymobileview2-up-bottom-design">
                 <img src={mobileviewexoticdesign} alt="" className="smokymobileview2-up-bottom-design-img" />
               </div>
              <div className="smokymobileview2-up-bottom-design1">
                <img src={section2leftimg} alt="" className="smokymobileview2-up-bottom-design1-img" />
               </div>
                <div className="smokymobileview2-up-bottom-color"></div>
            <div className="smokymobileview2-up-bottom-items1">
                <span className='smokymobileview2-up-bottom-items1-text1'>
                    TASTING
                </span>
                <span className='smokymobileview2-up-bottom-items1-text1'>
                     NOTES
                </span>
            </div>
            <div className="smokymobileview2-up-bottom-items2">
              <span className="smokymobileview2-up-bottom-items2-text2">
              COLOUR
              </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              Deep antique gold.
              </span>
            </div>
            <div className="smokymobileview2-up-bottom-items3">
            <span className="smokymobileview2-up-bottom-items2-text2">
            AROMA
            </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              Peat and smoke on the nose with warm notes of raisin,
              
              </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              dark chocolate, spicy cinnamon, vanilla, mandarin, oak, 
              </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              sweet peat and a summer barbeque.

              </span>
             
            </div>
            <div className="smokymobileview2-up-bottom-items4">
            <span className="smokymobileview2-up-bottom-items2-text2">
            PALATE
            </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              Smoke laced with spice, raisins
              </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              touch of cinnamon with top notes of balanced sweetness.

              </span>
            
            </div>
            <div className="smokymobileview2-up-bottom-items5">
            <span className="smokymobileview2-up-bottom-items2-text2">
            FINISH
            </span>
              <span className="smokymobileview2-up-bottom-items2-text3">
              Warm and lingering.
              </span>
              {/* <span className="smokymobileview2-up-bottom-items2-text3">
              peat emerges at the end.
              </span> */}
            </div>
          </div>
      </div>
    <div className="smokymobileview2-down">
      <div className="smokymobileview2-down-spiraldown">
        <img src={downsprial} alt="" className="smokymobileview2-down-spiraldown-img" />
      </div>
      <div className="smokymobileview2-down-cock">
        <img src={mobilerarecock} alt="" className="smokymobileview2-down-cock" />
      </div>
      <div className="smokymobileview2-down-lineimage">
        <img src={intro3} alt="" className="smokymobileview2-down-lineimg" />
      </div>
      <div className="smokymobileview2-down-image">
        <img src={mobileviewsmokyimg} alt="" className="smokymobileview2-down-img" />
      </div>
    </div>
    </div>
  )
}

export default Smokymobileview2