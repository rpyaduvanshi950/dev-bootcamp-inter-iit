import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import TopMenu from '../TopMenu/TopMenu'
import MainArea from '../MainArea/MainArea'
import './DashBoard.css'
function DashboardMain() {
  return (
    <>
    <SideMenu/>
    <TopMenu/>
    <div className="main">
    <MainArea/>
    </div>
    </>
  )
}

export default DashboardMain