import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { home } = props;
  return (
    <div className='navbar'>
      {home ? (
        <div className="navbar--left">
          <div className="navbar__item strike"><a href='https://www.linkedin.com/in/corstreet'>LI</a></div>
          <div className="navbar__item strike"><a href='https://www.github.com/corstreet'>GH</a></div>
        </div>): (
        <div className="navbar--left">
          <Link to="/" className="navbar__item strike">HOME</Link>
        </div>
      )}
      <div className="navbar__line"></div>
      <div className="navbar--right">
        <div className="navbar__item"><span>&copy;</span>/2024</div>
      </div>
    </div>


  )
}

export default Navbar