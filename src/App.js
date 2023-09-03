import './App.css';
import About from './components/About/About';
import Mainpage from './components/Mainpage/Mainpage.jsx';
import Timeline from './components/Timeline/Timeline';
import Tracks from './components/Tracks/Tracks';
import Form from './components/Form/Form';
import Countdown from './components/countdown/Countdown';
function App() {
  return (
    <div className="App">
      <Mainpage />
      <About />
      <Countdown />
      {/* <Tracks />
      <Timeline />
      <Form /> */}
    </div>
  );
}

export default App;
