import React, { useContext } from 'react'
import "./Footer.css";

import footercock from "../../assets/footercock.png";
import footerlogo from "../../assets/image/footer/footerlogo.png";
import AuthContext from '../../utility/Usecontext';
import fb from '../../assets/image/footer/fb.svg';
import fbhover from '../../assets/image/footer/fbhover.svg';
import insta from '../../assets/image/footer/insta.svg';
import instahover from '../../assets/image/footer/instahover.svg';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Suspense } from 'react';



const Footer = () => {
    const { manifesto, setManifesto  } = useContext(AuthContext)
    const location = useLocation();
   
    
    const onmouseover = ()=>{
        if(location.pathname === "/"){
            document.getElementById('mouseover').style.cursor="pointer";
        }
        else{
            document.getElementById('mouseover').style.cursor="auto";  
        }
    }
    const showMani = () => {
       
        if(location.pathname === "/"){
          
        setManifesto(true);
        document.getElementById('homeDiv').classList.add('background-blur');
        document.getElementById('homeDiv').classList.add('remove-scroll');
        //document.getElementById('homeDiv').classList.add('restrictHeight');
        var page = document.getElementsByTagName('body')[0];
        page.classList.add('noscroll');
    }
    else{
        setManifesto(false)
    }
        
    }
    
    return (
        <div className='footer' id='footerDiv'>
            <div className="footer-wrapper">
                <div className="footer-wrapper-up">
                        
                        <div className="footer-wrapper-logo-wrap" >
                            <img src={footerlogo}  alt=""  className="footer-wrapper-logoimg" />
                        </div>
                        
                        <div className="footer-top">
                            <div className="footer-top-cockimage">
                                 <img src={footercock} alt="" className="footer-top-cockimg" />
                            </div>
                        </div>
                        <div className="footer-top-blank"></div>
                
                </div>
               
               
                <div className="footer-bottom">

                    <div className="footer-bottom1">
                        <div className="footer-bottom1-fb-btn">
                            <img src={fb} alt="" className="footer-bottom1-fb" />
                            <img src={fbhover} alt="" className="footer-bottom1-fbhover" />
                            </div>
                            <div className="footer-bottom1-insta-btn">
                        <img src={insta} alt="" className="footer-bottom1-insta" />
                        <img src={instahover} alt="" className="footer-bottom1-instahover" />
                        </div>
                        
                    </div>
                    <div className="footer-bottom2">
                        <Link to="/Terms-and-Conditions"><span className='footer-bottom2-text1'>TERMS & CONDITIONS</span></Link>
                        <Link to="/Privacy-policy"><span className='footer-bottom2-text1'>PRIVACY POLICY</span></Link>
                        <Link to="/Cookie-Policy"><span className='footer-bottom2-text1'>COOKIE POLICY</span></Link>
                    </div>
                    <div className="footer-bottom3">
                        <span className='footer-bottom3-text2'id='mouseover' onMouseOver={onmouseover} onClick={showMani}>A DIFFERENT KIND OF CRAZY.</span>
                    </div>
                    <div className="footer-bottom4">
                        <span className='footer-bottom4-text3'>Content to be shared with those over the legal drinking age only.</span><span className='footer-bottom4-text3'> Please enjoy Crazy Cock responsibly.</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer