import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar px-5'>
        <div><h3>Logo</h3></div>
        <div className='menu-items'>
            <Link to='/home'>Home</Link>
            <Link to='/doctors'>Doctors</Link>
            <Link to='/pathology'>Pathology</Link>
            <Link to='/blood-bank'>Blood Bank</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Login</Link>
        </div>
    </nav>
    );
};

export default Header;