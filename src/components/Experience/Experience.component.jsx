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
              Lead Software Engineer
              <span className="font-bold"> @ CDL1000</span>
            </h6>
            <p>September 2021 - June 2023</p>
            <ul className="responsibilities">
              <li>
                Initiated the development of multiple in-house products,
                including a rate calculator and loadboard, from scratch.
                Utilized containerized Go-based microservices built with the
                Fiber Framework
              </li>
              <li>
                Orchestrated the rebranding initiative for the website,
                overseeing its development and ensuring a successful deployment
                that aligned with the company's updated brand identity.
              </li>
              <li>
                Led the development of a Flutter-based tracking application
                designed for in-house deliveries, showcasing leadership in
                adopting cutting-edge technologies for improved operational
                efficiency.
              </li>
              <li>
                Successfully managed and maintained websites for sibling
                companies, ensuring their continued functionality and alignment
                with business objectives.
              </li>
              <li>
                Devised essential architecture and environments to guarantee the
                smooth delivery of products, emphasizing a strategic approach to
                infrastructure setup.
              </li>
              <li>
                Led and supervised a team of skilled developers, ensuring the
                high-quality completion of all projects. Fostered a
                collaborative environment that promoted excellence.
              </li>
              <li>
                Coordinated with external agencies to seamlessly integrate
                third-party APIs and services into the developed products,
                enhancing their functionality and features.
              </li>
              <li>
                Implemented Continuous Integration/Continuous Deployment (CI/CD)
                pipelines using Google Cloud Build, streamlining the development
                process for increased efficiency.
              </li>
              <li>
                Oversaw Salesforce and multiple integrations, ensuring the
                efficient functionality of the system and maintaining a seamless
                workflow.
              </li>
              <li>
                Set up Google Cloud Platform (GCP) infrastructure and services,
                including Cloud Run, Cloud Build, Memory Store, and SQL,
                demonstrating expertise in cloud-based solutions.
              </li>
            </ul>
          </div>
          <div id="octobernow" className="col s12 center-align exp-col">
            <h6>
              Software Engineer
              <span className="font-bold"> @ OctoberNow</span>
            </h6>
            <p>February 2021 - September 2021</p>
            <ul className="responsibilities">
              <li>
                Took charge of maintaining and enhancing various mobile apps
                developed in Flutter, ensuring their ongoing optimization and
                functionality.
              </li>
              <li>
                Diagnosed and rectified critical bugs on various devices,
                prioritizing rapid debugging to maintain a seamless user
                experience.
              </li>
              <li>
                Addressed an incorrect implementation of an audio-to-text
                feature in the production app, resolving unexpected behavior and
                crashes by implementing the Singleton Principle.
              </li>
              <li>
                Demonstrated a commitment to code quality by implementing SOLID
                and Design Principles, elevating the overall robustness and
                maintainability of the codebase.
              </li>
              <li>
                Successfully integrated platform-specific functionality within
                Flutter apps, ensuring a cohesive user experience across
                different operating systems.
              </li>
              <li>
                Contributed to the Flutter community by creating an{" "}
                <a
                  target="_blank"
                  href="https://pub.dev/packages/flutter_facebook_sdk"
                >
                  open-source plugin
                </a>{" "}
                supporting Android and iOS, specifically designed for Facebook
                deep linking and app event logging.
              </li>
              <li>
                Played a key role in developing, maintaining, and enhancing
                microservices using Spring Boot, contributing to the overall
                efficiency and scalability of the system.
              </li>
              <li>
                Innovatively designed and implemented serverless computing
                solutions using Google Cloud Functions.
              </li>
            </ul>
          </div>
          <div id="xortox" className="col s12 center-align exp-col">
            <h6>
              Software Engineer
              <span className="font-bold"> @ Xortox</span>
            </h6>
            <p>June 2020 - January 2021</p>
            <ul className="responsibilities">
              <li>
                Led the comprehensive collection of client requirements,
                ensuring a thorough understanding of their needs and
                expectations.
              </li>
              <li>
                Orchestrated seamless implementation, deployment, and QA
                processes, guaranteeing the delivery of high-quality solutions.
                Conducted thorough reviews with clients to validate changes and
                ensure alignment with their objectives.
              </li>
              <li>
                Enhanced the deployment workflow for improved efficiency.
                Implemented effective repository management using GIT, fostering
                a collaborative and organized development environment.
              </li>
              <li>
                Successfully developed and maintained diverse platforms
                utilizing a range of technologies, including CodeIgniter,
                WordPress, React Native, React JS, showcasing adaptability and
                expertise across various frameworks.
              </li>
              <li>
                Developed robust APIs and facilitated the integration of
                third-party APIs, establishing seamless communication between
                different systems, enhancing interoperability.
              </li>
              <li>
                Led the development of mobile applications using both Hybrid
                technology (React Native) and Native Android development (Kotlin
                and Java), showcasing versatility and proficiency in diverse
                development approaches.
              </li>
              <li>
                Configured and customized various third-party plugins, tailoring
                them to specific project requirements and ensuring optimal
                functionality.
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
                Elevated the Alumni Portal by leveraging ASP.Net, JQuery,
                JavaScript, HTML, CSS, and AJAX, enhancing user interaction and
                experience.
              </li>
              <li>
                Pioneered a dynamic landing page using the MERN stack, providing
                a visually intuitive representation of data collected from
                diverse machines.
              </li>
              <li>
                Applied advanced data analysis techniques and implemented
                various machine learning models to predict tool wear,
                contributing to more informed decision-making.
              </li>
              <li>
                Played a pivotal role in enhancing team productivity by engaging
                in general-purpose programming. Developed a comprehensive team
                progress website and tailored landing pages for different
                industries, meeting diverse data visualization needs.
              </li>
              <li>
                Successfully managed and supervised various Final Year Projects,
                ensuring their timely completion and aligning with the team's
                objectives.
              </li>
            </ul>
          </div>
        </div>
        <div className="row"></div>
      </section>
    );
  }
}

export default Experience;
