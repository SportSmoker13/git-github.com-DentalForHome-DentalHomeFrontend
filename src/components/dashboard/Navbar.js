import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaBell, FaIcons } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { SidebarData } from "../sidebar/SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navbar-supermain">
      <div className="navbar-main">
        <div className="navbar-text">
          <p style={{ fontWeight: `bold` }}>Your Dashboard is Updated</p>
          <p>Hi Users, Exciting offers for you. (Diwali Special Offer)</p>
        </div>
        <div className="navbar-menu">
          <FiMenu onClick={showSidebar} className="navbar-menu-inner" />
        </div>
        <div className="navbar-icon">
          <RiMessage2Fill className="navbar-icon-inner" />
          <FaBell className="navbar-icon-inner" />
        </div>
      </div>
      <div className="nav-collapse-main">
        <ul className={sidebar ? `nav-menu-items` : `nav-void`}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
