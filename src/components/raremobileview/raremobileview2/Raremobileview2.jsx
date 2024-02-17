import React from 'react'
import "./Raremobileview2.css";
import mobilelineexotic from "../../../assets/image/exotic/mobilelineexotic.png"
import mobilerareimage from "../../../assets/image/rare/mobilerareimage.jpg";
import mobileviewexoticdesign from "../../../assets/image/exotic/mobileviewexoticdesign.png";
import section2leftimg from "../../../assets/image/exotic/section2leftimg.png";
import intro3 from "../../../assets/intro3.png";
import mobilerarecock from "../../../assets/image/rare/mobilerarecock.png";
import upsprial from "../../../assets/image/exotic/upsprial.png";
import downsprial from "../../../assets/image/exotic/downsprial.png";



const Raremobileview2 = () => {
  return (
    <div className='raremobileview2'>
      
    <div className="raremobileview2-up">
          <div className="raremobileview2-up-lineimage">
              <img src={mobilelineexotic} alt="" className="raremobileview2-up-lineimg" />
          </div> 
          <div className="raremobileview2-up-top"></div>
          <div className="raremobileview2-up-bottom">
              <div className="raremobileview2-up-bottom-sprial">
                <img src={upsprial} alt="" className="raremobileview2-up-bottom-sprial-img" />
              </div>
              <div className="raremobileview2-up-bottom-design">
                 <img src={mobileviewexoticdesign} alt="" className="raremobileview2-up-bottom-design-img" />
               </div>
              <div className="raremobileview2-up-bottom-design1">
                <img src={section2leftimg} alt="" className="raremobileview2-up-bottom-design1-img" />
               </div>
                <div className="raremobileview2-up-bottom-color"></div>
            <div className="raremobileview2-up-bottom-items1">
                <span className='raremobileview2-up-bottom-items1-text1'>
                    TASTING
                </span>
                <span className='raremobileview2-up-bottom-items1-text1'>
                     NOTES
                </span>
            </div>
            <div className="raremobileview2-up-bottom-items2">
              <span className="raremobileview2-up-bottom-items2-text2">
              COLOUR
              </span>
              <span className="raremobileview2-up-bottom-items2-text3">
              Deep amber.
              </span>
            </div>
            <div className="raremobileview2-up-bottom-items3">
            <span className="raremobileview2-up-bottom-items2-text2">
            AROMA
            </span>
              <span className="raremobileview2-up-bottom-items2-text3">
              Bold with floral notes laced with honey pears, chocolate, 
              <br/> raisin, cinnamon, spices, vanilla and oak.

              </span>
             
            </div>
            <div className="raremobileview2-up-bottom-items4">
            <span className="raremobileview2-up-bottom-items2-text2">
            PALATE
            </span>
              <span className="raremobileview2-up-bottom-items2-text3">
              Robust with warm spicy notes  bouquet of summer
             <br/> bouquet of summer fruits, raisins and a smooth oaky texture.

              </span>
            
            </div>
            <div className="raremobileview2-up-bottom-items5">
            <span className="raremobileview2-up-bottom-items2-text2">
            FINISH
            </span>
              <span className="raremobileview2-up-bottom-items2-text3">
              Lingering
              </span>
            </div>
          </div>
      </div>
    <div className="raremobileview2-down">
      <div className="raremobileview2-down-spiraldown">
        <img src={downsprial} alt="" className="raremobileview2-down-spiraldown-img" />
      </div>
      <div className="raremobileview2-down-cock">
        <img src={mobilerarecock} alt="" className="raremobileview2-down-cock" />
      </div>
      <div className="raremobileview2-down-lineimage">
        <img src={intro3} alt="" className="raremobileview2-down-lineimg" />
      </div>
      <div className="raremobileview2-down-image">
        <img src={mobilerareimage} alt="" className="raremobileview2-down-img" />
      </div>
    </div>
  </div>
  )
}

export default Raremobileview2