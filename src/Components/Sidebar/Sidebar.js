import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../Images/logo.svg';
import { SidebarData } from '../Data/Data.js';
import { LogOut } from 'lucide-react';

const Sidebar = () => {

// UseState Hook to change the state of Hover
const [selected, setSelected] = useState(0);

  return (
    <div className='sidebar'>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Railworld <span>India</span> Pvt. Ltd.
        </span>
      </div>
      {/* Menu */}
      <div className="menu">
        {SidebarData.map((e,index) => {
          return (
            <div className={selected ===index ? "menuItem active" : "menuItem"} key={index}
            onClick={ () => setSelected(index)}
            >
              <e.icons />
              <span>
                {e.headings}
              </span>
            </div>
          )
        })}
        <div className="menuItem">
          {<LogOut />}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
