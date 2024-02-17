import React, { useState } from 'react'
import "./Smokysection3.css";
import section3img1 from "../../assets/image/smoky/section3img1.jpg";
import section3img2 from "../../assets/image/smoky/section3img2.jpg";
import section3imagetop1 from "../../assets/image/rare/section3imagetop1.png";
import section3logo from "../../assets/image/rare/section3logo.png";
import section3cock from "../../assets/image/rare/section3cock.png";
import section3lineimage from "../../assets/image/rare/section3lineimage.png";
import { useContext } from 'react';
import AuthContext from '../../utility/Usecontext';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Smokysection3 = () => {
  const{offset}=useContext(AuthContext);
  const[imganimation, setImganimation] = useState(false);
  const[imganimation1, setImganimation1] = useState(false);
  
  useEffect(() => {
    AOS.init();
}, [])
useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  useEffect(()=>{
    const animation =(document.getElementById('smokysection2-bottomwrapper').offsetTop + document.getElementById("smokysection2-bottomwrapper").offsetHeight)-80
   
    if(offset >= animation){
      if(imganimation == false){
        setImganimation(true)
        document.getElementById("smokysection3-wrap-top2-wrap-cover1").classList.add("smokysection3-textanimation1");
        document.getElementById("smokysection3-wrap-top3-image-cover2").classList.add("smokysection3-image");
        setTimeout(() => {
            document.getElementById("smokysection3-wrap-top2-wrap-cover1").style.visibility="hidden";
            document.getElementById("smokysection3-wrap-top3-image-cover2").style.visibility="hidden";
           
          
        }, 1000);
      
      }
    }
  },[offset])
  useEffect(()=>{
    const animation1 =(document.getElementById('smokysection4').offsetTop - document.getElementById("smokysection4").offsetHeight)-70;
    console.log(animation1,offset)
    if(offset >= animation1){
      if(imganimation1 == false){
       
        setImganimation1(true)
        document.getElementById("smokysection3-wrap-bottom3-wrap-covertext2").classList.add("smokysection3-textanimation1");
        document.getElementById("smokysection3-wrap-bottom2-image-cover").classList.add("smokysection3-image");
        setTimeout(() => {
            document.getElementById("smokysection3-wrap-bottom3-wrap-covertext2").style.visibility="hidden";
            document.getElementById("smokysection3-wrap-bottom2-image-cover").style.visibility="hidden";
           
          
        }, 1000);
      
      }
    }
  },[offset])
  

  return (
     <div className='smokysection3'>
      <div className="smokysection3-wrapper-wrap">
        <div className="smokysection3-wrapper-wrap-cock">
          <img src={section3cock} alt="" className="smokysection3-wrapper-wrap-cock-img" />
        </div>
      <div className="smokysection3-wrap">
            <div className="smokysection3-wrap-floatlogo">
                <img src={section3logo} alt="" className="smokysection3-wrap-floatlogo-image" id='smokysection3-wrap-floatlogo-image' />
            </div>
              <div className="smokysection3-wrap-top">
              <div className="smokysection3-wrap-top1"></div>
              <div className="smokysection3-wrap-top2" id='smokysection3-wrap-top2'>
              <div className="smokysection3-wrap-top2-wrap">
                <div className="smokysection3-wrap-top2-wrap-cover" id='smokysection3-wrap-top2-wrap-cover1'></div>
                      <span className="smokysection3-wrap-top2-wrap-title">
                           FILLET/MEAT/STEAK
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                             Crazy Cock Smoky works well particularly 
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                             with grilled steak since the smoky notes in
                       </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                             the whisky mimic the flavour of the grill.
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                              The malty, fruity and nutty flavours in the
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                              whisky pairs well with the robust and fatty
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                              flavours of meat and steak. For leaner steaks 
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                              such as filet or sirloin, Crazy Cock Smoky 
                        </span>
                        <span className="smokysection3-wrap-top2-wrap-des">
                             with its balanced flavour - complements the 
                        </span>
                       <span className="smokysection3-wrap-top2-wrap-des">
                              savory meat with low fat content. 
                        </span>
                
             </div>
        </div>
        <div className="smokysection3-wrap-top3">
          
        <div className="smokysection3-wrap-top3-image" id='smokysection3-wrap-top3-image' >
        <div className="smokysection3-wrap-top3-image-cover2"  id='smokysection3-wrap-top3-image-cover2'></div>
          <img src={section3img1} alt="" className="smokysection3-wrap-top3-img" id='smokysection3-wrap-top3-img'/>
        </div>
        </div>
        <div className="smokysection3-wrap-top4">
        <div className="smokysection3-wrap-top4-image">
          <img src={section3imagetop1} alt="" className="smokysection3-wrap-top4-img" />
        </div>
        </div>
        </div>
        <div className="smokysection3-wrap-bottom">
          
        <div className="smokysection3-wrap-bottom1"></div>
        <div className="smokysection3-wrap-bottom2">
          
          <div className="smokysection3-wrap-bottom2-image">
          <div className="smokysection3-wrap-bottom2-image-cover" id='smokysection3-wrap-bottom2-image-cover'></div>
            <img src={section3img2} alt="" className="smokysection3-wrap-bottom2-img" />
          </div>
        </div>
        <div className="smokysection3-wrap-bottom3" >
        <div className="smokysection3-wrap-bottom3-wrap">
          <div className="smokysection3-wrap-bottom3-wrap-covertext2" id='smokysection3-wrap-bottom3-wrap-covertext2'></div>
            <span className="smokysection3-wrap-bottom3-wrap-title">
            OYSTERS
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            The smoky tang of Crazy Cock Smoky, 
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            together with the sweet, saline flavour
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            of oysters is a match made in heaven.
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            There is no better way to wash down
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            the crisp saltiness and lingering oceanic
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            finish of Oysters than with an elegant 
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            dram with a smoky profile. Try it and 
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            you’ll agree that the feeling is nothing 
            </span>
            <span className="smokysection3-wrap-bottom3-wrap-des">
            short of sublime.
            </span>
           
          </div>
        </div>
        <div className="smokysection3-wrap-bottom4"></div>
        </div>

      </div>
      <div className="smokysection3-line-image"
       data-aos="fade-up"
       data-aos-offset="300"
       >
        <img src={section3lineimage} alt="" className="smokysection3-line-img" />
      </div>
      </div>
    </div>
  )
}

export default Smokysection3