import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Cart from './Cart.jsx';
import './assets/style.scss';
import Navbar from './assets/components/Navbar';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        </div>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
