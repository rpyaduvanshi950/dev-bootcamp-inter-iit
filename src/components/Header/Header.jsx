import React from 'react'
import Dash from '../../assets/DashBoard.png'
import './Header.css'
function Header() {
  return (
    <div className="dashboard">
    <div className="dashboard-header">
      <h2>Welcome to your dashboard!</h2>
      <p>
        Try our new Admin Dashboard Template, built with live Ant-Design
        components. Customize it to your needs and release to production!
      </p>
    </div>
    <div className="dashimage">
        <img src={Dash} alt="" />
    </div>
    </div>
  )
}

export default Header