import { Link } from 'react-router-dom';

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
          <Link to="../../cart">CART</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
