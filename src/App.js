import './App.css';
import About from './components/About/About';
import Mainpage from './components/Mainpage/Mainpage.jsx';
import Timeline from './components/Timeline/Timeline';
import Tracks from './components/Tracks/Tracks';
import Form from './components/Form/Form';
function App() {
  return (
    <div className="App">
      <h1>
        App
      </h1>
      <Mainpage />
      <About />
      <Tracks />
      <Timeline />
      <Form />
    </div>
  );
}

export default App;
