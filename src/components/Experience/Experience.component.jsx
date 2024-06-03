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
                  Code Clan
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
              <span className="font-bold"> @ Code Clan</span>
            </h6>
            <p>September 2021 - Present</p>
            <ul className="responsibilities">
              <li>
                Led the development of essential in-house products for clients,
                including a rate calculator and loadboard.
              </li>
              <li>
                Ensured ongoing functionality, alignment with business
                objectives, and implementation of necessary updates and
                improvements
              </li>
              <li>
                Utilized containerized Go-based microservices with the Fiber
                Framework for scalable solutions, managing 100,000+ concurrent
                users.
              </li>
              <li>
                Leveraged Flutter and Dart technologies, significantly improving
                tracking capabilities and operational efficiency in logistics.
              </li>
              <li>
                Established critical architecture and environments for product
                delivery, reducing deployment time by 20%.
              </li>
              <li>
                Implemented CI/CD pipelines using Google Cloud Build, cutting
                release cycles by 30% and boosting development efficiency.
              </li>
              <li>
                Designed GCP infrastructure, including Cloud Run, Build, Memory
                Store, and SQL, reducing hosting costs by 15% and enhancing
                scalability.
              </li>
              <li>
                Coordinated with external agencies to integrate third-party APIs
                and services into developed products.
              </li>
              <li>
                Developed a custom landing page and improved user experience for
                a UK marketing company through bug fixes and enhancements.
              </li>
              <li>
                Engineered the backend for an AI sales bot company, focusing on
                recording, managing, and organizing key performance indicators
                (KPIs).
              </li>
              <li>
                Revamped multiple WordPress websites, increasing traffic by 50%
                through modern design and enhanced functionality.
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
                Led the optimization efforts of multiple mobile apps developed
                in Flutter and Dart, boosting app performance and responsiveness
                by 15%.
              </li>
              <li>
                Optimized bug resolution, diagnosing and rectifying 50+ critical
                issues across devices, reducing resolution time and improving
                app stability.
              </li>
              <li>
                Enhanced code quality with SOLID and Design Principles, reducing
                codebase vulnerabilities by 40% and improving maintainability by
                50%.
              </li>
              <li>
                Integrated over 10 platform-specific functionalities within
                Flutter apps, and a consistent user experience across different
                operating systems.
              </li>
              <li>
                Corrected an incorrect implementation of an audio-to-text
                feature in the production app, eliminating over 20 instances of
                unexpected behavior and crashes by implementing the Singleton
                Principle.
              </li>
              <li>
                Fostered community engagement and innovation by developing an{" "}
                <a
                  target="_blank"
                  href="https://pub.dev/packages/flutter_facebook_sdk"
                >
                  open-source plugin
                </a>{" "}
                supporting Android and iOS, garnering over 500 downloads and
                positive feedback from the Flutter and Dart community.
              </li>
              <li>
                Contributed to microservices development and maintenance using
                Spring Boot, with a 60% increase in system efficiency and
                scalability.
              </li>
              <li>
                Led serverless computing solutions with Google Cloud Functions,
                cutting infrastructure costs by 70% and improving response time
                by 50%.
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
                Led client requirement sessions for 50+ projects, ensuring deep
                understanding of their expectations, with high client
                satisfaction levels.
              </li>
              <li>
                Optimized deployment workflows, streamlining processes and
                reducing deployment time by 15% through strategic enhancements.
              </li>
              <li>
                Configured third-party plugins for 30 projects to tailor
                functionality to specific requirements, ensuring optimal
                performance and user experience.
              </li>
              <li>
                Developed diverse platforms with CodeIgniter, WordPress, React
                Native, and React JS, showcasing expertise across frameworks.
              </li>
              <li>
                Led the development of mobile applications using both Hybrid
                technology (React Native) and Native Android development (Kotlin
                and Java), showcasing versatility and proficiency in diverse
                development approaches.
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
                Spearheaded the development of an innovative alumni portal
                utilizing ASP.Net, JQuery, JavaScript, HTML, CSS, and AJAX,
                resulting in a 20% enhancement in user interaction and
                experience thus significantly contributing to heightened alumni
                engagement.
              </li>
              <li>
                Innovated a dynamic landing page with the MERN stack,
                representing data from diverse sources for intuitive
                interpretation and analysis.
              </li>
              <li>
                Applied advanced data analysis and machine learning models to
                forecast tool wear, reducing machine downtime by 15%.
              </li>
              <li>
                Supervised 10 Final Year Projects, achieving a flawless 100%
                on-time completion rate, contributing to 50 students' academic
                advancement.
              </li>
              <li>
                Championed the enhancement of team productivity through the
                creation of a comprehensive team progress website and bespoke
                landing pages tailored to various industries' data visualization
                needs, facilitating improved collaboration and efficiency across
                20 projects.
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
