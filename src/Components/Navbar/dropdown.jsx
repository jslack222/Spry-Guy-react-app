import { useState } from 'react'

const Dropdown = (props) => {
    return (
      props.trigger && (
        <div className="dropdown-master">
          <div className="dropdown-inner">
            <p className="d-item-1">VALUE</p>
            <hr className="dd-line" />
            <p className="d-tiem-2">VALUE</p>
            <hr className="dd-line" />
            <p className="d-item-3">VALUE</p>
          </div>
        </div>
      )
    );
    
    
}
export default Dropdown; 