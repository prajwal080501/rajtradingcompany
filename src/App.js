import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import Hero from "./components/Hero/Hero";
import {SliderData} from "./Data/SliderData";
import Dropdown from "./components/Dropdown/Dropdown";
import React, { useState } from 'react';
import InfoSection from "./components/InfoSection/InfoSection";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Whatsapp/Whatsapp";





function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/service">
              <Service />
            </Route>
            <Route exact path="/contact">
              <Contact toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
      <Whatsapp />
      <Footer />
      
    </>
  );
}

export default App;
