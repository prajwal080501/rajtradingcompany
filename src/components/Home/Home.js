import React from "react";
import Navbar from "../Navbar/Navbar";
import Video from "../Card/Video";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Carousel from "../../Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Video />
      <Hero />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
