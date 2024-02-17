import React from 'react';
import "./Exoticmobileview3.css";
import dashimg from "../../../assets/image/exotic/dashimg.png";
import section3leftimg1 from "../../../assets/image/exotic/section3leftimg1.jpg";
import exoticmobileimg1 from "../../../assets/image/exotic/exoticmobileimg1.png";
import mobileviewexoticdesign1 from "../../../assets/image/exotic/mobileviewexoticdesign1.png";
import mobileviewexoticlogo from "../../../assets/image/exotic/mobileviewexoticlogo.png";



const Exoticmobileview3 = () => {
  return (
    <div className='exoticmobileview3' >
        <div className="exoticmobileview3-section1">
            <span className="exoticmobileview3-section1-text">
            FOOD PAIRINGS
            </span>
            <div className="exoticmobileview3-section1-div">
                <div className="exoticmobileview3-section1-div-line1">
                    <img src={dashimg} alt="" className="exoticmobileview3-section1-div-imgline1" />
                </div>
                <span className='exoticmobileview3-section1-text2'>WITH</span>
                <div className="exoticmobileview3-section1-div-line2">
                    <img src={dashimg} alt="" className="exoticmobileview3-section1-div-imgline1" />
                </div>
            </div>
            <span className="exoticmobileview3-section1-text3">
            CRAZY COCK EXOTIC
            </span>
        </div>
        <div className="exoticmobileview3-section2">
            <div className="exoticmobileview3-section2-left">
                <div className="exoticmobileview3-section2-left-image1">
                    <img src={section3leftimg1} alt="" className="exoticmobileview3-section2-left-img1" />
                </div>
            </div>
            <div className="exoticmobileview3-section2-right">
                <div className="exoticmobileview3-section2-right-image1">
                    <img src={exoticmobileimg1} alt="" className="exoticmobileview3-section2-right-img1" />
                </div>
            </div>
        </div>
        <div className="exoticmobileview3-section3">
                <div className="exoticmobileview3-section3-top">
                        <span className="exoticmobileview3-section3-top-text1">
                            SMOKED MEATS/NUTS/FRUITS
                        </span>
                </div>
                <div className="exoticmobileview3-section3-bottom">
                        <span className="exoticmobileview3-section3-bottom-text2">
                            While we’ve shared pairing suggestions, go right 
                        </span>
                        <span className="exoticmobileview3-section3-bottom-text2">
                            ahead and pair Crazy Cock Whisky with nuts,
                        </span>
                        <span className="exoticmobileview3-section3-bottom-text2">
                            fruits and meats of your choice.
                        </span>
                </div>
        </div>
        <div className="exoticmobileview3-section4">
            <div className="exoticmobileview3-section4-left">
                <img src={mobileviewexoticdesign1} alt="" className="exoticmobileview3-section4-left-img" />
            </div>
            <div className="exoticmobileview3-section4-right">
                <img src={mobileviewexoticlogo} alt="" className="exoticmobileview3-section4-right-img" />
            </div>

        </div>
    </div>
  )
}

export default Exoticmobileview3