import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Cart from './Cart.jsx';
import './assets/style.scss';
import Navbar from './assets/components/Navbar';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';

function App() {

  let [cartProducts, setCartProducts] = useState([])

  return (
    <Router>
      <div className="container">
        <Navbar cartProducts={cartProducts}/>
        </div>
        <Routes>
          <Route path="/cart" element={<Cart cartProducts={cartProducts}/>} />
          <Route path='/' element={<Main cartProducts={cartProducts} setCartProducts={setCartProducts}/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
