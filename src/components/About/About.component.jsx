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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* <div className="row"> */}
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className="technologies">
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Android</li>
          <li>Python</li>
        </ul>
        {/* </div> */}
      </div>
      <div className="col s6">
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
