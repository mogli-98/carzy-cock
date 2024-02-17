import React, { useEffect } from 'react'
import "./Smoky.css";
import Smokysection1 from "../../components/smokysection1/Smokysection1.jsx";
import Smokysection2 from '../../components/smokysection2/Smokysection2';
import Smokysection3 from '../../components/smokysection3/Smokysection3';
import Smokysection4 from '../../components/smokysection4/Smokysection4';

const Smoky = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <Smokysection1/>
    <Smokysection2/>
    <Smokysection3/>
    <Smokysection4/>
    </div>
  )
}

export default Smoky