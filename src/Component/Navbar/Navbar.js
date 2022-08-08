import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navbar sticky">
        <ul>
        <Link to="/"> <li>HOME</li></Link>
        <Link to="/bitcoin"> <li>BITCOIN</li></Link>
            <Link to="/upsc"> <li>UPSC</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
