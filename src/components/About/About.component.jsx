import React from "react";
import "./About.scss";

export const About = () => (
  <section className="container" id="about">
    
    <div className="container">
      
      <div className="row">
        <div className="col m4 s12">
          <h4 className="heading hvr-underline-from-center" >
            <code className="section-number ">01.</code>About Me
          </h4>
        </div>
      </div>
      <div className="row text-and-image-container">
        <div className="col m8 s12">
          <p>
          Driven by knowledge, and a general enthusiasm for problem solving, I am an independent software engineer who has brought multiple projects to completion and been an important asset in every project. I have honed my skills to excel in MERN, Python, Android Development and CodeIgniter, focusing on core concepts and not limiting myself to a single stack. I am an ambitious individual who is eager to learn new things and keep my arsenal updated with innovative technologies. 
          </p>
          {/* <div className="row"> */}
          <p>Here are a few technologies I've been working with recently:</p>
          <div className="row technologies">
            <div className="col-sm-6 first-list">
              <ul>
                <li>GoLang</li>
                <li>React Native</li>
                <li>Docker</li>
                <li>PostgreSQL</li>

              </ul>
            </div>
            <div className="col-sm-6 second-list">
              <ul>
                <li>Android (Kotlin and Java)</li>
                <li>Python</li>
                <li>ASP.NET</li>
                <li>React JS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col m4 s12">
          <div className="card about-card" style={{}}>
            <div className="card-image ">
              <img className="responsive-img" src="/assets/pic.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s6"></div>
    </div>
  </section>
);
