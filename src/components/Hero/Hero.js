import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Button, Button2 } from "../Button/Button";
import "./Hero.css";
import {
  Arrow,
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrappper,
  NextArrow,
  PrevArrow,
  SliderButtons,
} from "./HeroElements";
import { motion } from "framer-motion";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HeroSection
      //spring
      initial={{ y:50, opacity: 0.4 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroWrappper>
        {slides.map((slide, index) => {
          return (  
            
             
                <HeroSlide key={index}>
                  {index === current && (
                    <HeroSlider  >
                  <HeroImage
                    initial={{  x: 30 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.1 }}
                    
                    src={slide.image} />

                  <HeroContent
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                        <h1>{slide.title}</h1>
                      </HeroContent>
                    </HeroSlider>
                  )}
                </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow style={{color:'white'}} onClick={PrevSlide} />
          <NextArrow  style={{color:'white'}} onClick={NextSlide} />
        </SliderButtons>
      </HeroWrappper>
    </HeroSection>
  );
};

export default Hero;
