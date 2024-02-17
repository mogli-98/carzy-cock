import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Landing.css";
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';
import Landbackground from '../../assets/Landbackground.png';
import mobilelandingbg from '../../assets/mobilelandingbg.webp';

const Landing = () => {
  const location = useLocation();
  const [landingOn, setLandingOn] = useState(true);
  const [cookies, setCookie] = useCookies(['user']);






















  
  const [isClickable, setIsClickable] = useState(true);
  const [checkAge, setCheckAge] = useState("no");
  const closePopup = () => {
    if(isClickable) {
      setLandingOn(false);
      document.getElementById('homeDiv').classList.remove('background-blur');
      document.getElementById('homeDiv').classList.remove('remove-scroll');
      document.getElementById('homeDiv').classList.remove('axies');
      document.getElementById('homeDiv').classList.remove('restrictHeight');
    }
  }

  const closePopupBut = () => {
    if(isClickable) {
      setLandingOn(false);
      setCookie('isLegalAge', 'yes', { path: '/' });
      setCheckAge("yes");
      document.getElementById('homeDiv').classList.remove('background-blur');
      document.getElementById('homeDiv').classList.remove('remove-scroll');
      document.getElementById('homeDiv').classList.remove('axies');
      document.getElementById('homeDiv').classList.remove('restrictHeight');
    }
  }

  const notLegalAge = () => {
    //setIsClickable(false);
    document.getElementById('notLegalAge').classList.remove('d-none');
  }
  useEffect(() => {
    //console.clear();
    //console.log("url -> ",window.location.pathname);
    console.log("coo", cookies);
    if(cookies.isLegalAge || checkAge === "yes") {
      if(cookies.isLegalAge === "yes") {
        closePopup();
      } else {
        if(checkAge === "yes") {
          closePopup();
        } else {
          setLandingOn(true);
        }
      }
    } else {
      
      setLandingOn(true);
      document.getElementById('homeDiv').classList.add('background-blur');
      document.getElementById('homeDiv').classList.add('remove-scroll');
      if(window.location.pathname != "/") {
        document.getElementById('homeDiv').classList.add('restrictHeight');
      }
    }

    if(window.location.pathname == "/Terms-and-Conditions" || window.location.pathname == "/Privacy-policy") {
      closePopup();
    }
  }, [location.pathname]);
  
  return (

    <>
      {landingOn && <>

        <div className='l-wrapper'>
          <form className='l-agewrapper' onSubmit={closePopup}>
            <div className="l-agewrapper-backgroundimage">
            <img src={mobilelandingbg} alt="" className="mobileview-background" />  
          <img src={Landbackground} alt="" className="l-agewrapper-backgroundimage-img" />
          <div className="l-wrapper-blank"></div>
            <div className="l-alltext-warpper">
                    <div className={`checkLegalAge`} id='checkLegalAge'>
                        <div className='l-title'>
                          <p className='l-title-text1'>ARE YOU OF LEGAL</p>
                           <p className='l-title-text2'>DRINKING AGE ?</p>
                        </div>
                        <div className='l-field'>
                           <span className='landing-btn-exotic' id='landing-btn-exotic-yes' onClick={closePopupBut}>YES</span>
                           <span className='landing-btn-exotic' id='landing-btn-exotic-no' onClick={notLegalAge} >NO</span>
                       </div>
                  </div>
                  <div className='notLegalAge d-none' id="notLegalAge">
                    <p>You are not old enough to view this site.</p>
                 </div>
                  <div className='l-footer'>
                      <div className='footer-text1'>
                        <div className='l-footer1'>BY ENTERING THIS SITE, YOU ARE AGREE TO  <span className="landing-1stline"> OUR &nbsp; <div className='l-footer1-text'> <Link to="/Terms-and-Conditions" className='blackColor'>TERM & CONDITION</Link> </div> &nbsp;AND &nbsp;<div className='l-footer1-text'> <Link to='/Privacy-policy' className='blackColor'>PRIVACIY POLICY</Link></div></span></div>
              </div>
              <p className='l-footer2'>BY CONTINIUNG TO BROWSE THIS SITE, YOU ARE AGREENING TO ACCEPT</p>
              <p className='l-footer3'>OUR USE OF COOKIES, READ OUR PRIVACY POLICY TO LEARN MORE</p>
              <div className="mobileview-text">
                <span className="text1">BY CONTINIUNG TO BROWSE THIS SITE, YOU</span>
                <span className="text2">ARE AGREENING TO ACCEPT OUR USE OF COOKIES,</span>
                <span className="text3">READ OUR PRIVACY POLICY TO LEARN MORE</span>
              </div>
            </div>
            </div>
            </div>
           
          </form>
          
        </div></>}




    </>
  );
}

export default Landing