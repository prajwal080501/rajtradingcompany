import React from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../About/About";
import Service from "../services/Service";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";


const Navbar = () => {
  return (
    <div className="nav-container">
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <motion.div className="brand" whileHover={{ scale: 1.08 }}>
              <NavLink className="navbar-brand" to="/" uk-scroll data-toggle="collapse" data-target=".navbar-collapse.in">
                RAJ TRADING COMPANY
              </NavLink>
            </motion.div>
            <hr class="uk-divider-vertical"/>


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <motion.div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mr-2 mb-lg-0" data-toggle="collapse" data-target=".navbar">
                <li className="nav-item">
                  <NavLink
                    
                    activeClassName="menu-active"
                    exact
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    uk-scroll
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.in">
                  <NavLink
                    
                    activeClassName="menu-active"
                    exact
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                    uk-scroll
                  >
                    About
                  </NavLink>
                </li>

                    
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.in">
                  <NavLink
                    
                    activeClassName="menu-active"
                    className="nav-link active"
                    to="/contact"
                    uk-scroll
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.in">
                  <NavLink
                    
                    exact
                    activeClassName="menu-active"
                    className="nav-link active"
                    to="/service"
                    uk-scroll
                  >
                    Services
                  </NavLink>
                </li>
              </ul>
              
              
            </motion.div>
          </div>
        </nav>
      </header>
      
    </div>
  );
  
};


export default Navbar;
