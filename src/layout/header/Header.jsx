//importing bootstrap 5 css
import React, { useEffect, useState ,useContext ,useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Nav } from 'react-bootstrap';
import './Header.css';
import navarcock from "../../assets/navarcock.png";
import logogif from "../../assets/logogif.gif";
import aftertext88 from "../../assets/image/cocktails/aftertext88.png"
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import AOS from 'aos';

import 'aos/dist/aos.css';
import AuthContext from '../../utility/Usecontext';
import { border } from '@mui/system';


function Header() {
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [navlinks, setnavLinks] = useState();
  const [ismenushow, setismenuShow] =useState(false);
  
  const{setContact, contact, manifesto, setManifesto  }=useContext(AuthContext)

  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])
  const startblur = (e) => {
    e.preventDefault();
    setContact(true);
    document.getElementById('homeDiv').classList.add('background-blur');
    document.getElementById('homeDiv').classList.add('remove-scroll');
    document.getElementById('homeDiv').classList.add('restrictHeight');
  }

  const showMani = (e) => {
      e.preventDefault();
      setManifesto(true);
      document.getElementById('homeDiv').classList.add('background-blur');
      document.getElementById('homeDiv').classList.add('remove-scroll');
      //document.getElementById('homeDiv').classList.add('restrictHeight');
      var page = document.getElementsByTagName('body')[0];
      page.classList.add('noscroll');
      
  }
  const showMenu = (e) => {
    e.preventDefault();
    document.getElementById('megamneu1').classList.add('show');
    document.getElementById('menuContent').classList.add('show');
    document.getElementById('menuContent').setAttribute("data-bs-popper", "static");
    // document.getElementsByTagName("body")[0].classList.add('navbar-stop')

  }
  const showBlur = (e) => {
    e.preventDefault();
    if(ismenushow) {
      setismenuShow(false);
      document.getElementById('homeDiv').classList.remove('remove-scroll');
      document.getElementById('homeDiv').classList.remove('restrictHeight');
      document.getElementById('navlogocock').classList.remove('navloogo');
      document.getElementById('navlogocock').classList.add('navloogo2');
      document.getElementById('opennavbarr').classList.remove('buttonforopen');
      document.getElementById('navbarlogoircle').classList.add('loGo');
      document.getElementById('navbarlogoircle').classList.remove('loGo2');
      document.getElementById('opennavbarr').classList.add('buttonforclose');
      document.getElementById('threeLine').classList.remove('d-none');
      document.getElementById('croseline').classList.add('d-none');
    
    } else {
      setismenuShow(true);
      document.getElementById('homeDiv').classList.add('remove-scroll');
      document.getElementById('homeDiv').classList.add('restrictHeight');
      document.getElementById('navlogocock').classList.add('navloogo');
      document.getElementById('navlogocock').classList.remove('navloogo2');
      document.getElementById('opennavbarr').classList.add('buttonforopen');
      document.getElementById('navbarlogoircle').classList.remove('loGo');
      document.getElementById('opennavbarr').classList.remove('buttonforclose');
      document.getElementById('navbarlogoircle').classList.add('loGo2');
      document.getElementById('threeLine').classList.add('d-none');
      document.getElementById('croseline').classList.remove('d-none');
      setOpen(!open);
    }
    
  }

  const hideMenu = (e) => {
    //e.preventDefault();
    document.getElementById('megamneu1').classList.remove('show');
    document.getElementById('menuContent').classList.remove('show');
  }
  const collapseRef = useRef(null);

  const hideBars = () => {
    collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };
  const location = useLocation();
  useEffect(() => {
    //hideMenu();
  }, [location.pathname]);
 
  return (
      <div style={{ height: "86px", backgroundColor: "black" }}>
        <nav className="navbar  navbar-expand-md " variant="dark" style={{ height: "64px", backgroundColor: "black", borderBottom: "0.5px solid #C2B59B" , width: '100%' }} collapseOnSelect
    >
          <div className="container-fluid" >
            <a href="/#" className="navbar-brand font-weight-bold ">
              <Link to='/'><img src={navarcock} height={72} alt="" className='navloogo2' id='navlogocock' style={{ marginBottom: "-10px" }} /></Link></a>
            <button className="navbar-toggler buttonforclose faq" type="button" id='opennavbarr' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={showBlur} >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list threeline" viewBox="0 0 16 16" id='threeLine'>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x-lg croseline d-none" viewBox="0 0 16 16" id='croseline'>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </button>
            <div className=' container-fluid justify-content-center d-none d-md-block d-lg-block d-sm-none'>
                <ul className="navbar-nav mx-auto justify-content-center" style={{ marginTop: "63px", }}>
                  {/* <li>
                      <Link to="/Legends" className='navvlink '>THE LEGEND OF THE CRAZY COCK</Link>
                    </li> */}
                  <li className="nav-item dropdown megamenu2 " onMouseEnter={showMenu} onMouseLeave={hideMenu}>
                    <Link to='/Whisky' id="megamneu1" aria-expanded="false"
                      className={`nav-link dropdown-toggle   dropdown-toggle navvlink  `} >
                      WHISKY
                    </Link>

                    <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu  dropp" id='menuContent' style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>

                      {/* <div className="container-fluid dropdown-menu2 "  style={{ marginTop: "-10px" }}> */}


                      
                      <div className=" dropdown-menu2  dropp" show={showDropdown} style={{ backgroundColor: "#000", marginTop: "-8px", paddingLeft: "0px", paddingRight: "0px", width: "100%", marginLeft: "0px", marginRight: '0px'}}>
                     
                        <div style={{ display: "flex", justifyContent: 'center ' }}>
                          {/* <div style={{ width: '20%', border: "1px solid white",textAlign:"left"  }} > */}
                          
                          <div >
                            {/* <ul className='  dropp justify-content-center' > */}
                            <div style={{ width: '24rem' }}>
                              <ul className='dropp'>
                                <li><Link to="/Exotic">CRAZY COCK EXOTIC</Link></li>
                                <li style={{paddingLeft:"5px"}}><Link to="/Rare">CRAZY COCK RARE</Link></li>
                                <li><Link to="/Smoky">CRAZY COCK SMOKY</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                      {/* </div> */}                 
                  </li>
                  <li className="nav-item ">  <Link to='/Cocktails' className=' navvlink'>CRAZY COCKTAILS</Link>
                  </li>
                  <li className="nav-item ">  <Link to="#pricing" className='navvlink' onClick={startblur}>CONTACT US </Link>

                  </li>
                </ul>
               
              </div>
            <div id="navbarSupportedContent" className="collapse navbar-collapse "  in={open}>

              
              
              <div className="row small-nav  d-sm-block d-md-none d-lg-none " style={{ paddingTop: "60px",textAlign:"center" }}>
             <div className='justify-content-center' style={{textAlign:'center'}}>
                     {/* <Link to="/Legends"  className='text-light'><h1> THE LEGEND OF <br /> THE CRAZY COCK </h1></Link> */}
                     <Link to='/Whisky'
                               className="nav-link"
                               activeClassName="active"
                               onClick={hideBars}
                     ><h1> WHISKY</h1></Link>
                    <hr  className='header-hr'/>
                    <p> <Link to="/Exotic"
                    className="nav-link"
                    activeClassName="active"
                    onClick={hideBars}
                    >CRAZY COCK EXOTIC</Link></p>
                    <hr  className='header-hr'/>
                    <p> <Link to="/Rare"
                    className="nav-link"
                    activeClassName="active"
                    onClick={hideBars}
                    >CRAZY COCK RARE</Link></p>
                    <hr  className='header-hr'/>
                    <p> <Link to="/Smoky"
                    className="nav-link"
                    activeClassName="active"
                    onClick={hideBars}
                    >CARZY COCK SMOKY</Link></p>
                    <hr  className='header-hr'/>
                    <Link to='/Cocktails'
                    className="nav-link"
                    activeClassName="active"
                    onClick={hideBars}
                    ><h1>CRAZY COCOKTAILS</h1></Link>
                    <h1 onClick={startblur}> CONTACT US</h1>
                    <div className="heeaderr-bottom1">
                      <div className="heeaderr-bottom1-item">
                        <FaFacebookF className='headitems' />
                      </div>
                      <div className="heeaderr-bottom1-item">
                        <FaInstagram className='headitems' />
                      </div>

                    </div>
                    <span style={{cursor:'pointer'}} onClick={showMani}>A DIFFERENT KIND OF CRAZY</span>
          

             </div>
              
                <img src={aftertext88} alt="" className='header-img' />
              </div>
            </div>
            
            <div  href="#memes" className=''>
                <img src={logogif} alt="" height={100} className='loGo ' id='navbarlogoircle' />
              </div>
          </div>


        </nav>
      </div>

  );
}

export default Header;