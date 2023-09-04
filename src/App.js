import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Attraction from './components/Attraction/Attraction';
import Mainpage from './components/Mainpage/Mainpage';
import About from './components/About/About';
import Countdown from './components/countdown/Countdown';
function App() {
    createRoot(document.getElementById("root")).render(

    <div className="App">
      <Mainpage />
      <About />
      <Suspense fallback={null}>
        <Attraction />
      </Suspense>
      <Countdown />
    </div>
  );
}

export default App;
