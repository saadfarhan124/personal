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
              <h4 className="heading text-center hvr-underline-from-center" id="experienceheading">
                  <code className="section-number">03.</code>Where I've worked
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs experience-tabs">
              <li className="tab col s3"><a className="active" href="#xortox">Xortox</a></li>
              <li className="tab col s3"><a href="#szabist">Szabist</a></li>
              <li className="tab col s3 "><a href="#digitz">DIGITZ</a></li>
              <li className="tab col s3"><a href="#ninjaStrokes">Ninja Strokes</a></li>
            </ul>
          </div>
          <div id="xortox" className="col s12 center-align exp-col">
            <h6>
              Software Engineer 
              <span className="font-bold"> @ Xortox</span>
            </h6>
            <p>July 2020 - Present</p>
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
          <div id="digitz" className="col s12 center-align exp-col">
            <h6>
              Intern
              <span className="font-bold"> @ Digitz</span>
            </h6>
            <p>2017 November – 2018 January</p>

            <ul className="responsibilities">
              <li>
                Collaborative work with team on different websites including{" "}
                <a href="http://ialsaatchi.com/" className="blue-tint">
                  http://ialsaatchi.com/
                </a>
                and{" "}
                <a href="http://eva.com.pk/" className="blue-tint">
                  http://eva.com.pk/.
                </a>
              </li>
              <li>
                Research work on different technologies.
              </li>
              <li>
                Multiple chatbots development for different clients seeking to improve their social
                networking platform.
              </li>
            </ul>
          </div>
          <div id="ninjaStrokes" className="col s12 center-align exp-col">
            <h6>
              Intern
              <span className=" font-bold"> @ Ninja Strokes</span>
            </h6>
            <p>2017 January– 2017 March</p>

            <ul className="responsibilities">
              <li>Developed and maintained company's website.</li>
              <li>
                Developed and maintained company's daily accounting solution
                using Java and MySql.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* <Tabs defaultIndex={0}>
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
          </Tabs> */}
        </div>
      </section>
    );
  }
}

export default Experience;
