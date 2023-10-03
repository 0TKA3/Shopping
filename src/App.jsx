import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Cart from './Cart.jsx';
import './assets/style.scss';
import Navbar from './assets/components/Navbar';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';




function App() {
  
  let [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('storageCart')) || [])

  return (
    <Router>
      <div className="container">
        <Navbar cartItems={cartItems}/>
        </div>
        <Routes>
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path='/shopping/' element={<Main cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
