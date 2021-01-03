import React from "react";
import "./About.scss";

export const About = () => (
  <section className="container" id="about">
    
    <div className="container">
      <div className="row">
        <div className="col s12 btn-get-in-touch-col">
            <a
            className="waves-effect waves-light btn btn-resume btn-large btn-get-in-touch"
            href="mailto:saadfarhan124@gmail.com"
            >
              Get in touch
            </a>      
        </div>
      </div>
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
            Organized and creative individual with a constant thirst for knowledge and an innate desire for self-improvement that
            led to the creation of strong foundation of logic, math and programming concepts. Proficient at problem solving having 
            adept time management and communication skills. Consistently seeking to be better computer scientist and aiming to become a 
            detailed oriented data scientist. 
          </p>
          <p>
            Organized and creative individual with a constant thirst for knowledge and an innate desire for self-improvement that
            led to the creation of strong foundation of logic, math and programming concepts. Proficient at problem solving having 
            adept time management and communication skills. Consistently seeking to be better computer scientist and aiming to become a 
            detailed oriented data scientist. 
          </p>
          {/* <div className="row"> */}
          <p>Here are a few technologies I've been working with recently:</p>
          <div className="row technologies">
            <div className="col-sm-6 first-list">
              <ul>
                <li>MERN</li>
                <li>React Native</li>
                <li>Code Igniter</li>
                <li>ASP.NET</li>

              </ul>
            </div>
            <div className="col-sm-6 second-list">
              <ul>
                <li>Android (Kotlin and Java)</li>
                <li>Python</li>
                <li>WordPress</li>
                <li>Electron JS</li>
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
