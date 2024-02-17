import React, { useContext, useEffect } from 'react'
import "./Manifesto.css";
import manifestologo from "../../assets/image/manifesto/manifestologo.png";
import cockimg from "../../assets/image/manifesto/cockimg.png";
import { Close } from '@mui/icons-material';
import AuthContext from '../../utility/Usecontext';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Manifesto = () => {
    const { offset, manifesto, setManifesto  } = useContext(AuthContext)
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const closeMani = () => {

        setManifesto(false);
        document.getElementById('homeDiv').classList.remove('background-blur');
        document.getElementById('homeDiv').classList.remove('remove-scroll');
        //document.getElementById('homeDiv').classList.remove('restrictHeight');
        var page = document.getElementsByTagName('body')[0];
        page.classList.remove('noscroll');
    }

    useEffect(() => {
        if (manifesto === true) {
            // var offsets = document.getElementById('footerDiv').offsetTop;
            const curOffset = offset + 10;
            console.log("offset", curOffset);
            document.getElementById("manifestoDiv").style.top = curOffset + "px";
        }
    }, [manifesto])
    return (
        <>
            {manifesto ? (
                <div className='manifesto' id="manifestoDiv" data-aos="zoom-in">
                    <div className="manifesto-wrapper">
                        <div className="manifesto-wrapper-border">
                            <div className="manifesto-wrapper-inside">
                                <div className="manifesto-wrapper-inside-cock" >
                                    <img src={cockimg} alt="" className="manifesto-wrapper-inside-cockimg" />
                                </div>
                                <div className="manifesto-wrapper-inside0">
                                    <Close sx={{
                                        color: "white",
                                        marginTop: "10px",
                                        marginRight: "10px",
                                    }}
                                        onClick={closeMani}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                                <div className="manifesto-wrapper-inside1">
                                    <span className="manifesto-text">
                                        YOU ARE NOT CUT OUT FOR THE COSY COMFORT
                                    </span>
                                    <span className="manifesto-text">
                                        OF THE TRIED AND TESTED. YOU ARE DRIVEN BY A
                                    </span>
                                    <span className="manifesto-text">
                                        DEEP YEARNING FOR THE THRILL OF ADVENTURE.
                                    </span>
                                </div>
                                <div className="manifesto-wrapper-inside2">
                                    <span className="manifesto-text">
                                        YOU ARE UNAFRAID TO BLAZE NEW TRAILS AND
                                    </span>
                                    <span className="manifesto-text">
                                        TO CHART A NEW COURSE IN YOUR LIFELONG QUEST
                                    </span>
                                    <span className="manifesto-text">
                                        OF THE RARE AND EXTRAORDINARY.
                                    </span>
                                </div>
                                <div className="manifesto-wrapper-inside3">
                                    <span className="manifesto-text">
                                        YOU ARE A PURVEYOR OF THE FINER THINGS IN LIFE,
                                    </span>
                                    <span className="manifesto-text">
                                        A CURATOR OF ECLECTIC EXPERIENCES AND
                                    </span>
                                    <span className="manifesto-text">
                                        A DIRECTOR OF EXTRAORDINARY MOMENTS IN A
                                    </span>
                                    <span className="manifesto-text">
                                        BLOCKBUSTER CALLED LIFE.
                                    </span>
                                </div>
                                <div className="manifesto-wrapper-inside4">
                                    <span className="manifesto-text">
                                        YOUR TASTES ARE SIMPLE.
                                    </span>
                                    <span className="manifesto-text">
                                        YOU ONLY WANT THE FINEST.
                                    </span>
                                </div>
                                <div className="manifesto-wrapper-inside5">
                                    <span className="manifesto-text">
                                        HERE’S A TOAST TO YOU.
                                    </span>
                                </div>
                                <div className="manifesto-wrapper-inside6">
                                    <div className="manifesto-logo">
                                        <img src={manifestologo} alt="" className="manifesto-logo-img" />
                                    </div>
                                    <span className="manifesto-text1">
                                        a different kind of crazy.
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            ) : null}
        </>
    )
}

export default Manifesto