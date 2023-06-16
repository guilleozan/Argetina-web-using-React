import React from "react";
import "../styles/Footer.css";
import Logo from "./../Images/P1.jpg";
import { CDBBtn, CDBIcon } from "cdbreact";
const Footer = () => {
  return (
    <div className="footer">
      <div className="cont-columns">
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
          <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li>Support</li>
            <li>Call Us</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>FAQs</h4>
          <ul>
            <li>
              <a
                href="https://www.goway.com/travel-information/central-and-south-america/argentina/argentina-faqs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="https://www.howlanders.com/blog/en/argentina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f App-link"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <br />
            <br />
            <br />
            <a href="/" >
              <img src={Logo} alt="" width="100px" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <small className="text-center mt-5">
          &copy; Uno mas del monton, 2023. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
