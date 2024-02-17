import React from 'react'
import "./Exoticmobileview1.css";
import eoticmobileviewimg from '../../../assets/image/exotic/eoticmobileviewimg.jpg';
import section1floatlogo from '../../../assets/image/exotic/section1floatlogo.png'


const Exoticmobileview1 = () => {
  return (
    <div className='exoticmobileview1'>
      <div className="exoticmobileview1-section1">
      <div className="exoticmobileview1-logo">
        <img src={section1floatlogo} alt="" className="exoticmobileview1-logo-img" />
      </div>
      <div className="exoticmobileview1-top">
          <div className="exoticmobileview1-top-image">
            <img src={eoticmobileviewimg} alt="" className="exoticmobileview1-top-img" />
          </div>
      </div>
      <div className="exoticmobileview1-bottom"></div>
      </div>
      <div className="exoticmobileview1-section2">
        <div className="exoticmobileview1-section2-top">
          <span className="exoticmobileview1-section2-top-text">
          A CONFLUENCE OF THE CHOICEST
          </span>
          <span className="exoticmobileview1-section2-top-text">
          SCOTCH MALTS, INDIAN MALTS
          </span>
          <span className="exoticmobileview1-section2-top-text">
          AND BOURBON.
          </span>
        </div>
        <div className="exoticmobileview1-section2-bottom">
        <span className="exoticmobileview1-section2-top-text">
        A FEAST FOR THE SENSES.
        </span>
        </div>
      </div>
      </div>
  )
}

export default Exoticmobileview1