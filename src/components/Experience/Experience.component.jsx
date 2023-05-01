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
              <li className="tab col s3"><a className="active" href="#cdl1000">CDL1000</a></li>
              <li className="tab col s3"><a href="#octobernow">OctoberNow</a></li>
              <li className="tab col s3"><a href="#xortox">Xortox</a></li>
              <li className="tab col s3"><a href="#szabist">Szabist</a></li>
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
                Spearhead the development of multiple in-house products using containerized Go-based microservices              </li>
              <li>
                Devise the necessary architecture and environments to facilitate seamless product delivery              </li>
              <li>
                Lead a team of skilled developers and ensure that all projects are completed to the highest standard              </li>
              <li>
                Coordinate with external agencies to integrate third-party APIs and services into our products
              </li>
              <li>
                Revamp and optimize existing websites, incorporating modern tech stacks for peak performance
              </li>
              <li>
                Implement CI/CD pipelines using Google Cloud Build to streamline our development process              </li>
              <li>
                Manage and oversee Salesforce and multiple integrations to ensure all systems are functioning efficiently
              </li>
              <li>
                Set up Google Cloud infrastructure and services such as Cloud Run, Cloud Build, Memory Store, and SQL.              
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
                Maintaining and enhancing multiple mobile apps created in Flutter.
              </li>
              <li>
                Writing Platform Specific functionality in Flutter.
              </li>
              <li>
                Developing and maintaining Flutter plugins.
              </li>
              <li>
                Developing, maintaining and enhancing Spring Boot based microservices. 
              </li>
              <li>
                Developing and deploying google cloud functions.
              </li>
              <li>
                Code Review
              </li>
              <li>
                Mentoring junior resources
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
              <li>
                Requirement gathering from clients. Implementing, deploying, performing QA and then reviewing the said changes with clients. 
              </li>
              <li>
                Optimized deployment process and implemented repository management using GIT.
              </li>
              <li>
                Developed and maintained multiple platforms using technologies such as CodeIgniter, WordPress, React Native, React JS etc.
              </li>
              <li>
                Developed APIs and configured third party APIs to communicate between different
                systems.
              </li>
              <li>
              Developed mobile applications using Hybrid technology (React Native) and Native Android
                development (Kotlin and Java).  
              </li>
              <li>
                Configured and customized different third party plugins.
              </li>
              <li>
                Research and development.
              </li>
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
                Developed Alumni Portal using ASP.Net, JQuery, Javascript, HTML, CSS, AJAX.
              </li>
              <li>
                Built an application to visualize the data being gathered by different machines using MERN stack.
              </li>
              <li>
                Analyzed, visualized and applied different machine learning models on the said data to predict tool wear.
              </li>
              <li>
                General purpose programming to meet the team's requirements such as development of the team's progress website, landing pages for different industries to view their data. 
              </li>
              <li>Managed and supervised different Final Year Projects.</li>
            </ul>
          </div>
          
        </div>
        <div className="row">
        </div>
      </section>
    );
  }
}

export default Experience;
