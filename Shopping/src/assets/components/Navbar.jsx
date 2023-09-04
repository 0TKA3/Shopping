import { Link } from 'react-router-dom';
import { useState } from 'react';
import emptyCart from '../images/icons/emptyCart.svg'

const Navbar = ({cartItems={cartItems}}) => {

  let cartCount = cartItems.length



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
          <div className="nav-cart-item">
            <Link to="../../cart"><img className='cart-image' src={emptyCart} alt="#" /></Link>
            <p>{cartCount}</p>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
