import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

import "./Experience.scss";

class Experience extends Component {
  state = {};
  render() {
    return (
      <section className="container " id="experience">
        <div className="container heading-container">
          <div className="row container">
            <h4 className="heading text-center" id="experienceheading">
              <code className="section-number">02.</code>Where I've worked
            </h4>
          </div>
        </div>
        <div className="row">
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>Xortox</Tab>
              <Tab>Szabist</Tab>
              <Tab>DIGITZ</Tab>
              <Tab>Ninja Strokes</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <h6>
                  Software Engineer 
                  <span className="red-text font-bold"> @ Xortox</span>
                </h6>
                <p>June 2012 - Present</p>
                <ul className="responsibilities">
                  <li>
                     WordPress Plugin Customization and Configuration
                  </li>
                  <li>
                    Developed and maintained code for clients using Codeigniter, HTML, CSS, JQuery, and Javascript.
                  </li>
                  <li>Optimized deployement process and implemented repository management using GIT.</li>
                  <li>
                    Developed mobile application for a client on React Native and deployed it on PlayStore.
                  </li>
                  <li></li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h6>
                  Research Assistant
                  <span className="red-text font-bold"> @ Szabist</span>
                </h6>
                <p>June 2019 - June 2020</p>

                <ul className="responsibilities">
                  <li>
                    Development and maintenance of web portal using WordPress to
                    showcase team's progress and achievements.
                  </li>
                  <li>
                    Data analysis and visualization of the data gathered from
                    CNC Machines.
                  </li>
                  <li>Development of predictive models.</li>
                  <li>
                    Development of a business intelligence solutions for the
                    gear industry using React JS.
                  </li>
                  <li>Development of Alumni Web Portal using ASP. Net.</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h6>
                  Intern / Junior Web Developer
                  <span className="red-text font-bold"> @ Digitz</span>
                </h6>
                <p>2017 November – 2018 January</p>

                <ul className="responsibilities">
                  <li>
                    Collaborative work with team on different websites including{" "}
                    <a href="http://ialsaatchi.com/" className="red-text">
                      http://ialsaatchi.com/
                    </a>
                    and{" "}
                    <a href="http://eva.com.pk/" className="red-text">
                      http://eva.com.pk/.
                    </a>
                  </li>
                  <li>
                    Provided IT support to the team during Karachi Eat 2017.
                  </li>
                  <li>
                    Research work on different chatbot frameworks and content
                    management systems.
                  </li>
                </ul>
              </TabPanel>

              <TabPanel>
                <h6>
                  Intern/Junior Software Developer
                  <span className="red-text font-bold"> @ Ninja Strokes</span>
                </h6>
                <p>2017 January– 2017 March</p>

                <ul className="responsibilities">
                  <li>Developed and maintained company's website</li>
                  <li>
                    Developed and maintained company's daily accounting solution
                    using Java and MySql
                  </li>
                </ul>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default Experience;
