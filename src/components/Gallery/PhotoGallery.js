import React, { useState, useEffect } from "react";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import { ContactHeroContent } from "../About/AboutElements";
import { ServiceHeroSection } from "../Service/ServiceElements";
import Aos from "aos";
import "./Gallery.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { ImageData } from "./ImageData";
import {AiFillCloseCircle} from 'react-icons/ai';
import {
  
  CardTitle,
  GalleryCard,
  GalleryContainer,
  GalleryHeader,
  GalleryTitle,
  Image,
  PhotoCount,
} from "./GalleryElements";

const PhotoGallery = ({ slides }) => {
  const [gallerySection, setGallerySection] = useState(false);
  const [modal, setModal] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const scrollEffect = () => {
    if (window.scrollY >= 120) {
      setGallerySection(true);
    } else {
      setGallerySection(false);
    }
  };
  window.addEventListener("scroll", scrollEffect);
  const getImg = (image) => {
    setTempImgSrc(image);
    setModal(true);
  }
  const imageCount = slides.length
  console.log(imageCount);
    
  return (
    <>
      <GlobalStyle />
      <ServiceHeroSection
        initial={{ x: -50, opacity: 0.4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className={gallerySection ? "hero active" : "hero"}
      >
        <ContactHeroContent>
          <h1>Gallery</h1>
        </ContactHeroContent>
      </ServiceHeroSection>
      <div className={modal ? 'modal open' : 'modal'}>
        <img src={tempimgSrc} alt="" />
        <AiFillCloseCircle className="close" onClick={() => setModal(false)} />
      </div>
      <GalleryHeader>
        <GalleryTitle>Projects and Work samples <br /> for your reference.</GalleryTitle>
        <PhotoCount>{imageCount} photos</PhotoCount>
      </GalleryHeader>
      <GalleryContainer>
        {ImageData.map((slide, index) => {
          return (
            
            <GalleryCard key={index} onClick={() => getImg(slide.image)}>
              <Image key={index} src={slide.image} style={{ width: '100%' }} />
              {/* <CardTitle>{slide.title}</CardTitle> */}
            </GalleryCard>
          );
        })}
      </GalleryContainer>
    </>
  );
};

export default PhotoGallery;
