import React from 'react';
import "./Smokymobileview4.css";
import rare from "../../../assets/image/exotic/rare.png";
import exoticmobileviewline from "../../../assets/image/exotic/exoticmobileviewline.png";
import smoky from "../../../assets/image/exotic/smoky.png";
import { Link } from 'react-router-dom';



const Smokymobileview4 = () => {
  return (
    <div className='smokymobileview4'>
         <div className="smokymobileview4-section1">
            <span className="smokymobileview4-section1-text">
            DISCOVER
            </span>
        </div>
        <div className="smokymobileview4-section2">
            <div className="smokymobileview4-section2-top">
                <img src={rare} alt="" className="smokymobileview4-section2-top-image" />
            </div>
            <div className="smokymobileview4-section2-bottom">
                <div className="smokymobileview4-section2-bottom-top">
                    <span className="smokymobileview4-section2-bottom-top-text1">
                    RARE
                    </span>
                </div>
                <div className="smokymobileview4-section2-bottom-middle">
                    <div className="smokymobileview4-section2-bottom-middle-item1">
                        <span className="smokymobileview4-section2-bottom-middle-text2">
                        Aged in oak casks, this is a blended malt whisky
                        </span>
                        <span className="smokymobileview4-section2-bottom-middle-text2">
                        with the smoothness of a fine single malt whisky.  
                        </span>
                       
                    </div>
                   <div className="smokymobileview4-section2-bottom-middle-item2">
                   <span className="smokymobileview4-section2-bottom-middle-text2">
                   Casks: Ex Bourbon and Ex Sherry casks.
                        </span>
                        <span className="smokymobileview4-section2-bottom-middle-text2">
                    Savour a new level of smoothness.  
                        </span>
                   </div>
                </div>
                <div className="smokymobileview4-section2-bottom-down">
                <Link to="/Rare">
                    <span className="smokymobileview4-section2-bottom-down-btn">
                    EXPLORE
                    </span>
                    </Link>
                </div>

            </div>
        </div>
        <div className="smokymobileview4-section3">
            <div className="smokymobileview4-section3-line">
             <span className='smokymobileview4-section3-line-black'></span>
            </div>
        </div>
        <div className="smokymobileview4-section4">
            <div className="smokymobileview4-section4-top">
                <img src={smoky} alt="" className="smokymobileview4-section4-top-image" />
            </div>
            <div className="smokymobileview4-section4-bottom">
                <div className="smokymobileview4-section4-bottom-top">
                    <span className="smokymobileview4-section4-bottom-top-text1">
                    EXOTIC
                    </span>
                </div>
                <div className="smokymobileview4-section4-bottom-middle">
                    <div className="smokymobileview4-section4-bottom-middle-item1">
                        <span className="smokymobileview4-section4-bottom-middle-text2">
                        Aged in oak casks, this is a blended malt whisky
                        </span>
                        <span className="smokymobileview4-section4-bottom-middle-text2">
                        with the smoothness of a fine single malt whisky.  
                        </span>
                        <span className="smokymobileview4-section4-bottom-middle-text2">
                        Casks: Ex Bourbon and Ex Sherry casks.  
                        </span>
                        <span className="smokymobileview4-section4-bottom-middle-text2">
                        Savour a new level of smoothness.  
                        </span>
                    </div>
                    
                    
                </div>
                <div className="smokymobileview4-section4-bottom-down">
                <Link to="/Exotic">
                    <span className="smokymobileview4-section4-bottom-down-btn">
                    EXPLORE
                    </span>
                    </Link>
                </div>

            </div>
        </div>
        </div>
  )
}

export default Smokymobileview4