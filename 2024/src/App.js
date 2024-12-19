import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FirstSection from './components/sections/FirstSection';
import SecondSection from './components/sections/SecondSection';
import ThirdSection from './components/sections/ThirdSection';
import BridgeSection from './components/sections/BridgeSection';
import NewSection from './components/sections/NewSection';
import SpacerSection from './components/sections/SpacerSection';

import Footer from './components/sections/Footer';
import SocialLinks from './components/sections/SocialLinks';

function App() {
  return (
    <BrowserRouter basename="/2024">
      <div className="App">
        <FirstSection />
        <ThirdSection />
        <SpacerSection />
        <BridgeSection />
        <SecondSection />
        <NewSection />
        <SpacerSection />
        <Footer />
        <SocialLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;