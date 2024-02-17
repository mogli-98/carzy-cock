import React from 'react'
import "./Bgfooter.css";
import whiskyfootercock from "../../assets/image/footer/whiskyfootercock.png";
import footerlogo from "../../assets/image/footer/footerlogo.png";
import AuthContext from '../../utility/Usecontext';
import fb from '../../assets/image/footer/fb.svg';
import fbhover from '../../assets/image/footer/fbhover.svg';
import insta from '../../assets/image/footer/insta.svg';
import instahover from '../../assets/image/footer/instahover.svg';
import { Link } from 'react-router-dom';
import footerbg from "../../assets/image/footer/footerbg.png"
import { useContext } from 'react';
import Manifesto from "../../components/manifesto/Manifesto.jsx";

const Bgfooter = () => {
    const { manifesto, setManifesto} = useContext(AuthContext)

    const showMani = (e) => {
        console.log(manifesto)
        e.preventDefault();
        setManifesto(true);
        document.getElementById('homeDiv').classList.add('background-blur');
        document.getElementById('homeDiv').classList.add('remove-scroll');
        //document.getElementById('homeDiv').classList.add('restrictHeight');
        var page = document.getElementsByTagName('body')[0];
        page.classList.add('noscroll');
        
    }
  return (<>
    
    <div className='bgfooter' id='footerDiv'>
    <div className="bgfooter-wrapper">
        <div className="bgfooter-wrapper-top">
            <div className="bgfooter-wrapper-top-up">
                <div className="bgfooter-wrapper-top-up-cock">
                    <img src={whiskyfootercock} alt=""  className='bgfooter-wrapper-top-up-cock-img'/>
                </div>
                <div className="bgfooter-wrapper-top-item1">
                    <div className="bgfooter-wrapper-top-item1-bgimage">
                        <img src={footerbg} alt="" className="bgfooter-wrapper-top-item1-bgimg" />
                    </div>
                    
                </div>
                <div className="bgfooter-wrapper-top-item2">
                </div>
            </div>
            <div className="bgfooter-wrapper-top-down">
            <div className="bgfooter-wrapper-top-down-logo">
                <img src={footerlogo }alt="" className="bgfooter-wrapper-top-down-logo-img" />
            </div>
            </div>
               
              
              
            
        
        </div>
       
       
        <div className="bgfooter-bottom">

            <div className="bgfooter-bottom1">
                <div className="bgfooter-bottom1-fb-btn">
                    <img src={fb} alt="" className="bgfooter-bottom1-fb" />
                    <img src={fbhover} alt="" className="bgfooter-bottom1-fbhover" />
                    </div>
                    <div className="bgfooter-bottom1-insta-btn">
                <img src={insta} alt="" className="bgfooter-bottom1-insta" />
                <img src={instahover} alt="" className="bgfooter-bottom1-instahover" />
                </div>
                
            </div>
            <div className="bgfooter-bottom2">
                <Link to="/Terms-and-Conditions"><span className='bgfooter-bottom2-text1'>TERMS & CONDITIONS</span></Link>
                <Link to="/Privacy-policy"><span className='bgfooter-bottom2-text1'>PRIVACY POLICY</span></Link>
                <Link to="/Cookie-Policy"><span className='bgfooter-bottom2-text1'>COOKIE POLICY</span></Link>
            </div>
            <div className="bgfooter-bottom3">
                <span className='bgfooter-bottom3-text2' style={{cursor:'pointer'}} onClick={showMani}>A DIFFERENT KIND OF CRAZY.</span>
            </div>
            <div className="bgfooter-bottom4">
                <span className='bgfooter-bottom4-text3'>Content to be shared with those over the legal drinking age only.</span><span className='footer-bottom4-text3'> Please enjoy Crazy Cock responsibly.</span>
            </div>
        </div>
    </div>
</div></>
  )
}

export default Bgfooter