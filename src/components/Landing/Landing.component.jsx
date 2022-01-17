import React, { useEffect } from "react";
import "./Landing.scss";

export const Landing = () => {
  useEffect(() => {
    // alert('saad');
  });
  return (
    <section id="landing" className="container intro-text load-hidden">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5 className=" left-align blue-tint">Hi, my name is</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h1 className=" left-align">Saad Farhan.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h1 className="left-align">I build solutions to your problems.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l8 m8">
            <div className="about-info">
              <p className="left-align">
                I am an independent software engineer from Karachi specializing
                in building complex back end and occasionally designing the
                front end.
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
};
