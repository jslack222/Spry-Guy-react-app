import {useState} from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaBeer } from "react-icons/fa";
import brand from "../../assets/img/brand3.png"
import Dropdown from "./dropdown"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
 
  return (
    <div className="navbar-master-con">
      <div className="navbar-child">
        <div className="home-link">
          <Link className="brand-link" to="/">
            <img className="brand" src={brand} alt="Blog-icon" />
            PRY GUY <span className="blogs">BLOGS</span>
          </Link>
        </div>
        <div className="button-con">
          <button className="login">Login</button>
        </div>
      </div>
      <div className="fixed-navbar">
        <button onClick={() => setDropdown(!dropdown)}>
          BLOG <span className="dropdown-arrow">V</span>
        </button>
        <ul className="fixed-ul">
          <li className="fixed-li">
            <Link to="#">START HERE</Link>
          </li>
          <li>
            <Link to="#">NEWS</Link>
          </li>
        </ul>
      </div>
      <Dropdown trigger={dropdown} setTrigger={setDropdown}></Dropdown>
    </div>
  );
};
export default Navbar;
