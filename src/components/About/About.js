import { motion } from "framer-motion";
import React from "react";
import "./About.css";
const About = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="about-title">About Us</h1>
      
      <div>
        <div class="uk-card uk-card-hover uk-card-body uk-animation-toggle">
          <h3 class="uk-card-title">Vivas Home Decor <br /> (Raj Trading Company)</h3>
          <article class="uk-article">
            <h1 class="uk-article-title"></h1>
            <p class="uk-article-meta">
              More than 40 years Raj Trading Company is working as Industrial &
              Residential Painting contractors & service providers. We run our
              business in various sectors in the societies like Industries and
              corporate, Builders and housing societies, banks educational and
              financial institutions etc .
              <div className="list">
                <li>
                  Paint applications and Industrial painting with AMC service
                  providers.
                </li>
                <li>
                  Builders and corporate painting with AMC Services providers.
                </li>
                <li>Residential Painting work.</li>
                <li>Deco, PU Painting and Polish.</li>
                <li>Epoxy paint & epoxy floor coating.</li>
                <li>POP, Interiors, Decorative and Designer painting work.</li>
                <li>
                  Bamboo and metal scaffolding for exterior and interior work.
                </li>
                <li>Exterior deep cleaning and waterproofing.</li>
              </div>
            </p>
          </article>
          s
        </div>
      </div>
    </motion.div>
  );
};

export default About;
