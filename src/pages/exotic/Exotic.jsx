import React, { useEffect } from 'react'
import Exoticsection3 from '../../components/exoticsection3/Exoticsection3.jsx';
import Footer from "../../layout/footer/Footer.jsx";
import Exoticsection1 from '../../components/exoticsection1/Exoticsection1.jsx';
import Exoticsection2 from '../../components/exoticsection2/Exoticsection2.jsx';
import Exoticsection4 from '../../components/exoticsection4/Exoticsection4.jsx';


const Exotic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Exoticsection1/>
      <Exoticsection2/>
      <Exoticsection3/>
      <Exoticsection4/>
    </div>
  )
}

export default Exotic