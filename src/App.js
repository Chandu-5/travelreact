import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Services from './routes/Services';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </div>
  );
}

export default App;
