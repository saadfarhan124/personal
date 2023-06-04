import React, { Component } from "react";

import "./Experience.scss";

class Experience extends Component {
  state = {};
  render() {
    return (
      <section className="container" id="experience">
        <div className="container heading-container">
          <div className="row">
            <div className="col m12 s12">
              <h4 className="heading text-center" id="experienceheading">
                <code className="section-number">03.</code>Where I've worked
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs experience-tabs">
              <li className="tab col s3">
                <a className="active" href="#cdl1000">
                  CDL1000
                </a>
              </li>
              <li className="tab col s3">
                <a href="#octobernow">OctoberNow</a>
              </li>
              <li className="tab col s3">
                <a href="#xortox">Xortox</a>
              </li>
              <li className="tab col s3">
                <a href="#szabist">Szabist</a>
              </li>
            </ul>
          </div>
          <div id="cdl1000" className="col s12 center-align exp-col">
            <h6>
              Product Engineer
              <span className="font-bold"> @ CDL1000</span>
            </h6>
            <p>September 2021 - Present</p>
            <ul className="responsibilities">
              <li>
                Spearheaded the development of multiple in-house products using
                containerized Go-based microservices built with the Go Fiber
                Framework.
              </li>
              <li>
                Devised the necessary architecture and environments to ensure
                smooth product delivery.
              </li>
              <li>
                Led a team of skilled developers and ensured high-quality
                completion of all projects.
              </li>
              <li>
                Coordinated with external agencies to integrate third-party APIs
                and services into the products.
              </li>
              <li>
                Revamped and optimized existing websites, leveraging modern tech
                stacks for optimal performance.
              </li>
              <li>
                Implemented CI/CD pipelines using Google Cloud Build to
                streamline the development process.
              </li>
              <li>
                Managed and oversaw Salesforce and multiple integrations to
                ensure efficient system functionality.
              </li>
              <li>
                Set up Google Cloud infrastructure and services, including Cloud
                Run, Cloud Build, Memory Store, and SQL.
              </li>
            </ul>
          </div>
          <div id="octobernow" className="col s12 center-align exp-col">
            <h6>
              Software Engineer
              <span className="font-bold"> @ OctoberNow</span>
            </h6>
            <p>August 2021 - September 2021</p>
            <ul className="responsibilities">
              <li>
                Maintained and enhanced multiple mobile apps created in Flutter.
              </li>
              <li>
                Implemented platform-specific functionality in Flutter apps.
              </li>
              <li>
                Developed an open-source{" "}
                <a
                  target="_blank"
                  href="https://pub.dev/packages/flutter_facebook_sdk"
                >
                  Flutter plugin
                </a>
                {" "}that supports both Android and iOS for Facebook deep linking and
                app event logging.
              </li>
              <li>
                Developed, maintained, and enhanced microservices using Spring
                Boot.
              </li>
              <li>
                Created serverless computing solutions using Google Cloud
                Functions.
              </li>
            </ul>
          </div>
          <div id="xortox" className="col s12 center-align exp-col">
            <h6>
              Software Engineer
              <span className="font-bold"> @ Xortox</span>
            </h6>
            <p>June 2020 - June 2021</p>
            <ul className="responsibilities">
              <li>Requirement gathering from clients.</li>
              <li>
                Implementation, deployment, QA, and reviewing changes with
                clients.
              </li>
              <li>
                Developed and maintained multiple platforms using technologies
                such as CodeIgniter, WordPress, React Native, React JS, etc.
              </li>
              <li>
                Developed APIs and configured third-party APIs to enable
                communication between different systems.
              </li>
              <li>
                Developed mobile applications using Hybrid technology (React
                Native) and Native Android development (Kotlin and Java).
              </li>
              <li>Configured and customized different third-party plugins.</li>
              <li>Conducted research and development.</li>
            </ul>
          </div>
          <div id="szabist" className="col s12 center-align exp-col">
            <h6>
              Research Assistant
              <span className="font-bold"> @ Szabist</span>
            </h6>
            <p>June 2019 - June 2020</p>

            <ul className="responsibilities">
              <li>
                Developed Alumni Portal using ASP.Net, JQuery, JavaScript, HTML,
                CSS, and AJAX.
              </li>
              <li>
                Built a landing page using the MERN stack to visualize data
                collected from different machines.
              </li>
              <li>
                Analyzed and visualized data, and applied various machine
                learning models to predict tool wear.
              </li>
              <li>
                Engaged in general-purpose programming to fulfill team
                requirements, including the development of the team's progress
                website and landing pages for different industries to view their
                data.
              </li>
              <li>Managed and supervised different Final Year Projects.</li>
            </ul>
          </div>
        </div>
        <div className="row"></div>
      </section>
    );
  }
}

export default Experience;
