import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project_1 from "../../assets/project-1.png";
import project_2 from "../../assets/project-2.png";
import project_3 from "../../assets/project-3.png";
import project_4 from "../../assets/project-4.png";
import project_5 from "../../assets/project-5.png";
import project_6 from "../../assets/project-6.png";
import project_7 from "../../assets/project-7.png";
import project_8 from "../../assets/project-8.png";
import project_9 from "../../assets/project-9.png";
import project_10 from "../../assets/project-10.png";
import project_11 from "../../assets/project-11.png";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <a href="https://qbucket.mac.edu.in/">
          <div>
            <img src={project_1} alt="" />
            <p>Q-Bucket</p>
          </div>
        </a>

        <div>
          <img src={project_2} alt="" />
          <p>E-Commerce</p>
        </div>

        <a href="https://simple-clone-by-sarang.netlify.app/">
          <div>
            <img src={project_3} alt="" />
            <p>Microsoft Clone</p>
          </div>
        </a>

        <a href="https://sarangpachari.github.io/todoapp/">
          <div>
            <img src={project_4} alt="" />
            <p>Todo App</p>
          </div>
        </a>

        <a href="https://justhomebysarang.netlify.app/#">
          <div>
            <img src={project_5} alt="" />
            <p>Just Home</p>
          </div>
        </a>

        <a href="https://sarangpachari.github.io/macmap/">
          <div>
            <img src={project_6} alt="" />
            <p>MA College Map</p>
          </div>
        </a>

        <a href="https://meplants.netlify.app/">
          <div>
            <img src={project_7} alt="" />
            <p>Me plants</p>
          </div>
        </a>

        <a href="https://sarangpachari.github.io/furnitureworld/">
          <div>
            <img src={project_8} alt="" />
            <p>Furniture World</p>
          </div>
        </a>

        <a href="https://foodhut-sarang.netlify.app/">
          <div>
            <img src={project_9} alt="" />
            <p>Food Hut</p>
          </div>
        </a>


          <div>
            <img src={project_10} alt="" />
            <p>Digi Expert</p>
          </div>


  
          <div>
            <img src={project_11} alt="" />
            <p>Books Mart</p>
          </div>

      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
