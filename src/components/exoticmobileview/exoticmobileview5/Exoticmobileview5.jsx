import React from 'react'
import "./Exoticmobileview5.css";
import rare from "../../../assets/image/exotic/rare.png";
import exoticmobileviewline from "../../../assets/image/exotic/exoticmobileviewline.png";
import smoky from "../../../assets/image/exotic/smoky.png";
import { Link } from 'react-router-dom';

const Exoticmobileview5 = () => {
  return (
    <div className='exoticmobileview5'>
        <div className="exoticmobileview5-section1">
            <span className="exoticmobileview5-section1-text">
            DISCOVER
            </span>
        </div>
        <div className="exoticmobileview5-section2">
            <div className="exoticmobileview5-section2-top">
                <img src={rare} alt="" className="exoticmobileview5-section2-top-image" />
            </div>
            <div className="exoticmobileview5-section2-bottom">
                <div className="exoticmobileview5-section2-bottom-top">
                    <span className="exoticmobileview5-section2-bottom-top-text1">
                         RARE
                    </span>
                </div>
                <div className="exoticmobileview5-section2-bottom-middle">
                    <div className="exoticmobileview5-section2-bottom-middle-item1">
                        <span className="exoticmobileview5-section2-bottom-middle-text2">
                        Aged in oak casks, this is a blended malt whisky
                        </span>
                        <span className="exoticmobileview5-section2-bottom-middle-text2">
                        with the smoothness of a fine single malt whisky.  
                        </span>
                    </div>
                    <div className="exoticmobileview5-section2-bottom-middle-item2">
                        <span className="exoticmobileview5-section2-bottom-middle-text2">
                        Casks: Ex Bourbon and Ex Sherry casks.
                        </span>
                        <span className="exoticmobileview5-section2-bottom-middle-text2">
                        Savour a new level of smoothness. 
                        </span>
                    </div>
                </div>
                <div className="exoticmobileview5-section2-bottom-down">
                <Link to="/Rare">
                    <span className="exoticmobileview5-section2-bottom-down-btn">
                    EXPLORE
                    </span>
                    </Link>
                </div>

            </div>
        </div>
        <div className="exoticmobileview5-section3">
            <div className="exoticmobileview5-section3-line">
               <img src={exoticmobileviewline} alt="" className="exoticmobileview5-section3-line-img" /> 
            </div>
        </div>
        <div className="exoticmobileview5-section4">
            <div className="exoticmobileview5-section4-top">
                <img src={smoky} alt="" className="exoticmobileview5-section4-top-image" />
            </div>
            <div className="exoticmobileview5-section4-bottom">
                <div className="exoticmobileview5-section4-bottom-top">
                    <span className="exoticmobileview5-section4-bottom-top-text1">
                         SMOKY
                    </span>
                </div>
                <div className="exoticmobileview5-section4-bottom-middle">
                    <div className="exoticmobileview5-section4-bottom-middle-item1">
                        <span className="exoticmobileview5-section4-bottom-middle-text2">
                        For those who like their whisky mildly peated and infused
                        </span>
                        <span className="exoticmobileview5-section4-bottom-middle-text2">
                        with honeyed smokiness, this is an experience you will  
                        </span>
                        <span className="exoticmobileview5-section4-bottom-middle-text2">
                        want to return to time and again.  
                        </span>
                    </div>
                    
                </div>
                <div className="exoticmobileview5-section4-bottom-down">
                <Link to="/Smoky">
                    <span className="exoticmobileview5-section4-bottom-down-btn">
                    EXPLORE
                    </span>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Exoticmobileview5