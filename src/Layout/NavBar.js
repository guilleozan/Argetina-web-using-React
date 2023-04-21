import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./../Components/HomePage";
import MoviesPage from "./../Components/MoviesPage";
import AboutusPage from "./../Components/AboutusPage";
import RewardsPage from "./../Components/RewardsPage";
import SpecialEventsPage from "./../Components/SpecialEventsPage";
import FindusPage from "./../Components/FindusPage";
import LoginPage from "./../Components/LoginPage"

import "./../styles/Nav.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; //Boostrap
// import 'bootstrap-icons/font/bootstrap-icons.css';
import {Offcanvas} from 'bootstrap';

function NavBar() {
  return (
    <Router>
      <div className="cont-nav">
        <button
          className=" btn btn-outline-danger btn-lg"
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
                <Link to="/movies"> <i className="bi bi-film">Movies </i>   </Link>{" "}
              </li>
              <li className="offCanvUlLi">
                <Link to="/rewards"><i className="bi bi-trophy">Rewards </i>   </Link>{" "}
              </li>
              <li className="offCanvUlLi">
                <Link to="/findus"> <i className="bi bi-geo-alt">Find Us </i>  </Link>{" "}
              </li>
              <li className="offCanvUlLi">
                <Link to="/login"> <i className="bi bi-person-add"> login </i>  </Link>{" "}
              </li>
              <li className="offCanvUlLi">
                <Link to="/specialevents"> <i className="bi bi-calendar-date"> Special Events</i>   </Link>{" "}
              </li>
              <li className="offCanvUlLi">
                <Link to="/aboutus"><i className="bi bi-question-circle">About Us </i>  </Link>{" "}
              </li>
              </div>
              
              
            </ul>
          </div>
        </div>
      </div>
      <div className="blank"></div>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/specialevents" element={<SpecialEventsPage />} />
        <Route path="/findus" element={<FindusPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
