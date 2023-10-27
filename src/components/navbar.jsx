import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, UserCircle } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="links">
        <Link to="/" className="text-link">
          Inicio
        </Link>
        <div className='links-right'>
          <Link to="/cart" className="icon-link">
            <ShoppingCart size={50} width={50} height={50} />
          </Link>
          <Link to="/cart" className="icon-link">
            <UserCircle size={50} width={50} height={50} />
          </Link>
        </div>
      </nav>
    </div>
  );
};