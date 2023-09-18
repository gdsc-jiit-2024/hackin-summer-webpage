import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Attraction from './components/Attraction/Attraction';
import Mainpage from './components/Mainpage/Mainpage';
import About from './components/About/About';
import Countdown from './components/countdown/Countdown';
import Track from "./components/Tracks/Tracks";
import Form from './components/Form/Form';
function App() {
    createRoot(document.getElementById('root')).render(
      <div className="App">
        <Mainpage />
        <About />
        <Countdown />
        <Track />
        <Form />
      </div>
    );
}

export default App;
