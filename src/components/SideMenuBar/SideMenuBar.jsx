import React from 'react'
import "./SideMenuBar.css"
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx"
import { PiBuildingsBold } from 'react-icons/pi';
import { MdOutlinePeople } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiMessageDetail } from 'react-icons/bi';

const SideMenuBar = () => {
  return (
    <>
      <div className='side-menu-bar'>
        <div className='side-menu-item'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <nav className='menu-items'>

          <NavLink to="/Dashbord" className="nav_item">
          <RxDashboard />
            &nbsp;Dashboard
          </NavLink>
            {/* <ul>
              <li><Link to="/dashboard"><RxDashboard />Dashboard</Link></li>
              <li><Link to="/property"><PiBuildingsBold />Property</Link></li>
              <li><Link to="/agent"><MdOutlinePeople />Agent</Link></li>
              <li><Link to="/review"><AiOutlineStar />Review</Link></li>
              <li><Link to="/message"><BiMessageDetail />Message</Link></li>
              <li><Link to="/my Profile"><CgProfile />My Profile</Link></li>
            </ul> */}
          </nav>
        </div>
      </div>
    </>
  )
}

export default SideMenuBar;