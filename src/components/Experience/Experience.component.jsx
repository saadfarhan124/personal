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
                <a className="active" href="#gepeto">
                  Gepeto
                </a>
              </li>
              <li className="tab col s3">
                <a href="#cdl1000">Code Clan</a>
              </li>
              <li className="tab col s3">
                <a href="#octobernow">OctoberNow</a>
              </li>
              <li className="tab col s3">
                <a href="#xortox">Xortox</a>
              </li>
            </ul>
          </div>

          <div id="gepeto" className="col s12 center-align exp-col">
            <h6>
              Senior Software Engineer
              <span className="font-bold"> @ Gepeto</span>
            </h6>
            <p>August 2024 - Present</p>
            <ul className="responsibilities">
              <li>
                Designed and developed a microservices-based LLM agent management platform using gRPC and Redis for efficient inter-service communication.
              </li>
              <li>
                Created an authentication module to manage organization-specific configurations, enabling secure access to LLM agent data and configurations.
              </li>
              <li>
                Designed a live agent playground for sandbox testing of LLM agents before deployment.
              </li>
              <li>
                Implemented full frontend integration using Next.js to deliver a seamless user experience.
              </li>
              <li>
                Led the architecture and development of AI/LLM powered solutions for businesses using FastAPI, Anthropic, OpenAI, Instructor, PostgreSQL, Twilio, and Redis, implementing LLM-powered intelligent agents designed for enterprise-scale customer service automation.
              </li>
              <li>
                Engineered comprehensive multi-stage agent systems with advanced RAG capabilities for efficient knowledge base querying and response generation.
              </li>
              <li>
                Developed and integrated end-to-end Salesforce connectivity for AI agents, enabling automated case management and contact tracking while maintaining data consistency across platforms.
              </li>
              <li>
                Created an intuitive Next.js dashboard empowering customers to manage user stories and training examples, enhancing agent performance and customization capabilities.
              </li>
              <li>
                Implemented performance optimization strategies utilizing Redis caching and database query refinements, significantly improving agent response times and concurrent user handling.
              </li>
              <li>
                Engineered a versatile embedded chatbot solution with cross-platform compatibility, ensuring seamless integration across various customer websites.
              </li>
              <li>
                Established robust testing environments and deployment pipelines, streamlining the development-to-production lifecycle.
              </li>
              <li>
                Worked with customer's DevOps team to deploy a multi-agent solution on their infrastructure as part of regional collaboration efforts.
              </li>
              <li>
                Partnered with customer's Salesforce integration team to manage the integration and release of changes on their Salesforce instance from development to production.
              </li>
            </ul>
          </div>

          <div id="cdl1000" className="col s12 center-align exp-col">
            <h6>
              Lead Software Engineer
              <span className="font-bold"> @ Code Clan</span>
            </h6>
            <p>September 2021 - July 2024</p>
            <ul className="responsibilities">
              <li>
                Led the development of essential in-house products for clients, including a rate calculator and loadboard.
              </li>
              <li>
                Ensured ongoing functionality, alignment with business objectives, and implementation of necessary updates and improvements.
              </li>
              <li>
                Utilized containerized Go-based microservices with the Fiber Framework for scalable solutions.
              </li>
              <li>
                Leveraged Flutter and Dart technologies, significantly improving tracking capabilities and operational efficiency in logistics.
              </li>
              <li>
                Implemented CI/CD pipelines using Google Cloud Build, boosting development efficiency.
              </li>
              <li>
                Designed GCP infrastructure, including Cloud Run, Build, Memory Store, and SQL.
              </li>
              <li>
                Coordinated with external agencies to integrate third-party APIs and services into developed products.
              </li>
              <li>
                Developed a custom landing page and improved user experience for a UK marketing company through bug fixes and enhancements.
              </li>
              <li>
                Engineered the backend for an AI sales bot company, focusing on recording, managing, and organizing key performance indicators (KPIs).
              </li>
              <li>
                Collaborated with Nuance's team to deploy and integrate a customer's chatbot solution, contributing to regional collaboration on the deployment process.
              </li>
            </ul>
          </div>

          <div id="octobernow" className="col s12 center-align exp-col">
            <h6>
              Software Developer
              <span className="font-bold"> @ OctoberNow</span>
            </h6>
            <p>February 2021 - September 2021</p>
            <ul className="responsibilities">
              <li>
                Led the optimization efforts of multiple mobile apps developed in Flutter and Dart.
              </li>
              <li>
                Optimized bug resolution, diagnosing and rectifying 10+ critical issues across devices.
              </li>
              <li>
                Enhanced code quality with SOLID and Design Principles, reducing codebase vulnerabilities and improving maintainability.
              </li>
              <li>
                Integrated multiple platform-specific functionalities within Flutter apps, and a consistent user experience across different operating systems.
              </li>
              <li>
                Fixed a buggy implementation of an audio-to-text feature in the production app, eliminating unexpected behavior and crashes by implementing the Singleton Principle.
              </li>
              <li>
                Fostered community engagement and innovation by developing an{" "}
                <a
                  target="_blank"
                  href="https://pub.dev/packages/flutter_facebook_sdk"
                >
                  open-source plugin
                </a>{" "}
                supporting Android and iOS, garnering 100+ downloads and positive feedback from the Flutter and Dart community.
              </li>
              <li>
                Contributed to microservices development and maintenance using Spring Boot.
              </li>
              <li>
                Led serverless computing solutions with Google Cloud Functions.
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
                Led client requirement sessions, ensuring deep understanding of their expectations, with high client satisfaction levels.
              </li>
              <li>
                Optimized deployment workflows, streamlining processes and reducing deployment time.
              </li>
              <li>
                Configured third-party plugins to tailor functionality to specific requirements, ensuring optimal performance and user experience.
              </li>
              <li>
                Developed diverse platforms with CodeIgniter, WordPress, React Native, and React JS, showcasing expertise across frameworks.
              </li>
              <li>
                Led the development of mobile applications using React Native.
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
