import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Sarang, </span>MERN Stack Developer
      </h1>
      <p>
        I'm a self-taught MERN stack web developer with a BCA degree and a
        strong passion for building dynamic and user-friendly web applications.
        
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          className="resume-a"
          href="https://drive.google.com/file/d/1pp7uW4QcEx0uPXpSByG3dv5hTT6q5Q1C/view?usp=sharing"
        >
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
