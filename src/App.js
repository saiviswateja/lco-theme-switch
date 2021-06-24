import './App.css';
import HeroSection from './Component/HeroSection';
import ThemeContext from './Context/ThemeContext';
import Header from './Component/Header';
import { useState } from 'react';

function App() { 
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header/>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
