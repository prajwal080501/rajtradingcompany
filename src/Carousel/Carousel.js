import React from "react";
import "./Carousel.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";

const Carousel = () => {
  return (
      <>
      <div className="heading">
          <h2 className="title">Our Work</h2>
      </div>
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

    <ul class="uk-slider-items uk-grid">
    <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img1} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>1</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img2} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>2</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img3} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>3</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img4} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>4</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img5} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>5</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img6} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>6</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img7} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>7</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img8} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>8</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img9} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>9</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-2-3">
          <div className="uk-cover-container">
            <img src={img10} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>10</h1>
            </div>
          </div>
        </li>
        <li className="uk-width-3-4">
          <div className="uk-cover-container">
            <img src={img11} alt="" uk-cover />
            <div className="uk-position-center uk-panel">
              <h1>11</h1>
            </div>
          </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
     
    </>
  );
};

export default Carousel;
