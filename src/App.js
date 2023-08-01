import './App.css';
import About from './components/About';
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <>


      <Router>

        <Routes>

          <Route path='/' element={<Home/>} />

          <Route path='/about' element={<About />} />

          <Route path='/services' element={<Services/>} />

          <Route path='/contact-us' element={<Contact/>} />

        </Routes>

      </Router>

    </>
  );
}

export default App;
