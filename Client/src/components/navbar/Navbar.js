import React from 'react'
import './Navbar.css'
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar-school'>
            <ul className='profileEle'>
                <li><Link to="/home" className='active'>Dashboard</Link></li>
                <li><a href='#'>My profile</a></li>
                <li><a href='#'>Setting</a></li>
                <li className='logout-nav'>
                    <button href='#'>Logout</button></li>
            </ul>
        </nav>
    )
}

export default Navbar