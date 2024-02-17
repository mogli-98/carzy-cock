import React, { useContext, useEffect, useState } from 'react'
import './Raresection3.css';
import section3imagetop from "../../assets/image/rare/section3imagetop.jpg";
import section3imagebottom from "../../assets/image/rare/section3imagebottom.jpg";
import section3imagetop1 from "../../assets/image/rare/section3imagetop1.png";
import section3logo from "../../assets/image/rare/section3logo.png";
import section3cock from "../../assets/image/rare/section3cock.png";
import section3lineimage from "../../assets/image/rare/section3lineimage.png";
import AuthContext from '../../utility/Usecontext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Raresection3 = () => {
const {offset} = useContext(AuthContext);
const[imganimation, setImganimation] = useState(false);
const[imganimation1, setImganimation1] = useState(false);

useEffect(() => {
  AOS.init();
}, [])
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
useEffect(()=>{
  const animation =(document.getElementById('raresection2-bottomwrapper').offsetTop + document.getElementById("raresection2-bottomwrapper").offsetHeight)-80
 
  if(offset >= animation){
    if(imganimation == false){
      setImganimation(true)
      document.getElementById("raresection3-wrap-top2-cover").classList.add("smokysection3-textanimation1");
      document.getElementById("raresection3-wrap-top3-image-cover").classList.add("smokysection3-image");
      setTimeout(() => {
          document.getElementById("raresection3-wrap-top2-cover").style.visibility="hidden";
          document.getElementById("raresection3-wrap-top3-image-cover").style.visibility="hidden";
         
        
      }, 1000);
    
    }
  }
},[offset])
useEffect(()=>{
  const animation1 =(document.getElementById('raresection4').offsetTop - document.getElementById("raresection4").offsetHeight)-200
 
  if(offset >= animation1){
    if(imganimation1 == false){
      setImganimation1(true)
      
      document.getElementById("raresection3-wrap-bottom3-wrap-cover").classList.add("smokysection3-textanimation1");
      document.getElementById("raresection3-wrap-bottom2-image-cover").classList.add("smokysection3-image");
      setTimeout(() => {
          document.getElementById("raresection3-wrap-bottom3-wrap-cover").style.visibility="hidden";
          document.getElementById("raresection3-wrap-bottom2-image-cover").style.visibility="hidden";
         
        
      }, 1000);
    
    }
  }
},[offset])


  return (
    <div className='raresection3'>
      <div className="raresection3-wrapper-wrap">
        <div className="raresection3-wrapper-wrap-cock">
          <img src={section3cock} alt="" className="raresection3-wrapper-wrap-cock-img" />
        </div>
      <div className="raresection3-wrap">
        <div className="raresection3-wrap-floatlogo">
          <img src={section3logo} alt="" className="raresection3-wrap-floatlogo-image" />
        </div>
        <div className="raresection3-wrap-top">
        <div className="raresection3-wrap-top1"></div>
        <div className="raresection3-wrap-top2">
          
          <div className="raresection3-wrap-top2-wrap">
          <div className="raresection3-wrap-top2-cover" id='raresection3-wrap-top2-cover'></div>
            <span className="raresection3-wrap-top2-wrap-title">
            APPLE PIE
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            Cinnamon, caramel and brown sugar notes 
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            of Apple Pie complement the toasted oak,
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            vanilla and butterscotch notes of Crazy
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            Crack Rare Whisky for an exceptional pair
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            ing. The sherry cask finish brings the baking
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            spices to the fore for a mellow combination 
            </span>
            <span className="raresection3-wrap-top2-wrap-des">
            you can’t get enough of.
            </span>
          </div>
        </div>
        <div className="raresection3-wrap-top3">
        <div className="raresection3-wrap-top3-image">
          <div className="raresection3-wrap-top3-image-cover"id='raresection3-wrap-top3-image-cover'></div>
          <img src={section3imagetop} alt="" className="raresection3-wrap-top3-img"/>
        </div>
        </div>
        <div className="raresection3-wrap-top4">
        <div className="raresection3-wrap-top4-image">
          <img src={section3imagetop1} alt="" className="raresection3-wrap-top4-img" />
        </div>
        </div>
        </div>
        <div className="raresection3-wrap-bottom">
          
        <div className="raresection3-wrap-bottom1"></div>
        <div className="raresection3-wrap-bottom2">
          <div className="raresection3-wrap-bottom2-image">
            <div className="raresection3-wrap-bottom2-image-cover" id='raresection3-wrap-bottom2-image-cover'></div>
            <img src={section3imagebottom} alt="" className="raresection3-wrap-bottom2-img" />
          </div>
        </div>
        <div className="raresection3-wrap-bottom3">
        <div className="raresection3-wrap-bottom3-wrap">
          <div className="raresection3-wrap-bottom3-wrap-cover" id='raresection3-wrap-bottom3-wrap-cover'></div>
            <span className="raresection3-wrap-bottom3-wrap-title">
            NIGIRI
            </span>
            <span className="raresection3-wrap-bottom3-wrap-des">
            Light notes of pepper and star anise in 
            </span>
            <span className="raresection3-wrap-bottom3-wrap-des">
            Crazy Cock Rare pair well with the fresh,
            </span>
            <span className="raresection3-wrap-bottom3-wrap-des">
            fishy taste of Nigiri. Add ice to the
            </span>
            <span className="raresection3-wrap-bottom3-wrap-des">
            whisky to wash down the bold flavours in
            </span>
            <span className="raresection3-wrap-bottom3-wrap-des">
            Nigiri. sweet and sour flavour of rice vin
            </span>
            <span className="raresection3-wrap-bottom3-wrap-des">
            egar, the salty ta bi. 
            </span>
           
          </div>
        </div>
        <div className="raresection3-wrap-bottom4"></div>
        </div>

      </div>
      <div className="raresection3-line-image"
       data-aos="fade-up"
       data-aos-offset="300">
        <img src={section3lineimage} alt="" className="raresection3-line-img" />
      </div>
      </div>
    </div>
  )
}

export default Raresection3