import React, { useState } from 'react'
import { FaBars , FaTh, FaUserAlt, FaEyeDropper } from 'react-icons/fa';
import {AiOutlineContacts } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


function Sidebar({children}) {
    const[isOpen, setIsOpen]= useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: "/",
            name: "ثبت نام",
            icon: <FaTh/>
        },
        {
            path: "/dashborad",
            name: "نیازمندی ها",
            icon: <FaEyeDropper/>
        },
        {
            path: "/about",
            name: "درباره ما",
            icon: <FaUserAlt/>
        },
        {
            path: "/contact",
            name: "ارتباط با ما",
            icon: <AiOutlineContacts/>
        },
       
       
       
        
    ]
  return (
    <div className="contaner">
        
            <div style={{width:isOpen ? "250px" : "80px" }} className="sidebar">
                <div className="top-section">
                   
                    <div style={{marginRight:isOpen ? "0px" : "-5px" }} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                     <h1 style={{display:isOpen ? "block" : "none" }} className="logo">Logo</h1>
                </div>
                { 
                menuItem.map((item, index) =>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display:isOpen ? "block" : "none" }} className="link-text">{item.name}</div>
                    </NavLink>
                ))}
                 
            </div>
            <main>{children}</main>
             
        </div>
       
  )
}

export default Sidebar
