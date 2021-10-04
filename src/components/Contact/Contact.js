import { motion } from "framer-motion";
import swal from 'sweetalert';
import "./Contact.css"; 

import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Footer from "../Footer/Footer.js";

const Contact = () => {
  //function
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0amet1x",
        "rajtrading_template",
        e.target,
        "user_qYCVTyuGsJLGJ1gkiK7UJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1 className="title">Contact</h1>
        <article className="uk-contact1-card uk-card-hover uk-card-body uk-animation-toggle">
          <h5 classsName="contact-heading">Call us</h5>
          <p>9922991836</p>
          <h5>Location</h5>
          <p>Suksagar, Trimurty Colony, Behind Sadhana Society, Hadapsar Pune.</p>
          <h5>E-mail: </h5>
          <p>raj_tradingcompany@yahoo.com</p>
        </article>
        <div className="uk-divider-small"></div>

        <div className="uk-contact-card uk-card-hover uk-card-body uk-animation-toggle">
          <h5 className="form-title">Get in touch with us.😃</h5>
          <form type="submit" onSubmit={sendEmail}>
            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                {" "}
                Name
              </label>

              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-input" type="text" name="name" placeholder="Enter your name" />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                {" "}
                Phone
              </label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: phone"
                ></span>
                <input className="uk-input" type="phone" name="number"  placeholder="Enter your phone number"/>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                {" "}
                E-mail
              </label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: mail"
                ></span>
                <input className="uk-input" type="email" name="email" placeholder="Enter your mail-id" />
              </div>  
            </div>
            <div className="uk-inline">
            
            <textarea className="uk-textarea" rows="5" placeholder="Write your message..." name="message" placeholder="Enter your message"></textarea>
            </div>
            <br />
           
            <button onClick={() => { swal({ icon: "success" })}} type="submit" className="uk-button uk-button-primary">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
