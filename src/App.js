import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-header">
        <Header/>
      </div>
      <div className="About">
        <About/>
      </div>
      <div className="work">
        <Work/>
      </div>
      <div className="Contact">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
