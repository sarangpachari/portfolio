import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a MERN Stack Developer, my passion lies in crafting visually stunning websites that leave a lasting impression.</p>
                    <p>With a BCA degree expected in 2024, I bring a fresh perspective and cutting-edge skills to every project.</p>
                    <p>Let's collaborate to create digital experiences that stand out in today's competitive online landscape.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "40%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            {/* <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div> */}
        </div>
    </div>
  )
}

export default About