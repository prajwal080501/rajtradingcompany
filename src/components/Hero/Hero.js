import React from "react";
import { fadeIn } from 'react-animations'

import "./Hero.css";


const Hero = () => {
  return (
    <div  uk-scrollspy="cls: uk-animation-fade; target: .hero; delay: 500; repeat: true" >
      <section class="hero is-small is-info" >
        <div class="hero-body">
          <p class="hero-title" uk-parallax="viewport: 0.5">The space within your walls is full of opportunity for individual style.</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
