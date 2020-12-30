import React from "react";
import "./Landing.scss";

export const Landing = () => (
  <section className="container">
    <h5 className="left-align red-text greeting">Hi, my name is</h5>
    <h1 className="left-align name">Saad Farhan.</h1>
    <h1 className="left-align">I build things for the web.</h1>
    <div className="about-info">
      <p className="left-align">
        I'm a software engineer based in Boston, MA specializing in building
        (and occasionally designing) exceptional, high-quality websites and
        applications.
      </p>
    </div>

    <a
      className="waves-effect waves-light btn btn-resume btn-large"
      href="mailto:saadfarhan124@gmail.com"
    >
      Get in touch
    </a>
  </section>
);
