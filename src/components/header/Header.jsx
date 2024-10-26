import React from 'react'
import "./Header.scss"
import { BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import {NAVBAR_DATA, support} from "../../static"

const execute_navbar = NAVBAR_DATA.map((item, inx) => <li key={inx}><a key={inx} href="#">{item}</a></li>)
const execute_support = support.map((item, inx) => <li key={inx}><a key={inx} href="#">{item}</a></li>)
const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <nav className='navbar'>
                <ul className="collection">
                <div className="logo">
                    <img src="https://www.samsung.com/us/smg/etc/designs/samsung/global/global_clientlib/imgs/gnb-desktop-120x32.png"/>
                </div>
                    {execute_navbar}
                </ul>
                <div className="icons">
                    {execute_support}
                    <BiSearch className='icon'/>
                    <IoCartOutline className='icon' />
                    <CiUser className='icon' />
                </div>
                <GiHamburgerMenu className='menu' />
            </nav>
        </div>
    </header>
 )
}

export default Header