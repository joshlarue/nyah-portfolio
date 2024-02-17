import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import claptop from './assets/claptop.svg';
import clapbottom from './assets/clapbottom.svg';
import { useState } from 'react';

function App() {
  const [transition, setTransition] = useState(false);
  const [transitionBack, setTransitionBack] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setTransition(true);
    } else if (transition == true && window.scrollY < 100) {
      setTransitionBack(true);
      setTransition(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  
  return (
    <>
      <div className="app-bkg"></div>
      <div className="app-bkg-lower"></div>
      <div className="app-inner">
        <div className="app-header">
          <Header transition={transition} transitionBack={transitionBack} />
          <div className="clapper">
            <img className={ transition ? "claptop active" : transitionBack ? "claptop na" : "claptop" } src={claptop} />
            <img className="clapbottom" src={clapbottom} />
          </div>
        </div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </>
  )
}

export default App;