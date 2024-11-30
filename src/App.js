import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import PageNotFound from './pages/page-not-found/PageNotFound.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/page-not-found' />} />
      </Routes>
    </Router>
  );
}

export default App;
