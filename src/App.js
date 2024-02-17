import './App.css';
import Home from './pages/homepages/Home';
// import Manifesto from './components/manifesto/Manifesto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cocktails from './components/cocktails/cocktails';
import Recipe from './components/Recipe/berry';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithoutNav from './layout/header/withoutNav';
import WithNav from './layout/header/withNav';
import Legends from './components/Legends/legends';
import Whisky from './pages/wiskymain/Wiskymain';
import Exotic from './pages/exotic/Exotic';
import Rare from './pages/rare/Rare';
import Smoky from './pages/smoky/Smoky';
import { Outlet } from 'react-router';
import { useContext } from 'react';
import AuthContext from './utility/Usecontext';
import Contdition from './components/condition/contdition';
import Privacy from './components/privacy/privacy';
import ScrollToTop from './layout/scroll/scroll';
import COOKIE from './components/cooky/cooky';
import Tails from './components/Recipe/tails';
import Highball from './components/Recipe/highball';
import OldFashion from './components/Recipe/oldfashion';
import Floral from './components/Recipe/floral';
import Stinger from './components/Recipe/stinger';
import Eden from './components/Recipe/eden';
import Berry from './components/Recipe/berry';
import Mizuwari from './components/Recipe/mizuwari';
import OldFashionsmoky from './components/Recipe/oldfashionsmoky';
import Footerchange from './layout/header/footerchange';



function App() {

  const {  } = useContext(AuthContext)

  return (
    <>
      <Router>
        <Outlet />
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route element={<Footerchange/>}>
          <Route path="/Cocktails" element={<Cocktails />} />
          </Route>
          <Route element={<WithNav />}>
            
            <Route path="/Recipe" element={<Recipe />} />
            <Route path="/Smoky-Tails" element={<Tails />} />
            <Route path="/Exotic-Highball" element={<Highball/>}/>
            <Route path='/Rare-Old-Fashioned' element={<OldFashion/>}/>
            <Route path='/Smoky-Old-Fashioned' element={<OldFashionsmoky />}/>
            <Route path="/Legends" element={<Legends />} />
            <Route path="/Whisky" element={<Whisky />} />
            <Route path="/Exotic" element={<Exotic />} />
            <Route path="/Rare" element={<Rare />} />
            <Route path="/Smoky" element={<Smoky />} />
            <Route path='/Rare-Floral' element={<Floral/>}/>
            <Route path='/Exotic-Stinger' element={<Stinger /> }/>
            <Route path='/Smoky-Eden' element={<Eden/>}/>
            <Route path='/Rare-Brerry' element={<Berry/>}/>
            <Route path='/Exotic-Mizuwari' element={<Mizuwari/>}/>
            <Route path='/Terms-and-Conditions' element={<Contdition />} />
            <Route path='/Privacy-Policy' element={<Privacy />} />
            <Route path='/Cookie-Policy' element={<COOKIE />} />
          </Route>

        </Routes>
        <ScrollToTop />
      </Router>
    </>

  );
}

export default App;
