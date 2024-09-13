import React from 'react'
import './SideMenu.css'
import logo from '../assets/logo.png'
import { FaChartBar, FaShoppingCart, FaUser, FaCog, FaQuestionCircle, FaComments } from 'react-icons/fa';
function SideMenu() {
  return (
    <>
    <div className="sidebar">
      <div className="title">
        {/* <h2 >Your Logo</h2> */}
        <img src={logo} alt="" />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <FaChartBar className="sidebar-icon" />
          <span className="sidebar-text">Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FaShoppingCart className="sidebar-icon" />
          <span className="sidebar-text">Orders</span>
        </li>
        <li className="sidebar-item">
          <FaUser className="sidebar-icon" />
          <span className="sidebar-text">Account</span>
        </li>
        <li className="sidebar-item">
          <FaCog className="sidebar-icon" />
          <span className="sidebar-text">Settings</span>
        </li>
      </ul>

      <div className="sidebar-support">
        <h4>Support</h4>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <FaComments className="sidebar-icon" />
            <span className="sidebar-text">Chat</span>
          </li>
          <li className="sidebar-item">
            <FaQuestionCircle className="sidebar-icon" />
            <span className="sidebar-text">FAQ</span>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default SideMenu