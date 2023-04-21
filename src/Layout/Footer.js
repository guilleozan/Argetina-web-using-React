import React from "react";
import logo2 from "./../Images/logo2.png";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        
    <div className="cont-footer">
      <div className="foot1">
        <img src={logo2} alt="Tongariro Cinemas logo" />
      </div>
      <div className="foot2">
        <h5>FaQs</h5>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="foot3">
        <h5>Help</h5>
        <ul>
            <li>Support</li>
            <li>Call us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="foot4">
        <h5>Social Media</h5>
        
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-twitter"></i>
        
      </div>
    </div>
   <br/>
    <div>Tongariro Cinemas, 2023. All rights reserved.</div>


    </div>
  );
};

export default Footer;
