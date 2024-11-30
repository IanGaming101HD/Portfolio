import './PageNotFound.css';
import Header from '../../components/header/Header.jsx';

function PageNotFound() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='error-header'>404</h1>
        <h2 className='error-info'>Page not found</h2>
      </div>
    </>
  );
}

export default PageNotFound;
