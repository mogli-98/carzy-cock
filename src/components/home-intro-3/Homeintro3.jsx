import React from 'react'
import "./Homeintro3.css";
import intro3 from "../../assets/intro3.png";
import intro3back from "../../assets/intro3back.png";


const Homeintro3 = () => {
  return (
    <div className="homeintro3">
        <div className="homeintro3-top-image">
          <img src={intro3} alt="" className="homeintro3-img" />
        </div>
        <div className="homeintro3-bottom">
            
            <span className="homeintro3-middle-wrap-text">WHAT’S YOUR</span>
            <span className="homeintro3-middle-wrap-text">KIND OF CRAZY?</span>
            
        </div>
        
        <div className='homeintro-bg'>
          <img src={intro3back } className='homeintro-bg-image'/>

          
        </div>
    </div>
  )
}

export default Homeintro3