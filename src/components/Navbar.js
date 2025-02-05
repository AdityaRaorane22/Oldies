import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Oldies Shop</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/contact-us">Contact Us</Link> {/* Added Contact Us link */}
      </div>
    </nav>
  );
};

export default Navbar;
