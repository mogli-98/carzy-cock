import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Homeintro01 from './components/home-intro-0&1/Homeintro01';
import Homeintro3 from './components/home-intro-3/Homeintro3';
import Homeintro4 from './components/home-intro-4/Homeintro4';

import Footer from './layout/footer/Footer';
import Home from './pages/homepages/Home';
import bgcocktailmain from "../src/assets/bgcocktailmain.jpg";
import { Usecontext } from './utility/Usecontext';
import { CookiesProvider } from 'react-cookie';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usecontext>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Usecontext>
  </React.StrictMode>
);

