import './topNav.css';
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import React, { useState } from 'react'

const TopNav = ({toggleSidebar}) => {
    return (
        <nav className='nav-bar'>
            <div className="left-content">
                <AiOutlineBars 
                    size={25} 
                    onClick={toggleSidebar}
                />
                <div className="logo">PrepareForME</div>
            </div>
            <div className="right-content">

                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Search' 
                />
                <AiOutlineSearch size={20} />

                <div 
                    className="setting">
                    <AiOutlineSetting size={20} />
                </div>
            </div>
        </nav>
    )
}

export default TopNav