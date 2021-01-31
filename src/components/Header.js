import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
    return (
            <nav className="navbar fixed-top">
                <a className="navbar-brand " href='/' >
                    <img src={logo} style={{width:"120%", height:"120%"}} className="d-inline-block align-top" alt="" />
                </a>
                <h2 className='text-light'>COZA Products</h2>
            </nav>
    )
}
export default Header;