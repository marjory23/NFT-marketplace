import logo from './risidio_logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Cart from './pages/Cart';
import CollectionDetails from'./pages/CollectionDetails';
import Contact from'./pages/Home';
import Home from'./pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection-details' element={<CollectionDetails />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
