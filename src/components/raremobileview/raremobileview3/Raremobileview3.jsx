import React from 'react'
import "./Raremobileview3.css";
import dashimg from "../../../assets/image/exotic/dashimg.png";
import mobilerareapplepie from "../../../assets/image/rare/mobilerareapplepie.jpg";
import exoticmobileimg1 from "../../../assets/image/exotic/exoticmobileimg1.png";
import mobiledesign1 from "../../../assets/image/rare/mobiledesign1.png";
import mobileviewexoticlogo from "../../../assets/image/exotic/mobileviewexoticlogo.png";
import mobilerareimage2 from "../../../assets/image/rare/mobilerareimage2.jpg";
import mobiledesignrare from "../../../assets/image/rare/mobiledesignrare.png"
import section2line from "../../../assets/image/rare/section2line.png";
import mobilerarebcock from "../../../assets/image/rare/mobilerarebcock.png";



const Raremobileview3 = () => {
  return (
    <div className='raremobileview3'>
        <div className="raremobileview3-bottomcock">
            <img src={mobilerarebcock} alt="" className="raremobileview3-bottomcock-img" />
        </div>
        <div className="raremobileview3-designline">
          <img src={section2line} alt="" className="raremobileview3-designline-img" />  
        </div>
        <div className="raremobileview3-section1">
            <span className="raremobileview3-section1-text">
                FOOD PAIRINGS
            </span>
            <div className="raremobileview3-section1-div">
                <div className="raremobileview3-section1-div-line1">
                    <img src={dashimg} alt="" className="raremobileview3-section1-div-imgline1" />
                </div>
                <span className='raremobileview3-section1-text2'>WITH</span>
                <div className="raremobileview3-section1-div-line2">
                    <img src={dashimg} alt="" className="raremobileview3-section1-div-imgline1" />
                </div>
            </div>
            <span className="raremobileview3-section1-text3">
            CRAZY COCK RARE
            </span>
        </div>
        <div className="raremobileview3-section2">
            <div className="raremobileview3-section2-left">
                <div className="raremobileview3-section2-left-image1">
                    <img src={mobilerareapplepie} alt="" className="raremobileview3-section2-left-img1" />
                </div>
            </div>
            <div className="raremobileview3-section2-right">
                <div className="raremobileview3-section2-right-image1">
                    <img src={exoticmobileimg1} alt="" className="raremobileview3-section2-right-img1" />
                </div>
            </div>
        </div>
        <div className="raremobileview3-section3">
                <div className="raremobileview3-section3-top">
                        <span className="raremobileview3-section3-top-text1">
                        APPLE PIE
                        </span>
                </div>
                <div className="raremobileview3-section3-bottom">
                        <span className="raremobileview3-section3-bottom-text2">
                        Cinnamon, caramel and brown sugar notes of 
                        </span>
                        <span className="raremobileview3-section3-bottom-text2">
                        Apple Pie complement the toasted oak, vanilla and
                        </span>
                        <span className="raremobileview3-section3-bottom-text2">
                        butterscotch notes of Crazy Crack Rare Whisky for
                        </span>
                        <span className="raremobileview3-section3-bottom-text2">
                        an exceptional pairing. The sherry cask finish
                        </span>
                        <span className="raremobileview3-section3-bottom-text2">
                        brings the baking spices to the fore for a mellow
                        </span>
                        <span className="raremobileview3-section3-bottom-text2">
                        combination you can’t get enough of.
                        </span>
                </div>
        </div>
        <div className="raremobileview3-section4">
            <div className="raremobileview3-section4-design">
               <img src={mobiledesign1} alt="" className="raremobileview3-section4-design-img" /> 
            </div>
            <div className="raremobileview3-section4-item1">
               <img src={mobileviewexoticlogo} alt="" className="raremobileview3-section4-item1-img" /> 
            </div>
            <div className="raremobileview3-section4-item2">
                <div className="raremobileview3-section4-item2-left">
                    <div className="raremobileview3-section4-item2-left-image">
                        <img src={mobilerareimage2} alt="" className="raremobileview3-section4-item2-left-image-img" />
                    </div>
                    <div className="raremobileview3-section4-item2-left-text">
                    <div className="raremobileview3-section4-left1"></div>
                    <div className="raremobileview3-section4-right1">

                        <div className="raremobileview3-section4-item2-left-text-top">
                            <span className="raremobileview3-section4-item2-left-text1">
                                NIGIRI
                            </span>
                        </div>
                        <div className="raremobileview3-section4-item2-left-text-bottom">
                            <span className="raremobileview3-section4-item2-left-text-bottom-text2">
                                Light notes of pepper and star anise in Crazy Cock
                            </span>
                            <span className="raremobileview3-section4-item2-left-text-bottom-text2">
                                Rare pair well with the fresh fishy taste of Nigiri.                            
                            </span>
                            <span className="raremobileview3-section4-item2-left-text-bottom-text2">
                                Add ice to the whisky to wash down the bold fla    
                            </span>
                            <span className="raremobileview3-section4-item2-left-text-bottom-text2">
                                vours in Nigiri. sweet and sour flavour of rice vine   
                            </span>
                            <span className="raremobileview3-section4-item2-left-text-bottom-text2">
                                gar, the salty taste of seaweed, the malty depth of   
                            </span>
                            <span className="raremobileview3-section4-item2-left-text-bottom-text2">
                            soy sauce and the heat of wasabi.  
                            </span>
                        </div>
                    </div></div>

                </div>
                <div className="raremobileview3-section4-item2-right">
                    <div className="raremobileview3-section4-item2-right-image">
                        <img src={mobiledesignrare} alt="" className="raremobileview3-section4-item2-right-img" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Raremobileview3