import {React, useContext, useEffect, useState} from 'react'
import './Raresection1.css';
import section1 from "../../assets/image/rare/section1.jpg"
import section2leftimg from "../../assets/image/exotic/section2leftimg.png"
import section1floatlogo from "../../assets/image/rare/section1floatlogo.png"
import section1line from "../../assets/image/exotic/section1line.png";
import section2floatlogo from "../../assets/image/exotic/section2floatlogo.png"
import section2rightimg1 from "../../assets/image/exotic/section2rightimg1.png"
import sprial from "../../assets/image/exotic/sprial.png"
import rareparrlex from '../../assets/image/rare/rareparrlex.jpg';
import AuthContext from "../../utility/Usecontext";
import Raremobileview from "../raremobileview/Raremobileview.jsx";


const Raresection1 = () => {

    const [opacityanimation, setOpacityanimation] = useState(true);
    const [righttoleft, setRighttoleft] = useState(true);
    const{offset}=useContext(AuthContext)

    useEffect(() => {
        if (offset > 0) {
          if (offset <= 50) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "9vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "4.5vh";
          } else if (offset <= 100) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "8vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "4vh";
          } else if (offset <= 150) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "7vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "3.5vh";
          } else if (offset <= 200) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "6vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "3vh";
          } else if (offset <= 250) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "5vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "2.5vh";
          } else if (offset <= 300) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "4vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "2vh";
          } else if (offset <= 330) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "3vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "1.5vh";
          } else if (offset <= 350) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "2vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "1.2vh";
          } else if (offset > 350) {
            document.getElementById("raresection1-float-top").style.marginBottom =
              "1vh";
            document.getElementById(
              "raresection1-float-bottom-top"
            ).style.marginTop = "0.7vh";
          }
        } else {
          document.getElementById("raresection1-float-top").style.marginBottom =
            "10vh";
          document.getElementById(
            "raresection1-float-bottom-top"
          ).style.marginTop = "5vh";
        }
        //text animation over the logo//
       if (opacityanimation === true) {
          if (offset > 200) {
            document
              .getElementById("raresection1-float-bottom-top")
              .classList.add("raretextopacityfloattext");
            setOpacityanimation(false);
          } else {
            document
              .getElementById("raresection1-float-bottom-top")
              .classList.remove("raretextopacityfloattext");
          }
        } else {
          setOpacityanimation(false);
        }
        //righttoleft text animation
        if (righttoleft === true) {
          if (offset > 200) {
            setTimeout(function(){
              document.getElementById("raresection1-bottom-right-textwrapper1").classList.remove("visibleNone");
              }, 2200);
            document.getElementById("raresection1-bottom-right-textwrapper1").classList.add("exoticsRightlefttext1");
            setTimeout(function(){
              document.getElementById("raresection1-bottom-right-textwrapper2").classList.remove("visibleNone");
              }, 2400);
            document.getElementById("raresection1-bottom-right-textwrapper2").classList.add("exoticsRightlefttext2");
            setTimeout(function(){
             document.getElementById("raresection1-bottom-right-textwrapper3").classList.remove("visibleNone");
             }, 2600);
            document.getElementById("raresection1-bottom-right-textwrapper3").classList.add("exoticsRightlefttext3");
            setTimeout(function(){
             document.getElementById("raresection1-bottom-right-textwrapper4").classList.remove("visibleNone");
             }, 2800);
            document.getElementById("raresection1-bottom-right-textwrapper4").classList.add("exoticsRightlefttext4");
           
           
            setRighttoleft(false);
          } else {
           document
              .getElementById("raresection1-float-bottom-top")
              .classList.remove("rareRightlefttext");
          }
        } else {
          setRighttoleft(false);
        }
      }, [offset]);
      useEffect(()=>{
        if(offset >= 0) {
            
            document.getElementById("raresection1-top-prallex-img").style.top="-11vh";
                      
        }
        if(offset >= 50) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-10vh";
        }
        if(offset >= 100) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-9vh";
        }
        if(offset >= 150) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-8vh";
              
        }
        if(offset >= 200) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-7vh";
             
            
        }
        if(offset >= 250) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-6vh";
              
        }
        if(offset >= 300) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-5vh";
             
            
        }
        if(offset >= 350) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-4vh";
             
        }
        if(offset >= 400) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-3vh";
             
            
        }
        if(offset >= 450) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-2vh";
              
            
        }
        if(offset >= 500) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="-1vh";
              
            
        }
        if(offset >= 550) {
            
          document.getElementById("raresection1-top-prallex-img").style.top="0vh";
              
            
        }
       
      
    },[offset]);
  return (
    <div className='raresection1'>
      {/*********mobileview************/}
      <Raremobileview/>
      {/*********END*********************/}
    <div className="raresection1-wrappers">
        <div className="raresection1-float">
            <div className="raresection1-float-top"id='raresection1-float-top'>
               <div className="raresection1-float-top-logo">
                <img src={section1floatlogo} alt="" className="raresection1-float-top-logo-img" />
               </div>
               <div className="raresection1-float-top-m-text">
                <span className="raresection1-float-top-m-text1">
                This is a rare and exquisite full-bodied single malt whisky matured to perfection
                </span>
                <span className="raresection1-float-top-m-text1">
                whisky matured to perfection in two kinds of imported  oak casks: Bourbon Casks and Sherry Casks. 
                </span>
                <span className="raresection1-float-top-m-text1">
                This exceptional whisky hits the sweet spot to offer the finest fusion of the two Casks. 
                </span>
               </div>
               <div className="raresection1-float-top-b-text">
               <span className="raresection1-float-top-m-text1">
               Expect a warm palate and enhanced viscosity. Salut! Here's a toast to your fine taste.
               </span>
               {/* <span className="raresection1-float-top-m-text1">
               SAVOUR A NEW LEVEL OF SMOOTHNESS.
               </span> */}
                </div> 
            </div>
            <div className="raresection1-float-middle">
                <img src={section1line} alt="" className="raresection1-float-middle-img" />
            </div>
            <div className="raresection1-float-bottom">
                <div className="raresection1-float-bottom-top"id='raresection1-float-bottom-top'>
                    <span className="raresection1-float-bottom-top-text2">
                    TASTING
                    </span>
                    <span className="raresection1-float-bottom-top-text2">
                    NOTES
                    </span>
                </div>
                <div className="raresection1-float-bottom-bottom">
                    <img src={section2floatlogo} alt="" className="raresection1-float-bottom-bottom-img" />
                </div>
            </div>
        </div>
        
            <div className="raresection1-top-prallex">
              <div className="raresection1-top-prallex-image">
                <img src={rareparrlex} alt="" className="raresection1-top-prallex-img" id='raresection1-top-prallex-img' />
              </div>

            </div>
            
            
            <div className="raresection1-bottom">
                
                <div className="raresection1-bottom-left">
                <div className="raresection1-bottom-left-bluecolor"></div>
                    <img src={section2leftimg} alt="" className="raresection1-bottom-left-img" />
                </div>
                <div className="raresection1-bottom-right">
                <div className="raresection1-bottom-right-bluecolor"></div>
                    <div className="raresection1-bottom-right-bg">
                        <img src={section2rightimg1} alt="" className="raresection1-bottom-right-bg-img" />
                    </div>
                    <div className="raresection1-bottom-right-bg1">
                        <img src={sprial} alt="" className="raresection1-bottom-right-bg1-img" />
                    </div>
                    
                    <div className="raresection1-bottom-right-textwrapper visibleNone "id='raresection1-bottom-right-textwrapper1'>
                    <span className="raresection1-bottom-right-textwrapper-text1 ">
                    COLOUR
                    </span>
                        <span className="raresection1-bottom-right-textwrapper-text2">
                        Deep amber.
                        </span>
                    </div>
                    <div className="raresection1-bottom-right-textwrapper visibleNone" id='raresection1-bottom-right-textwrapper2'>
                    <span className="raresection1-bottom-right-textwrapper-text1">
                    AROMA
                    </span>
                    <span className="raresection1-bottom-right-textwrapper-text2">
                    Bold with floral notes laced with honey, pears, chocolate, raisin, cinnamon, spices, vanilla and oak.
                        </span>
                        
                    </div>
                    <div className="raresection1-bottom-right-textwrapper visibleNone"id='raresection1-bottom-right-textwrapper3'>
                    <span className="raresection1-bottom-right-textwrapper-text1">
                    PALATE
                    </span>
                    <span className="raresection1-bottom-right-textwrapper-text2">
                    Robust with warm spicy notes, bouquet of summer fruits, raisins and a smooth oaky texture
                        </span>
                        
                    </div>
                    <div className="raresection1-bottom-right-textwrapper visibleNone" id='raresection1-bottom-right-textwrapper4'>
                    <span className="raresection1-bottom-right-textwrapper-text1">
                    FINISH
                    </span>
                    <span className="raresection1-bottom-right-textwrapper-text2">
                    Lingering.
                        </span>
                    
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Raresection1