import { Link } from 'react-router-dom';
import { useState } from 'react';
import emptyCart from '../images/icons/emptyCart.svg'

const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <h1>FASHION</h1>
        </div>
        <div className="nav-items">
          <Link to="/">HOME</Link>
          <a href="#products">CATALOGUE</a>
          <a href="#sales">SALES</a>
          <Link to="../../cart"><img className='cart-image' src={emptyCart} alt="#" /></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
