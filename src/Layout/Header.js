import React from "react";
// import { Images } from 'react-bootstrap';
import logo1 from "./../Images/P1.jpg";
import "./../styles/Header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="cinema-Header">
      <div className="left">
        <a href="/">
          <img src={logo1} alt="uno mas del monton logo" />
        </a>
      </div>

      <br />
    </div>
  );
};

export default Header;
