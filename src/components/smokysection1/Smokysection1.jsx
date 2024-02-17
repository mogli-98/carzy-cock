import React, { useContext, useEffect, useState } from 'react'
import "./Smokysection1.css";
import section1 from "../../assets/image/smoky/section1.jpg"
import section2leftimg from "../../assets/image/exotic/section2leftimg.png"
import floatlogo from "../../assets/image/smoky/floatlogo.png"
import section1line from "../../assets/image/exotic/section1line.png";
import floatlogo1 from "../../assets/image/smoky/floatlogo1.png"
import section2design from "../../assets/image/smoky/section2design.png"
import sprial from "../../assets/image/exotic/sprial.png"
import section1design from '../../assets/image/smoky/section1design.png';
import Smokymobileview from '../smokymobileview/Smokymobileview';
import AuthContext from '../../utility/Usecontext';
import parraleximage from"../../assets/image/smoky/parraleximage.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Smokysection1 = () => {
    const [opacityanimation, setOpacityanimation] = useState(true);
    const [righttoleft, setRighttoleft] = useState(true);
    const {offset} =useContext(AuthContext);
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=>{
        if(offset >= 200) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "9vh";
               
        }
        if(offset >= 220) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "8vh";
               
        }
        if(offset >= 240) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "7vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "7vh";   
        }
        if(offset >= 260) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "6vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "6vh";
        }
        if(offset >= 280) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "5vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "5";   
        }
        if(offset >= 300) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "4vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "4vh";  
        }
        if(offset >= 320) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "3vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "3vh";  
        }
        if(offset >= 340) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "2vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "2vh"; 
        }
        if(offset >= 360) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "1vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "1vh";
               
        }
        if(offset >= 380) {
            
            document.getElementById("smokysection1-float-top-m-text").style.marginBottom =
              "0vh";
              document.getElementById("smokysection1-float-bottom-top").style.marginTop =
              "0vh";     
        }
        //text animation over the logo//
    if (opacityanimation === true) {
        if (offset > 400) {
          document
            .getElementById("smokysection1-float-bottom-top")
            .classList.add("exotictextopacityfloattext");
          setOpacityanimation(false);
        } else {
          document
            .getElementById("smokysection1-float-bottom-top")
            .classList.remove("exotictextopacityfloattext");
        }
      } else {
        setOpacityanimation(false);
      }
      //righttoleft text animation
      if (righttoleft === true) {
        if (offset > 200) {
          setTimeout(function(){
            document.getElementById("smokysection1-bottom-right-textwrapper1").classList.remove("visibleNone");
            }, 2200);
          document.getElementById("smokysection1-bottom-right-textwrapper1").classList.add("exoticsRightlefttext1");
          setTimeout(function(){
            document.getElementById("smokysection1-bottom-right-textwrapper2").classList.remove("visibleNone");
            }, 2400);
          document.getElementById("smokysection1-bottom-right-textwrapper2").classList.add("exoticsRightlefttext2");
          setTimeout(function(){
           document.getElementById("smokysection1-bottom-right-textwrapper3").classList.remove("visibleNone");
           }, 2600);
          document.getElementById("smokysection1-bottom-right-textwrapper3").classList.add("exoticsRightlefttext3");
          setTimeout(function(){
           document.getElementById("smokysection1-bottom-right-textwrapper4").classList.remove("visibleNone");
           }, 2800);
          document.getElementById("smokysection1-bottom-right-textwrapper4").classList.add("exoticsRightlefttext4");
         
         
          setRighttoleft(false);
        } 
      } 
     
    },[offset]);
    useEffect(()=>{
        if(offset >= 0) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "1vh";
            
        }
        if(offset >= 50) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "1.5vh";
            
        }
        if(offset >= 100) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "2vh";
              
        }
        if(offset >= 150) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "2.5vh";
              
        }
        if(offset >= 200) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "3vh";
             
            
        }
        if(offset >= 250) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "3.5vh";
              
        }
        if(offset >= 300) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "4vh";
             
            
        }
        if(offset >= 350) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "4.5vh";
             
        }
        if(offset >= 400) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "5vh";
             
            
        }
        if(offset >= 450) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "5.5vh";
              
            
        }
        if(offset >= 500) {
            
            document.getElementById("smokysection1-top-parallex-img").style.paddingTop =
              "6vh";
             
            
        }
      
      
    },[offset]);
  return (
    <div className='smokysection1'>
        
        {/***************mobileview**************************/}
        <Smokymobileview/>
        {/***************mobileview**************************/}
        <div className="smokysection1-wrappers">
        <div className="smokysection1-float">
            <div className="smokysection1-float-top">
               <div className="smokysection1-float-top-logo">
                <img src={floatlogo} alt="" className="smokysection1-float-top-logo-img" />
               </div>
               <div className="smokysection1-float-top-m-text" id='smokysection1-float-top-m-text'>
                <span className="smokysection1-float-top-m-text1">
                  Expect a rich, full-bodied single malt whisky aged in imported Bourbon and Sherry  Casks, meticulously crafted
                </span>
                <span className="smokysection1-float-top-m-text1">
                  by our Master Blender who has made use of old Peat Bogs  and rare Sherry Casks to skillfully craft a balanced whisky
                </span>
                <span className="smokysection1-float-top-m-text1">
                They say home isn't a place. It's a feeling. Welcome home.
                </span>
               </div>
               
            </div>
            <div className="smokysection1-float-middle">
                <img src={section1line} alt="" className="smokysection1-float-middle-img" />
            </div>
            <div className="smokysection1-float-bottom">
                <div className="smokysection1-float-bottom-top" id='smokysection1-float-bottom-top' >
                    <span className="smokysection1-float-bottom-top-text2">
                    TASTING
                    </span>
                    <span className="smokysection1-float-bottom-top-text2">
                    NOTES
                    </span>
                </div>
                <div className="smokysection1-float-bottom-bottom">
                    <img src={floatlogo1} alt="" className="smokysection1-float-bottom-bottom-img" />
                </div>
            </div>
        </div>
        <div className="smokysection1-top-parallex">
        <div className="smokysection1-top-parallex-design">
            <img src={section1design} alt="" className="smokysection1-top-parallex-design-img" />
        </div>
            <div className="smokysection1-top-parallex-image">
                <img src={parraleximage} alt="" className="smokysection1-top-parallex-img" id='smokysection1-top-parallex-img' />
            </div>
            </div>
            <div className="smokysection1-bottom">
                
                <div className="smokysection1-bottom-left">
                <div className="smokysection1-bottom-left-bluecolor"></div>
                    <img src={section2leftimg} alt="" className="smokysection1-bottom-left-img" />
                </div>
                <div className="smokysection1-bottom-right">
                <div className="smokysection1-bottom-right-bluecolor"></div>
                    <div className="smokysection1-bottom-right-bg">
                        <img src={section2design} alt="" className="smokysection1-bottom-right-bg-img" />
                    </div>
                    <div className="smokysection1-bottom-right-bg1">
                        <img src={sprial} alt="" className="smokysection1-bottom-right-bg1-img" />
                    </div>
                    
                    <div className="smokysection1-bottom-right-textwrapper visibleNone" id='smokysection1-bottom-right-textwrapper1'>
                        <span className="smokysection1-bottom-right-textwrapper-text1">
                            COLOUR
                        </span>
                        <span className="smokysection1-bottom-right-textwrapper-text2">
                        Deep antique gold
                        </span>
                    </div>
                   
                    <div className="smokysection1-bottom-right-textwrapper visibleNone"  id='smokysection1-bottom-right-textwrapper2'>
                        <span className="smokysection1-bottom-right-textwrapper-text1">
                            AROMA
                        </span>
                        <span className="smokysection1-bottom-right-textwrapper-text2">
                          Peat and smoke on the nose with warm notes of raisin,
                          dark chocolate, spicy cinnamon, vanilla, mandarin, oak,
                          sweet peat and a summer barbeque.
                        </span>
                        <span className="smokysection1-bottom-right-textwrapper-text2">
                            and vanilla.
                        </span>
                    </div>
                    <div className="smokysection1-bottom-right-textwrapper visibleNone"  id='smokysection1-bottom-right-textwrapper3'
                     
                   >
                        <span className="smokysection1-bottom-right-textwrapper-text1">
                             PALATE
                        </span>
                        <span className="smokysection1-bottom-right-textwrapper-text2">
                          Smoke laced with spice, raisins,
                          touch of cinnamon with top notes of balanced sweetness.
                        </span>
                        
                    </div>
                    <div className="smokysection1-bottom-right-textwrapper visibleNone"  id='smokysection1-bottom-right-textwrapper4'
                    
                    >
                        <span className="smokysection1-bottom-right-textwrapper-text1">
                             FINISH
                        </span>
                        <span className="smokysection1-bottom-right-textwrapper-text2">
                          Warm and lingering.
                        </span>
                    
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Smokysection1