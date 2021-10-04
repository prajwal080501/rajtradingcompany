import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Video from "../Card/Video";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        inital={{ opacity: 0 }}
      >
        <Video />
        <Hero />
        <Carousel />
      </motion.div>
    </>
  );
};

export default Home;
