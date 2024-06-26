import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            <div className="services-format">
                <h3>01</h3>
                <h2>WEB DESIGNING</h2>
                <p>Creation of websites and pages to reflect a company’s brand and information and ensure a user-friendly experience.</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="services-format">
                <h3>02</h3>
                <h2>WEB DEVELOPING</h2>
                <p>Helps to create all types of web-based software and ensure great experience for web users.</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="services-format">
                <h3>03</h3>
                <h2>PROBLEM SOLVING</h2>
                <p>Determine the source of a problem and find an effective solution. </p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services