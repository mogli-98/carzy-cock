import React, { useContext, useEffect, useState } from 'react'
import "./Exoticsection3.css";
import section3leftimg1 from "../../assets/image/exotic/section3leftimg1.jpg";
import section3design from "../../assets/image/exotic/section3design.png";
import section3leftimg2 from "../../assets/image/exotic/section3leftimg2.jpg";
import section3logo from "../../assets/image/exotic/section3logo.png"
import section3rightbg from '../../assets/image/exotic/section3rightbg.png';
import section3rightimage from '../../assets/image/exotic/section3rightimage.jpg'
import whiteline from '../../assets/image/exotic/whiteline.png';
import cock from '../../assets/image/exotic/cock.png';
import AuthContext from '../../utility/Usecontext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Exoticsection3 = () => {
    const{offset}=useContext(AuthContext);
  const[imganimation, setImganimation] = useState(false);
  const[imganimation1, setImganimation1] = useState(false);
  const[imganimation2, setImganimation2] = useState(false);
  
  useEffect(() => {
    AOS.init();
}, [])
useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  useEffect(()=>{
    const animation =(document.getElementById('exoticsection2-bottomwrapper').offsetTop + document.getElementById("exoticsection2-bottomwrapper").offsetHeight)-80
   
    if(offset >= animation){
      if(imganimation == false){
        setImganimation(true)
        document.getElementById("exoticsection3-wrapper-left-top-right-wrapper-cover").classList.add("smokysection3-textanimation1");
        document.getElementById("exoticsection3-wrapper-right-top-left-image-cover").classList.add("smokysection3-image");
        setTimeout(() => {
            document.getElementById("exoticsection3-wrapper-left-top-right-wrapper-cover").style.visibility="hidden";
            document.getElementById("exoticsection3-wrapper-right-top-left-image-cover").style.visibility="hidden";
           
          
        }, 1000);
      
      }
    }
  },[offset])
  useEffect(()=>{
    const animation1 =(document.getElementById('exoticsection2-bottomwrapper').offsetTop + document.getElementById("exoticsection2-bottomwrapper").offsetHeight)+500
   
    if(offset >= animation1){
      if(imganimation1 == false){
        
        setImganimation1(true)
        document.getElementById("exoticsection3-wrapper-right-bottom-up-left-text-cover").classList.add("smokysection3-textanimation1");
        document.getElementById("exoticsection3-wrapper-left-middle-right-image-cover").classList.add("smokysection3-image");
        setTimeout(() => {
            document.getElementById("exoticsection3-wrapper-right-bottom-up-left-text-cover").style.visibility="hidden";
            document.getElementById("exoticsection3-wrapper-left-middle-right-image-cover").style.visibility="hidden";
           
          
        }, 1000);
      
      }
    }
  },[offset])
  useEffect(()=>{
    const animation2 =(document.getElementById('exoticsection4').offsetTop - document.getElementById("exoticsection4").offsetHeight)-150
   
    if(offset >= animation2){
      if(imganimation2 == false){
        
        setImganimation2(true)
        document.getElementById("exoticsection3-wrapper-left-bottom-right-textwrap-cover").classList.add("smokysection3-textanimation1");
        document.getElementById("exoticsection3-wrapper-right-bottom-down-left-cover").classList.add("smokysection3-image");
        setTimeout(() => {
            document.getElementById("exoticsection3-wrapper-left-bottom-right-textwrap-cover").style.visibility="hidden";
            document.getElementById("exoticsection3-wrapper-right-bottom-down-left-cover").style.visibility="hidden";
           
          
        }, 1000);
      
      }
    }
  },[offset])
    
  

  return (
    <div className='exoticsection3'>
        <div className="exoticsection3-wrapper">
        <div className="exoticsection3-wrapper-left">
            <div className="exoticsection3-wrapper-left-top">
                <div className="exoticsection3-wrapper-left-top-left"></div>
            <div className="exoticsection3-wrapper-left-top-right">
                <div className="exoticsection3-wrapper-left-top-right-image" id='exoticsection3-wrapper-left-top-right-image'>
                    <img src={section3rightbg} alt="" className="exoticsection3-wrapper-left-top-right-img" />
                </div>
               <div className="exoticsection3-wrapper-left-top-right-wrapper">
                <div className="exoticsection3-wrapper-left-top-right-wrapper-cover" id='exoticsection3-wrapper-left-top-right-wrapper-cover'></div>
                <span className='exoticsection3-wrapper-left-top-right-text1'>SMOKED MEATS/NUTS/FRUITS</span>
                <span className='exoticsection3-wrapper-left-top-right-text2'>While we’ve shared pairing suggestions, go</span>
                <span className='exoticsection3-wrapper-left-top-right-text2'>right ahead and pair Crazy Cock Whisky </span>
                <span className='exoticsection3-wrapper-left-top-right-text2'>with nuts, fruits and meats of your choice.</span>
            </div></div>
            </div>
            <div className="exoticsection3-wrapper-left-middle">
                <div className="exoticsection3-wrapper-left-middle-left"></div>
                <div className="exoticsection3-wrapper-left-middle-right">
                    <div className="exoticsection3-wrapper-left-middle-right-image">
                        <div className="exoticsection3-wrapper-left-middle-right-image-cover" id='exoticsection3-wrapper-left-middle-right-image-cover'></div>
                        <img src={section3rightimage} alt="" className="exoticsection3-wrapper-left-middle-right-img" />
                    </div>
                </div>
            </div>
            <div className="exoticsection3-wrapper-left-bottom">
                <div className="exoticsection3-wrapper-left-bottom-left"></div>
                <div className="exoticsection3-wrapper-left-bottom-right">
                        <div className="exoticsection3-wrapper-left-bottom-right-wrap">
                    <div className="exoticsection3-wrapper-left-bottom-right-textwrap">
                        <div className="exoticsection3-wrapper-left-bottom-right-textwrap-cover" id='exoticsection3-wrapper-left-bottom-right-textwrap-cover'></div>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text1'>
                        WHOLE CRAB
                        </span>
                        
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        Crabs and Crazy Cock Exotic with a 
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        splash of chilled water make the perfect 
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        match. Creamy sherry and nutty notes 
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        accentuate the fresh and savoury qualities 
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        of crab. The mildly sweet and toffee fla
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        vours combine particularly well with the
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        delicate flesh and sweet pungency of the
                        </span>
                        <span className='exoticsection3-wrapper-left-bottom-right-textwrap-text2'>
                        crab for a rich, flavourful experience.
                        </span>

                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="exoticsection3-wrapper-right">
            <div className="exoticsection3-wrapper-right-top">

                <div className="exoticsection3-wrapper-right-top-left">
                    <div className="exoticsection3-wrapper-right-top-left-image">
                    <div className="exoticsection3-wrapper-right-top-left-image-cover" id='exoticsection3-wrapper-right-top-left-image-cover'></div>
                        <img src={section3leftimg1} alt="" className="exoticsection3-wrapper-right-top-left-img"/>
                    </div>
                </div>
                <div className="exoticsection3-wrapper-right-top-right">
                <div className="exoticsection3-wrapper-right-top-right-image">
                    <img src={section3design} alt="" className="exoticsection3-wrapper-right-top-right-img" />
                </div>
                </div>
            </div>
            <div className="exoticsection3-wrapper-right-bottom">
                <div className="exoticsection3-wrapper-right-bottom-image">
                    <img src={section3logo} alt="" className="exoticsection3-wrapper-right-bottom-img" />
                </div>
                <div className="exoticsection3-wrapper-right-bottom-up">
                    <div className="exoticsection3-wrapper-right-bottom-up-left">
                        <div className="exoticsection3-wrapper-right-bottom-up-left-text">
                            <div className="exoticsection3-wrapper-right-bottom-up-left-text-cover" id='exoticsection3-wrapper-right-bottom-up-left-text-cover'></div>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text1'>HUMMUS AND CRACKERS</span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>Crazy Cock Exotic is the perfect comple</span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>ment to Hummus and Crackers, owing </span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>to its complex and full-bodied flavour</span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>profile. The flavours in Crazy Cock </span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>Exotic serve as a fine balance and help</span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>refresh the palate between bites of this </span>
                            <span className='exoticsection3-wrapper-right-bottom-up-left-text2'>proverbial Mediterranean staple.</span>
                        </div>
                    </div>
                    <div className="exoticsection3-wrapper-right-bottom-up-right">

                    </div>
                </div>
                <div className="exoticsection3-wrapper-right-bottom-down">
                <div className="exoticsection3-wrapper-right-bottom-down-left">
                    <div className="exoticsection3-wrapper-right-bottom-down-left-cover" id='exoticsection3-wrapper-right-bottom-down-left-cover'></div>
                    <img src={section3leftimg2} alt="" className="exoticsection3-wrapper-right-bottom-down-left-img" />
                </div>
                <div className="exoticsection3-wrapper-right-bottom-down-right"></div>
                </div>

            </div>
        </div>
        </div>
      <div className="exoticsection3-line" 
      data-aos="fade-up"
      data-aos-offset="300">
            <img src={whiteline} alt="" className="exoticsection3-line-img" />

      </div>
    <div className="exoticsection3-cock">
        <img src={cock} alt="" className="exoticsection3-cock-img" />

    </div>
    </div>
  )
}

export default Exoticsection3