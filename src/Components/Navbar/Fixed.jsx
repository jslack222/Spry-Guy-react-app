import {useState} from "react"
import {Link} from 'react-router-dom'
import Dropdown from './dropdown'

const Fixed = () => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
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
      <Dropdown trigger={dropdown} setTrigger={setDropdown}></Dropdown>
    </div>
    )
}
export default Fixed; 