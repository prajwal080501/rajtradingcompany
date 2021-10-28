import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ParallaxProvider>
        <AnimatePresence>
        <App />
        </AnimatePresence>
      </ParallaxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
