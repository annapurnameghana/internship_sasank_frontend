// src/components/SideMenu.js
import React from 'react';

import './styles/SideMenu.css';
import { FaTachometerAlt, FaUsers, FaBuilding, FaClipboardList, FaCalendarAlt, FaUser, FaCog } from 'react-icons/fa';

import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <Link to="/" className="menu-item">
        <FaTachometerAlt className="icon" />
        <span>Dashboard</span>
      </Link>
      <div className="menu-item">
        <FaUsers className="icon" />
        <span>Employees</span>
      </div>
      <div className="menu-item">
        <FaBuilding className="icon" />
        <span>Company</span>
      </div>
      <div className="menu-item">
        <FaClipboardList className="icon" />
        <span>Candidate</span>
      </div>
      <div className="menu-item">
        <FaCalendarAlt className="icon" />
        <span>Calendar</span>
      </div>
      <div className="menu-item">
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
      <div className="menu-item">
        <FaCog className="icon" />
        <span>Setting</span>
      </div>
    </div>
  );
};

export default SideMenu;
