import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Video from "./components/Card/Video";
import Home from "../src/components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/services/Service";
import Footer from "../src/components/Footer/Footer";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
              <Contact/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
