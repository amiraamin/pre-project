import React, {Component,Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
class Navbar extends Component {
   
    render() {
        return(
<Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <ul className="navbar-nav mr-auto">
  <li className="nav-item">
    <NavLink className=" nav-link" exact to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className=" nav-link" to="/About">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className=" nav-link" to="/Contact">Contact</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className=" nav-link" to="/Products">Products</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className=" nav-link" to="/Login">Login</NavLink>
  </li>
  
  </ul>
</nav>

</Fragment>


        )
    }
}



export default Navbar;