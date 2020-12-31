import React from "react";
import "./contact.scss";

export const Contact = () => (
    <section className="container " id="contact">
    <div className="container heading-container">
      <div className="row ">
        <h4 className="heading text-center" id="contactHeading">
          <code className="section-number">03.</code>Get In Touch
        </h4>
      </div>
    </div>
    <div className="row">
        <div className="container contextText">
            <div className="center-align">
                
                <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
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
