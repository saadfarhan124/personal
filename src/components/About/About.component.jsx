import React from "react";
import "./About.scss";

export const About = () => (
  <section className="container" id="about">
    <div className="container">
      <div className="row">
        <div className="col m4 s12">
          <h4 className="heading hvr-underline-from-center">
            <code className="section-number ">01.</code>About Me
          </h4>
        </div>
      </div>
      <div className="row text-and-image-container">
        <div className="col m8 s12">
          <p>
            As a seasoned software engineer, I have successfully completed
            multiple projects, leveraging my knowledge and passion for
            problem-solving to deliver exceptional outcomes. My expertise spans
            a diverse range of technologies, including GoLang, Flutter, Python,
            Android Development, and CodeIgniter.I maintain a steadfast
            commitment to mastering core concepts while keeping pace with
            emerging trends in the industry. In addition to my technical
            expertise, I have a strong interest in teaching and mentoring, and
            have enjoyed writing articles on{" "}
            <a target="_blank" href="https://medium.com/@saadfarhan124">
              Medium
            </a>{" "}
            to share my knowledge and experience with others.
          </p>
          {/* <div className="row"> */}
          <p>Here are a few technologies I've been working with recently:</p>
          <div className="row technologies">
            <div className="col-sm-6 first-list">
              <ul>
                <li>GoLang</li>
                <li>Flutter</li>
                <li>Docker</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="col-sm-6 second-list">
              <ul>
                <li>GCP</li>
                <li>Python</li>
                <li>Android (Kotlin and Java)</li>
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
