import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<nav class="container">
  <div class="navbar">
    <ul class="navitems" style={{listStyleType:"none"}}>
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Women">Women</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Men">Men</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact">Contact us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/About">About us</Link>
      </li>
      <li>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </li>
      <li>
      <button class="btn btn-danger" type="submit">Search</button>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
