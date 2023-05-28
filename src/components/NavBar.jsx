import React from 'react'
import '../App.css'
import {IoFootballOutline} from "react-icons/io5";


const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='content-navbar'>
            <h1 className='content-text'>
               LIVE-BALL  
            </h1>
            <IoFootballOutline size={35} color='white'/>
        </div>
    </div>
  )
}

export default NavBar