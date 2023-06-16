import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./../Components/HomePage";
import AboutPage from "./../Components/AboutPage";
import DestinationsPage from "../Components/DestinationsPage";
import NewsPage from "../Components/NewsPage";
import ContactPage from "./../Components/ContactPage";
import GalleryPage from "./../Components/GalleryPage";


import "./../styles/Nav.css";

import {Offcanvas} from 'bootstrap';

function NavBar() {
  return (
    <Router>
      <div className="cont-nav">
        <button
          className=" btn btn-outline-dark btn-lg"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <i className="bi bi-list xl"></i>
        </button>
        <div
          className="offcanvas offcanvas-start navbar-menu"
          data-bs-scroll="true"
          data-bs-dismiss="offcanvas"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            
            </h5>
            <button
              type="button"
              className="btn-close  text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
     
          <div className="offcanvas-body">
        <ul className="offCanvUl">
          <div className="linea"></div>
          <div>
          <li className="offCanvUlLi">
            <Link to="/"><i className="bi bi-house-door"> Home   </i> </Link>{" "}
          </li>
          <li className="offCanvUlLi">
            <Link to="/about"><i className="bi bi-question-circle"> About </i>   </Link>{" "}
          </li>
          <li className="offCanvUlLi">
            <Link to="/destinations"><i className="bi bi-compass"> Destinations </i>   </Link>{" "}
          </li>
          <li className="offCanvUlLi">
            <Link to="/news"><i className="bi bi-pencil-square"> News</i>  </Link>{" "}
          </li>
          <li className="offCanvUlLi">
            <Link to="/gallery"><i className="bi bi-image"> Gallery </i>  </Link>{" "}
          </li>
          <li className="offCanvUlLi">
            <Link to="/contact"><i className="bi bi-calendar-date"> Contact</i>   </Link>{" "}
          </li>
          </div>
              
              
            </ul>
          </div>
        </div>
      </div>
      <div className="blank"></div>


      <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/destinations" element={<DestinationsPage />} />
    <Route path="/news" element={<NewsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
  </Routes>
</Router>
  );
}

export default NavBar;
