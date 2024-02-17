import React from 'react'
import "./Wiskymainintro.css"
import whiskyintro from "../../assets/image/whiskysection/whiskyintro.jpg"
import logobg from "../../assets/image/whiskysection/logobg.jpg"
import logo from "../../assets/image/whiskysection/logo.png"
import logotext from "../../assets/image/whiskysection/logotext.png"
import Wiskymobileview from '../wiskymobileview/Wiskymobileview'

function Wiskymainintro() {
  return (
    <div className='wiskymainintro'>
      {/*************whisky mobile view*************/}
      <Wiskymobileview/>
      {/*************end*************/}
       <div className="wiskymainintro-wrapper">
         <div className="wiskymainintro-wrapper-top">
           <div className="wiskymainintro-wrapper-top-text">
            <span className='wiskymainintro-wrapper-top-text1'>WHISKY</span>
            <span className='wiskymainintro-wrapper-top-text2'>WHAT'S YOUR</span>
            <span className='wiskymainintro-wrapper-top-text2'>KIND OF CRAZY?</span>
        </div>
                <img src={whiskyintro} alt="" className="wiskymainintro-wrapper-top-img" />
            </div>
            <div className="wiskymainintro-wrapper-bottom">
                <div className="wiskymainintro-wrapper-bottom-item">
                    <span className="wiskymainintro-wrapper-bottom-text1">
                    THE EXOTIC, RARE AND SMOKY
                    </span>
                    <span className="wiskymainintro-wrapper-bottom-text2">
                     THREE CHARACTERS OF THE CRAZY COCK
                    </span>
                </div>
                <img src={logobg} alt="" className="wiskymainintro-wrapper-bottom-img" />
            </div>
            <div className="wiskymainintro-wrapper-logo">
                <img src={logo} alt="" className="wiskymainintro-wrapper-logo-img" />
            </div>
            <div className="wiskymainintro-wrapper-text">
                <img src={logotext} alt="" className="wiskymainintro-wrapper-text-img" />
            </div>
        </div> 
    </div>
  )
}

export default Wiskymainintro