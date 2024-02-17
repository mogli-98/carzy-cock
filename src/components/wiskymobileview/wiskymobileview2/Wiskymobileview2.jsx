import React from 'react';
import "./Wiskymobileview2.css";
import rare from "../../../assets/image/whiskysection/rare.png";
import mobilewiskycock from "../../../assets/image/whiskysection/mobilewiskycock.png";
import whiskymobileviewline from "../../../assets/image/whiskysection/whiskymobileviewline.png";
import exotic from "../../../assets/image/whiskysection/exotic.png";
import mobileviewlogo from "../../../assets/image/whiskysection/mobileviewlogo.png";
import smoky from "../../../assets/image/whiskysection/smoky.png";
import { Link } from 'react-router-dom';

const Wiskymobileview2 = () => {
  return (
    <div className='wiskymobileview2'>
        <div className="wiskymobileview2-color"></div>
        <div className="wiskymobileview2-section1">
            <div className="wiskymobileview2-section1-top">
                <div className="wiskymobileview2-section1-top-image">
                    <img src={rare} alt="" className="wiskymobileview2-section1-top-img" />
                </div>
            </div>
            <div className="wiskymobileview2-section1-bottom">
                <span className="wiskymobileview2-section1-bottom-text1">
                    RARE</span>
            </div>
        </div>
        <div className="wiskymobileview2-section2">
            <div className="wiskymobileview2-section2-cock">
                <img src={mobilewiskycock} alt="" className="wiskymobileview2-section2-cock-img" />
            </div>
            <div className="wiskymobileview2-section2-logo">
                <img src={mobileviewlogo} alt="" className="wiskymobileview2-section2-logo-img" />
            </div>
            <div className="wiskymobileview2-section2-item1">
                <span className="wiskymobileview2-section2-item1-text1">
                     Aged in oak casks, this is a blended malt whisky
                </span>
                <span className="wiskymobileview2-section2-item1-text1">
                    with the smoothness of a fine single malt whisky.
                </span>
                <span className="wiskymobileview2-section2-item1-text1">
                    Casks: Ex Bourbon and Ex Sherry casks. 
                </span>
                <span className="wiskymobileview2-section2-item1-text1">
                    Savour a new level of smoothness.
                 </span>
            </div>
            <div className="wiskymobileview2-section2-item2">
            <Link to="/Rare">
                <span className="wiskymobileview2-section2-item2-btn">
                EXPLORE
                </span>
                </Link>

            </div>
           <div className="wiskymobileview2-section2-item3">
            <div className="wiskymobileview2-section2-item3-line">
            <img src={whiskymobileviewline} alt="" className="wiskymobileview2-section2-item3-line-img" />
            </div>
            </div> 
            <div className="wiskymobileview2-section3-item4">
                <div className="wiskymobileview2-section2-item4-top">
                    <img src={exotic} alt="" className="wiskymobileview2-section2-item4-top-img" />
                </div>
                <div className="wiskymobileview2-section2-item4-bottom">
                
                      <span className="wiskymobileview2-section2-item4-bottom-text1">
                        EXOTIC
                    </span>
                          
                </div>
            </div>
            
        </div>
        <div className="whiskymobileview2-section3">
             <div className="wiskymobileview2-section3-item">
                <div className="wiskymobileview2-section3-item-items1">
                <span className="wiskymobileview2-section3-item1-items1-text1">
                Aged in oak casks, this is a blended malt whisky
                </span>
                <span className="wiskymobileview2-section3-item1-items1-text1">
                with the smoothness of a fine single malt whisky.    
                </span>
                </div>
                <div className="wiskymobileview2-section3-item-items2">
                <span className="wiskymobileview2-section3-item1-items1-text1">
                Casks: Ex Bourbon and Ex Sherry casks.
                </span>
                <span className="wiskymobileview2-section3-item1-items1-text1">
                Savour a new level of smoothness.    
                </span>
                </div>
                
            </div>
            <div className="wiskymobileview2-section2-item2">
            <Link to="/Exotic">
                <span className="wiskymobileview2-section2-item2-btn">
                EXPLORE
                </span>
                </Link>
            </div>
            <div className="wiskymobileview2-section2-item3">
            <div className="wiskymobileview2-section2-item3-line">
            <img src={whiskymobileviewline} alt="" className="wiskymobileview2-section2-item3-line-img" />
            </div>
            </div>
        </div>
        <div className="wiskymobileview2-section4">
            <div className="wiskymobileview2-section4-cock">
                <img src={mobilewiskycock} alt="" className="wiskymobileview2-section4-cock-img" />
            </div>

            <div className="wiskymobileview2-section4-item1">
                <div className="wiskymobileview2-section4-item1-image">
                    <img src={smoky} alt="" className="wiskymobileview2-section4-item1-img" />
                </div>
            </div>
           <div className="wiskymobileview2-section4-item2">
                <div className="wiskymobileview2-section4-item2-items1">
                
                     <span className="wiskymobileview2-section1-bottom-text1">
                         SMOKY
                     </span>
                    

                </div>
                <div className="wiskymobileview2-section4-item2-items2">
              <span className="wiskymobileview2-section3-item1-items1-text1">
              For those who like their whisky mildly peated and
              </span>
              <span className="wiskymobileview2-section3-item1-items1-text1">
              infused with honeyed smokiness, this is an experience
                </span> 
              <span className="wiskymobileview2-section3-item1-items1-text1">
              you will want to return to time and again. 
                </span>     
                 </div>
            </div> 
           <div className="wiskymobileview2-section4-item3">
           <Link to="/Smoky">
            <span className="wiskymobileview2-section2-item2-btn">
                EXPLORE
            </span>
            </Link>
            </div> 
        </div>
    </div>
  )
}

export default Wiskymobileview2