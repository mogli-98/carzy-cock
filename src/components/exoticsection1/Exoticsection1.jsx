import React, { useContext } from "react";
import { useEffect, useState } from "react";
import "./Exoticsection1.css";
import section1 from "../../assets/image/exotic/section1.jpg";
import section2leftimg from "../../assets/image/exotic/section2leftimg.png";
import section1floatlogo from "../../assets/image/exotic/section1floatlogo.png";
import section1line from "../../assets/image/exotic/section1line.png";
import section2floatlogo from "../../assets/image/exotic/section2floatlogo.png";
import section2rightimg1 from "../../assets/image/exotic/section2rightimg1.png";
import sprial from "../../assets/image/exotic/sprial.png";
import setion1img from "../../assets/image/exotic/setion1img.png"
import AuthContext from "../../utility/Usecontext";
import { Exoticmobileview } from "../exoticmobileview/Exoticmobileview";
import  parralextop from "../../assets/image/exotic/parralextop.jpg";

const Exoticsection1 = () => {
  
  const [opacityanimation, setOpacityanimation] = useState(true);
  const [righttoleft, setRighttoleft] = useState(true);
  const{offset}=useContext(AuthContext)

  useEffect(()=>{
    if(offset >= 0) {
        
        document.getElementById("exotic-prallex-img").style.top="-11vh";
                  
    }
    if(offset >= 50) {
        
      document.getElementById("exotic-prallex-img").style.top="-10vh";
    }
    if(offset >= 100) {
        
      document.getElementById("exotic-prallex-img").style.top="-9vh";
    }
    if(offset >= 150) {
        
      document.getElementById("exotic-prallex-img").style.top="-8vh";
          
    }
    if(offset >= 200) {
        
      document.getElementById("exotic-prallex-img").style.top="-7vh";
         
        
    }
    if(offset >= 250) {
        
      document.getElementById("exotic-prallex-img").style.top="-6vh";
          
    }
    if(offset >= 300) {
        
      document.getElementById("exotic-prallex-img").style.top="-5vh";
         
        
    }
    if(offset >= 350) {
        
      document.getElementById("exotic-prallex-img").style.top="-4vh";
         
    }
    if(offset >= 400) {
        
      document.getElementById("exotic-prallex-img").style.top="-3vh";
         
        
    }
    if(offset >= 450) {
        
      document.getElementById("exotic-prallex-img").style.top="-2vh";
          
        
    }
    if(offset >= 500) {
        
      document.getElementById("exotic-prallex-img").style.top="-1vh";
          
        
    }
    if(offset >= 550) {
        
      document.getElementById("exotic-prallex-img").style.top="0vh";
          
        
    }
   
  
},[offset]);

  useEffect(() => {
    if (offset > 0) {
      if (offset <= 50) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "9vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "4.5vh";
      } else if (offset <= 100) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "8vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "4vh";
      } else if (offset <= 150) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "7vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "3.5vh";
      } else if (offset <= 200) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "6vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "3vh";
      } else if (offset <= 250) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "5vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "2.5vh";
      } else if (offset <= 300) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "4vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "2vh";
      } else if (offset <= 330) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "3vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "1.5vh";
      } else if (offset <= 350) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "2vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "1.2vh";
      } else if (offset > 350) {
        document.getElementById("exoticsection1-float-top").style.marginBottom =
          "1vh";
        document.getElementById(
          "exoticsection1-float-bottom-top"
        ).style.marginTop = "0.7vh";
      }
    } else {
      document.getElementById("exoticsection1-float-top").style.marginBottom =
        "10vh";
      document.getElementById(
        "exoticsection1-float-bottom-top"
      ).style.marginTop = "5vh";
    }
    //text animation over the logo//
    if (opacityanimation === true) {
      if (offset > 200) {
        document
          .getElementById("exoticsection1-float-bottom-top")
          .classList.add("exotictextopacityfloattext");
        setOpacityanimation(false);
      } else {
        document
          .getElementById("exoticsection1-float-bottom-top")
          .classList.remove("exotictextopacityfloattext");
      }
    } else {
      setOpacityanimation(false);
    }
    //righttoleft text animation
    if (righttoleft === true) {
      if (offset > 200) {
        setTimeout(function(){
          document.getElementById("exoticsection1-bottom-right-textwrapper1").classList.remove("visibleNone");
          }, 2100);
        document.getElementById("exoticsection1-bottom-right-textwrapper1").classList.add("exoticsRightlefttext1");
        setTimeout(function(){
          document.getElementById("exoticsection1-bottom-right-textwrapper2").classList.remove("visibleNone");
          }, 2400);
        document.getElementById("exoticsection1-bottom-right-textwrapper2").classList.add("exoticsRightlefttext2");
        setTimeout(function(){
          document.getElementById("exoticsection1-bottom-right-textwrapper3").classList.remove("visibleNone");
          }, 2600);
        document.getElementById("exoticsection1-bottom-right-textwrapper3").classList.add("exoticsRightlefttext3");
        setTimeout(function(){
          document.getElementById("exoticsection1-bottom-right-textwrapper4").classList.remove("visibleNone");
          }, 2800);
        document.getElementById("exoticsection1-bottom-right-textwrapper4").classList.add("exoticsRightlefttext4");
       
       
        setRighttoleft(false);
      } else {
        document
          .getElementById("exoticsection1-float-bottom-top")
          .classList.remove("exoticsRightlefttext");
      }
    } else {
      setRighttoleft(false);
    }
  }, [offset]);
  //console.log(offset);
  return (
    
    <div className="exoticsection1">
      {/********mobileview********/}
      <Exoticmobileview/>
      {/********End********/}
      <div className="exoticsection1-wrappers">
      <div className="exoticsection1-float">
        <div className="exoticsection1-float-top" id="exoticsection1-float-top">
          <div className="exoticsection1-float-top-logo">
            <img
              src={section1floatlogo}
              alt=""
              className="exoticsection1-float-top-logo-img"
            />
          </div>
          <div className="exoticsection1-float-top-m-text">
            <span className="exoticsection1-float-top-m-text1">
            THIS IS A RARE AND EXUISITE , 
            </span>
            <span className="exoticsection1-float-top-m-text1">
            FULL-BODIED single SINGLE MALT 
            </span>
            <span className="exoticsection1-float-top-m-text1">
            WHISKY MATURED TO PERFEECTION
            </span>
          </div>
          <div className="exoticsection1-float-top-b-text">
            <span className="exoticsection1-float-top-m-text1">
              A FEAST FOR THE SENSES
            </span>
          </div>
        </div>
        <div className="exoticsection1-float-middle">
          <img
            src={section1line}
            alt=""
            className="exoticsection1-float-middle-img"
          />
        </div>
        <div className="exoticsection1-float-bottom">
          <div
            className="exoticsection1-float-bottom-top"
            id="exoticsection1-float-bottom-top"
          >
            <span className="exoticsection1-float-bottom-top-text2">
              TASTING
            </span>
            <span className="exoticsection1-float-bottom-top-text2">NOTES</span>
          </div>
          <div className="exoticsection1-float-bottom-bottom">
            <img
              src={section2floatlogo}
              alt=""
              className="exoticsection1-float-bottom-bottom-img"
            />
          </div>
        </div>
      </div>
      
       <div className="exotic-top-parallex">
        <div className="exotic-prallex-design">
          <img src={setion1img} alt="" className="exotic-prallex-design-img" />
        </div>
          <div className="exotic-prallex-image">
            <img src={parralextop} alt="" className="exotic-prallex-img" id="exotic-prallex-img"/>
          </div>
  </div>
        
      
      <div className="exoticsection1-bottom">
        <div className="exoticsection1-bottom-left">
          <div className="exoticsection1-bottom-left-bluecolor"></div>
          <img
            src={section2leftimg}
            alt=""
            className="exoticsection1-bottom-left-img"
          />
        </div>
        <div className="exoticsection1-bottom-right">
          <div className="exoticsection1-bottom-right-bluecolor"></div>
          <div className="exoticsection1-bottom-right-bg">
            <img
              src={section2rightimg1}
              alt=""
              className="exoticsection1-bottom-right-bg-img"
            />
          </div>
          <div className="exoticsection1-bottom-right-bg1">
            <img
              src={sprial}
              alt=""
              className="exoticsection1-bottom-right-bg1-img"
            />
          </div>

          <div className="exoticsection1-bottom-right-textwrapper visibleNone"
            id="exoticsection1-bottom-right-textwrapper1"
            >
              <span className="exoticsection1-bottom-right-textwrapper-text1 ">
                  COLOUR
              </span>
               <span className="exoticsection1-bottom-right-textwrapper-text2">
                  Rich amber.
                </span>
          </div>
          <div className="exoticsection1-bottom-right-textwrapper visibleNone"
            id="exoticsection1-bottom-right-textwrapper2"
          >
            <span className="exoticsection1-bottom-right-textwrapper-text1 ">
               AROMA
            </span>
            <span className="exoticsection1-bottom-right-textwrapper-text2">
              Citrus, toffee, vanilla, dried fruits and
            </span>
            <span className="exoticsection1-bottom-right-textwrapper-text2">
              warm oak.
            </span>
          </div>
          <div
            className="exoticsection1-bottom-right-textwrapper visibleNone"
            id="exoticsection1-bottom-right-textwrapper3"
          >
            <span className="exoticsection1-bottom-right-textwrapper-text1">
              PALATE
            </span>
            <span className="exoticsection1-bottom-right-textwrapper-text2">
              Sweet and balanced with subtle notes of
            </span>
            <span className="exoticsection1-bottom-right-textwrapper-text2">
              vanilla and fruits.
            </span>
          </div>
          <div
            className="exoticsection1-bottom-right-textwrapper visibleNone"
            id="exoticsection1-bottom-right-textwrapper4"
          >
            <span className="exoticsection1-bottom-right-textwrapper-text1">
              FINISH
            </span>
            <span className="exoticsection1-bottom-right-textwrapper-text2">
              Smooth with a pleasant and lingering finish.
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Exoticsection1;
