import React from "react";
import "./About.scss";

export const About = () => (
  <section className="container" id="about">
    <div className="row">
      <div className="col s12">
          <a
          className="waves-effect waves-light btn btn-resume btn-large btn-get-in-touch"
          href="mailto:saadfarhan124@gmail.com"
          >
            Get in touch
          </a>      
      </div>
 </div>
    <div className="row">
      <div className="col s3">
        <h4 className="heading">
          <code className="section-number">01.</code>About Me
        </h4>
      </div>
    </div>
    <div className="row">
      <div className="col m6 s6">
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
        <ul className="technologies">
          <li>MERN</li>
          <li>React Native</li>
          <li>Code Igniter</li>
          
          <li>Electron JS</li>
          <li>ASP.NET</li>
          <li>Android (Kotlin and Java)</li>
          <li>WordPress</li>
          <li>Python</li>
        </ul>
        {/* </div> */}
      </div>
      <div className="col s4">
        <div className="card about-card" style={{}}>
          <div className="card-image ">
            <img className="responsive-img" src="/assets/pic.png"></img>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s6"></div>
    </div>
  </section>
);
