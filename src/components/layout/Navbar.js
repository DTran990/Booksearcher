import React from 'react';
import '../../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='book-link' id="navlink"><h1><span>Book</span>Searcher</h1></Link>
    </nav>
  )
};

export default Navbar;
