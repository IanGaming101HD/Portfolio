import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

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
