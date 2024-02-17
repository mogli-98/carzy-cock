import React, { useContext } from 'react'
import "./Homeintro2.css";
import intro2smallimage from "../../assets/intro2smallimage.png";
import intro4logo from "../../assets/intro4logo.png";
import HOMEintro3img from "../../assets/HOMEintro3img.jpg";
import intro2imagefingure from "../../assets/intro2imagefingure.gif";
import intro2sprialimage from "../../assets/intro2sprialimage.png";
import intro3 from "../../assets/intro3.png";
import homeinrocock from "../../assets/homeinrocock.png";
import AuthContext from '../../utility/Usecontext';
import { useEffect } from 'react';
import { useState } from 'react';


const Homeintro2 = () => {
  const { offset } = useContext(AuthContext)
  const [footplayed, setfootplayed] = useState(false);
  useEffect(() => {
    const footprinttop = (document.getElementById("introwrapper-top").offsetTop - document.getElementById("introwrapper-top").offsetHeight) + 120;
    console.log(offset, footprinttop, footplayed);

    if (offset >= footprinttop) {
      if (footplayed == false) {
        setfootplayed(true);
        document.getElementById("introwrapper-top-right-top-b-img1").setAttribute("src", intro2imagefingure);
      }
    } else {
      setfootplayed(false);
    }
  }, [offset])
  useEffect(() => {

    if (offset > 1270) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "-4";
    }
    if (offset > 1290) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "-3vh";
    }
    if (offset > 1310) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "-2vh";
    }
    if (offset > 1330) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "-1vh";
    }
    if (offset > 1350) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "0vh";
    }
    if (offset > 1370) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "1vh";
    }
    if (offset > 1390) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "2vh";
    }
    if (offset > 1410) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "3vh";
    }
    if (offset > 1430) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "4vh";
    }
    if (offset > 1450) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "5vh";
    }
    if (offset > 1470) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "6vh";
    }
    if (offset > 1490) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "7vh";
    }
    if (offset > 1510) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "8vh";
    }
    if (offset > 1530) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "9vh";
    }
    if (offset > 1550) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "10vh";
    }
    if (offset > 1570) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "10vh";
    }
    if (offset > 1590) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "11vh";
    }
    if (offset > 1610) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "12vh";
    }
    if (offset > 1630) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "13vh";
    }
    if (offset > 1650) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "14vh";
    }
    if (offset > 1670) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "15vh";
    }
    if (offset > 1690) {
      document.getElementById("introwrapper-top-right-top-bottom-img").style.top = "17vh";
    }


  }, [offset])
  return (
    <div className='intro2'>
      {/*****************mobileview***************/}
      <div className="intro2-mobileview">
        <div className="intro2-mobileview-cockimage">
          <img src={homeinrocock} alt="" className="intro2-mobileview-cockimg" />
        </div>
        <div className="intro2-mobileview-bottom-down-lineimage">
          <img src={intro3} alt="" className="intro2-mobileview-bottom-down-linimg" />
        </div>
        <div className="intro2-mobileview-logo">
          <img src={intro4logo} alt="" className="intro2-mobileview-logo-img" />
        </div>
        <div className="intro2-mobileview-top"></div>
        <div className="intro2-mobileview-bottom">
          <div className="intro2-mobileview-bottom-up">
            <span className="intro2-mobileview-bottom-up-text">
            IT’S TRUE.
            </span>
            <span className="intro2-mobileview-bottom-up-text">
            WHISKY GETS BETTER 
            </span>
            <span className="intro2-mobileview-bottom-up-text">
            WITH AGE.
            </span>
          </div>
          <div className="intro2-mobileview-bottom-down">


            <span className="intro2-mobileview-bottom-up-text1">
            The family previously owned distilleries in the princely states
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            of Jawhar and Akkalkot in the 1920s till India’s Independence
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            when prohibition was announced.
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            Decades later, after the easing of prohibition in India, the family
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
             restarted the distilling business. Quite obviously our vast and
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            varied experience over the years has honed our skills and
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            helped us gain a profound understanding of malts and magic.
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            With the 4th generation taking from the previous, there
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            is a new-found ambition in the air.Given our vast expertise we 
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
             are now boldly venturing into uncharted territory.
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            All in all, we are unafraid to walk the path less taken and to
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            carve our own niche in the world of whiskies.
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            We know that the one thing that makes a long, tiring journey
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            worthwhile is the warm feeling of coming home.
            </span>
            <span className="intro2-mobileview-bottom-up-text1">
            After crafting sprits which speak our story, we are home.
            </span>
          </div>
        </div>

      </div>
      {/**************end*************************************/}
      <div className="introwrapper-top" id='introwrapper-top'>

        <div className="introwrapper-top-left">

          <div className="fakeclass"></div>
          <div className="introwrapperleft-top-top">
            <img src={HOMEintro3img} alt="" className="introwrapperleft-top-top-img" />
          </div>
          <div className="introwrapperleft-top-bottom">
            <div className="introwrapperleft-top-bottom-left">
              <span className='introwrapperleft-top-bottom-left-text'>
              IT’S TRUE.
              </span>
              <span className='introwrapperleft-top-bottom-left-text '>
              WHISKY GETS
              </span>
              <span className='introwrapperleft-top-bottom-left-text'>
               BETTER  WITH AGE.
              </span>
            </div>
            <div className="introwrapperleft-top-bottom-right">
              <img src={intro4logo} alt="" className="introwrapperleft-top-bottom-right-logo" />
            </div>
          </div>
        </div>
        <div className="introwrapper-top-right">
          <div className="introwrapper-top-right-top">
            <div className="introwrapper-top-right-top-b-image1" id='introwrapper-top-right-top-b-image1'>
              <img src={intro2imagefingure} className='introwrapper-top-right-top-b-img1' id='introwrapper-top-right-top-b-img1' alt="" />
            </div>
            <div className="introwrapper-top-right-top-b-image2">
              <img src={intro2sprialimage} className="introwrapper-top-right-top-b-img2" alt="" />
            </div>

            <div className="introwrapper-top-right-top-top-blank"></div>
            <div className="introwrapper-top-right-top-top-black"></div>
          </div>
          <div className="introwrapper-top-right-top-bottom">
            <div className="introwrapper-top-right-top-bottom-image">
              <img src={intro2smallimage} className="introwrapper-top-right-top-bottom-img" id='introwrapper-top-right-top-bottom-img' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="introwrapper-bottom">
        <div className="introwrapper-bottom-left"></div>
        <div className="introwrapper-bottom-right">
          <span className='introwrapper-bottom-right-text1'>
          The family previously owned distilleries in the princely states of Jawhar and
          </span>
          <span className='introwrapper-bottom-right-text1'>
          Akkalkot in the 1920s till India’s Independence, when  prohibition was announced.
          </span>
          <span className='introwrapper-bottom-right-text1'>
            Decades later, after the easing of prohibition in India, the family  restarted the
          </span>
          <span className='introwrapper-bottom-right-text1'>
           distilling business. Quite obviously, our vast and varied experience over the years has
          </span>
          <span className='introwrapper-bottom-right-text1'>
            honed our skills and helped us gain a profound understanding of malts and magic.
          </span>
          <span className='introwrapper-bottom-right-text1'>
          With the 4th generation taking from the previous, there is a new-found ambition
          </span>
          <span className='introwrapper-bottom-right-text1'>
          in the air. Given our vast expertise, we are now boldly venturing into uncharted territory
          </span>
          <span className='introwrapper-bottom-right-text1'>
            All in all, we are unafraid to walk the path less taken and to carve our own niche in the world of whiskies.
            </span>
            <span className='introwrapper-bottom-right-text1'>
            We know that the one thing that makes a long, tiring journey worthwhile is the warm
feeling of coming home.

            </span>
            <br />
            <span className='introwrapper-bottom-right-text1'>
            After crafting sprits which speak our story, we are home.
            </span>
           
        </div>
      </div>

    </div>
  )
}

export default Homeintro2