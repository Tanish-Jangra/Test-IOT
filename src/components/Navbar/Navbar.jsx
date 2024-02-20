import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleClickLogout = () => {
    // Clear all cookies
    // document.cookie.split(";").forEach((c) => {
    //   document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    // });

    setClick(!click)
  };

  return (
    <>
        <div className="navContainer">
          <NavLink  end className="navLogo">
            Procom Smart Devices
          </NavLink> 
          
          <ul className={click ? "navMenu active" : "navMenu"}>           
            <li className="navItem">
              <NavLink
                to="/dashboard"
                end
                className="navLinks"
                onClick={handleClick}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/settings"
                end
                className="navLinks"
                onClick={handleClick}
              >
                Settings
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/actions"
                end
                className="navLinks"
                onClick={handleClick}
              >
                Actions
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/graphs"
                end
                className="navLinks"
                onClick={handleClick}
              >
                Graphs
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/connect"
                end
                className="navLinks"
                onClick={handleClickLogout}
              >
                Reconnect
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/"
                end
                className="navLinks"
                onClick={handleClickLogout}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
    </>
  );
}

export default Navbar;