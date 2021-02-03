import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
    return (
            <nav className="navbar fixed-top">
                <a className="navbar-brand " href='/' >
                    <img src={logo} style={{width:"100%", height:"100%"}} className="d-inline-block align-top" alt="" />
                </a>
                <h4 className='text-light'>COZA Store</h4>
            </nav>
    )
}
export default Header;