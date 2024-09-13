import React from 'react'
import './TopMenu.css'
import { FaBell } from 'react-icons/fa'; 
function TopMenu() {
  return (
    <>
    {/* <div className="search">
        search
    </div>
    <div className="profileside">

    </div> */}
     <div className="topnav">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search"  />
      </div>

      {/* Notification Icon and User Section */}
      <div className="user-section">
        <FaBell className="notification-icon" />
        <div className="user-info">
          <span>Matt Appleyard</span>
          <img
            src="https://i.pravatar.cc/40" // Placeholder for user avatar, replace with actual source
            alt="User Avatar"
            className="user-avatar"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default TopMenu