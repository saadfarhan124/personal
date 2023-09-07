import React from "react";
import "./contact.scss";

export const Contact = () => (
  <section className="container" id="contact">
    <div className="container heading-container">
      <div className="row">
        <h4 className="heading text-center " id="contactHeading">
          <code className="section-number">05.</code>Get In Touch
        </h4>
      </div>
    </div>
    <div className="row">
      <div className="container contextText">
        <div className="center-align">
          <p>
            I'm actively seeking new opportunities and would love to connect
            with you. Whether you have a question or want to explore potential
            collaborations, please feel free to reach out. I'm eager to engage
            and discuss exciting prospects.
          </p>
          <div className="btn-div">
            <a
              className="waves-effect waves-light btn btn-resume btn-large"
              href="mailto:saadfarhan124@gmail.com"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
