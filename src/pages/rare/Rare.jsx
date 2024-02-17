import React, { useEffect } from 'react';
import Raresection1 from '../../components/raresection1/Raresection1';
import Raresection2 from '../../components/raresection2/Raresection2';
import Raresection3 from '../../components/raresection3/Raresection3';
import Raresection4 from '../../components/raresection4/Raresection4';

import './Rare.css';

const Rare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Raresection1/>
      <Raresection2/>
      <Raresection3/>
      <Raresection4/>
      
    </div>
  )
}

export default Rare