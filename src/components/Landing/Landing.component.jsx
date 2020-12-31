import React from "react";
import "./Landing.scss";

export const Landing = () => (
  <section className="container">
    <div className="row">
      <div className="col s12">
        <h5 className="left-align red-text greeting">Hi, my name is</h5>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <h1 className="left-align name">Saad Farhan.</h1>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <h1 className="left-align">I build things for the web.</h1>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <div className="about-info">
          <p className="left-align">
            {/* I'm a software engineer based in Boston, MA specializing in building
            (and occasionally designing) exceptional, high-quality websites and
            applications. */}
            Organized and creative individual with a constant thirst for knowledge and an innate desire for
            self-improvement that led to the creation of strong foundation of logic, math and programming
            concepts. Proficient at problem solving having adept time management and communication
            skills. Consistently seeking to be better computer scientist and aiming to become a detailed
            oriented data scientist. Recently graduated and currently working as a research assistant at Szabist for the establishment of Predictive Analytics Lab under the Center of Data Analytics and Cloud Computing. 
          </p>
        </div>
      </div>
    </div>
   

   
  </section>
   
);
