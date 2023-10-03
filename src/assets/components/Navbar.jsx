import { Link } from 'react-router-dom';
import { useState } from 'react';
import emptyCart from '../images/icons/emptyCart.svg'

const Navbar = ({cartItems={cartItems}}) => {


  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <h1>FASHION</h1>
        </div>
        <div className="nav-items">
          <Link to="/shopping/" onClick={()=> scrollTo(0, 0)}>HOME</Link>
          <Link to="/shopping/"onClick={()=> scrollTo(0, 750)}>CATALOGUE</Link>
          <Link to="/shopping"onClick={()=> scrollTo(0, 2500)}>SALES</Link>
          <div className="nav-cart-item">
            <Link to="/cart"><img className='cart-image' src={emptyCart} alt="#" /></Link>
            <p>{cartItems.length}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
