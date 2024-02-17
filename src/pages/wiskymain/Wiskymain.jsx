import React from 'react'
import "./Wiskymain.css";
import Wiskymainintro from "../../components/wiskymainintro/Wiskymainintro.jsx";
 import Wiskymainline from "../../components/wiskymainline/Wiskymainline.jsx";
import Wiskymainintro1 from '../../components/wiskymainintro1/Wiskymainintro1';


const Wiskymain = () => {
  return (
    <div className='wiskymain'>
        <Wiskymainintro/>
       <Wiskymainline/>
        <Wiskymainintro1/>
    </div>
  )
}

export default Wiskymain
