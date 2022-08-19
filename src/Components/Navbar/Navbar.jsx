import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaBeer } from "react-icons/fa";
import brand from "../../assets/img/brand3.png"

const Navbar = () => {
  return (
    <div className="navbar-master-con">
      <div className="navbar-child">
        <div className="home-link">
          <Link className="brand-link" to="/">
            <img className="brand" src={brand} alt="Blog-icon" />
            pry guy blogs
          </Link>
        </div>
        <div className="button-con">
          <button className="login">Login</button>
        </div>
        <div className="fixed-navbar">
          
        </div>
      </div>
    </div>
  );
};
export default Navbar;
