import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Skills from './pages/skills';
import Education from './pages/education';
import Experience from './pages/experience';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
