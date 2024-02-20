import React, { useState, useEffect, useRef } from 'react';
import Hamburger from "./../../assets/hamb.svg";
import './Sidebar.css';
import CloseIcon from "./../../assets/cIcon.svg";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const sidebarRef = useRef(null);
    const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click);
        toggleSidebar();
    }

    const handleClickLogout = () => {
        setClick(!click)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='SidebarContainer' ref={sidebarRef}>
            {/* Hamburger icon (conditionally rendered) */}
            <div className='topBar'>
                <img className='hamburgerIcon' src={Hamburger} alt="hamburger" onClick={toggleSidebar} />
                <h3>MRM PROCOM</h3>
            </div>

            {/* Sidebar content with sliding animation */}
            <div className={`sidebarItems ${isActive ? 'active' : ''}`}>
                <img className='closeIcon' src={CloseIcon} alt="close" onClick={toggleSidebar} />
                <div className='logoData'>
                    <h3 className='titleName'>MRM Procom</h3>
                </div>
                <div className='menuItems'>
                    <ul className="lists">
                        
                            <NavLink
                                to="/dashboard"
                                end
                                className="nav-links"
                            >
                                <li className={click ? "list active": "list"} onClick={handleClick}>Dashboard</li>
                            </NavLink>
                            
                            <NavLink
                                to="/settings"
                                end
                                className="nav-links"
                            >
                                <li className={click ? "list active": "list"} onClick={handleClick}>Settings</li>
                            </NavLink>
                            <NavLink
                                to="/actions"
                                end
                                className="nav-links"
                            >
                                <li className={click ? "list active": "list"} onClick={handleClick}>Actions</li>
                            </NavLink>
                            <NavLink
                                to="/graphs"
                                end
                                className="nav-links"
                            >
                                <li className={click ? "list active": "list"} onClick={handleClick}>Graphs</li>
                            </NavLink>
                            <NavLink
                                to="/connect"
                                end
                                className="nav-links"
                            >
                                <li className={click ? "list active": "list"} onClick={handleClickLogout}>Reconnect</li>
                            </NavLink>
                            <NavLink
                                to="/"
                                end
                                className="nav-links"
                            >
                                <li className='list' onClick={handleClickLogout}>Logout</li>
                            </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
