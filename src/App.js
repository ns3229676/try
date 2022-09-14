import './App.css';
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import { Fragment,useEffect} from 'react';
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

import Footer from './Footer'

function App() {
  return (
    <div className="App">
      

    <Routes>
    <Route  path="/" element={<Fragment> <Header />  <Home/> <Footer/> </Fragment>} />
    <Route  path="/about" element={<Fragment> <Header />  <About/> <Footer/> </Fragment>} />
    <Route  path="/contact" element={<Fragment> <Header />  <About/> <Footer/> </Fragment>} />
    <Route  path="/services" element={<Fragment> <Header />  <About/> <Footer/> </Fragment>} />
    
    </Routes>
    
    </div>
    );
  }
  
  export default App;
  
  // <Route  path="/about" element={<Fragment> <Header /> <About/> <Footer/> </Fragment>} />
  // <Route  path="/donation" element={<Fragment> <Header /> <Services/> <Footer/> </Fragment>} />
  // <Route  path="/contact" element={<Fragment> <Header /> <Contact/> <Footer/> </Fragment>} />