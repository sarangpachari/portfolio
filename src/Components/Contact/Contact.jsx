import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>
            Connect me to take <br /> your ideas to the <br /> next level
          </h1>
        </div>
        
        <div className="contact-right">
          <p>Let's discuss how I can help you</p>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="https://wa.me/+917012981845">
                <img src={whatsapp} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="mailto:sarangkpta@gmail.com">
                <img src={mail} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/sarang-p-achari">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://github.com/sarangpachari">
                <img src={github} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.instagram.com/0.sarang/">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
