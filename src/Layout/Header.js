import React from 'react';
// import { Images } from 'react-bootstrap';
import logo1 from './../Images/logo1.png';
import './../styles/Header.css'
import NavBar from './NavBar';

const Header = () => {
    return (
      
            <div className='cinema-Header'>
            <div className='left'>
            <img src={logo1} alt="Tongariro Cinemas logo" />
            </div>
           
           
            <br/>
            </div>
    
    );
}

export default Header;
