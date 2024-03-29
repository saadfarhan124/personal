import React from "react";
import "./Projects.scss";

const Projects = () => {
  const mapToSpan = (list) => {
    return list.map((item) => <span>{item}</span>);
  };
  const USDoctorsTechList = [
    "CodeIgniter",
    "PHP",
    "JQuery",
    "AJAX",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const USDoctorsSpanItems = mapToSpan(USDoctorsTechList);

  const SathChalooTechList = [
    "Android",
    "Firebase",
    "Kotlin",
    "Google Services",
    "React JS",
  ];
  const SathChaloopanItems = mapToSpan(SathChalooTechList);

  const XtremeHardwareechList = ["WordPress", "WooCommerce", "WP Page Builder"];
  const XtremeHardwareItems = mapToSpan(XtremeHardwareechList);

  const CDL1000TechList = [
    "NextJS",
    "Go Fiber",
    "PostgreSQL",
    "GCP",
    "Cloud Run",
    "Cloud Build",
    "Julia Lang",
    "Genie Framework",
  ];
  const CDLItems = mapToSpan(CDL1000TechList);

  const StanleyTechList = [
    "Python",
    "Electron JS",
    "JavaScript",
    "Pandas",
    "TMDB API",
    "HTML",
    "CSS",
  ];
  const StanleyItems = mapToSpan(StanleyTechList);

  return (
    <section className="container" id="projects">
      <div className="container heading-container">
        <div className="row">
          <div className="col m12 s12">
            <h4 className="heading text-center " id="projectheading">
              <code className="section-number">02.</code>Projects
            </h4>
          </div>
        </div>
      </div>

      <div className="row mt-20 flex project ">
        <div className="col s12 m8 l8">
          <img
            className="responsive-img project-image"
            src="/assets/cdl1000.png"
          ></img>
        </div>
        <div className="col s12 m4 l4 right">
          <div className="valign-wrapper full-height">
            <div className="valign">
              <h5 className="right-align">CDL1000 Quoting</h5>
              <div className="card-wrapper">
                <div className="card right-overlap">
                  <div className="card-content">
                    <p>
                      This web-based quoting engine enables customers to book
                      Drayage or Truckload shipments and make payments online or
                      later through Stripe invoicing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="technologies">
                <div className="row">
                  <ul>
                    {CDLItems.map((item, key) => (
                      <li className={key}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://cdl1000.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-20 flex project text-and-image-container">
        <div className="col s12 m4 l4 ">
          <div className="valign-wrapper full-height">
            <div className="valign">
              <h5 className="left-align">Sath Chaloo</h5>

              <div className="card left-overlap">
                <div className="card-content">
                  <p>
                    Ride Hailing Startup based in karachi. My key
                    responsibilities included developing and maintaining
                    multiple android and web apps
                  </p>
                </div>
              </div>
              <div className="technologies">
                <div className="row">
                  <ul>
                    {SathChaloopanItems.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://nervous-williams-8bb2c4.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=sathchaloo.com.prototype"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-google-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m8 l8">
          <img
            className="responsive-img project-image inverted"
            src="/assets/sathchaloo.png"
          ></img>
        </div>
      </div>

      <div className="row mt-20 flex project ">
        <div className="col s12 m8 l8">
          <img
            className="responsive-img project-image"
            src="/assets/usdoctors.png"
          ></img>
        </div>
        <div className="col s12 m4 l4 right">
          <div className="valign-wrapper full-height">
            <div className="valign">
              <h5 className="right-align">USDoctors</h5>
              <div className="card-wrapper">
                <div className="card right-overlap">
                  <div className="card-content">
                    <p>
                      An E-Learning Platform connecting Preceptors from all over
                      the US to physcians in training
                    </p>
                  </div>
                </div>
              </div>

              <div className="technologies">
                <div className="row">
                  <ul>
                    {USDoctorsSpanItems.map((item, key) => (
                      <li className={key}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-20 flex project text-and-image-container">
        <div className="col s12 m4 l4 ">
          <div className="valign-wrapper full-height">
            <div className="valign">
              <h5 className="left-align">Stanley</h5>

              <div className="card left-overlap">
                <div className="card-content">
                  <p>
                    My final year and first project that I led to completion on
                    my own. A simple command based desktop application that
                    generates movie recommendations based on your previous
                    choices.
                  </p>
                </div>
              </div>
              <div className="technologies">
                <div className="row">
                  <ul>
                    {StanleyItems.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://github.com/saadfarhan124/Stanley"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m8 l8">
          <img
            className="responsive-img project-image inverted"
            src="/assets/stanley.png"
          ></img>
        </div>
      </div>

      <div className="row mt-20 flex project">
        <div className="col s12 m8 l68">
          <img
            className="responsive-img project-image"
            src="/assets/xtreme.png"
          ></img>
        </div>
        <div className="col s12 m4 l4 ">
          <div className="valign-wrapper full-height">
            <div className="valign">
              <h5 className="right-align">Xtreme Hardware</h5>

              <div className="card right-overlap">
                <div className="card-content">
                  <p>
                    An E-Commerce based startup providing computer hardware to
                    people all over Pakistan.
                  </p>
                </div>
              </div>
              <div className="technologies">
                <div className="row">
                  <ul>
                    {XtremeHardwareItems.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://xtremehardware.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container heading-container">
        <div className="row">
          <div className="col m12 s12">
            <h4 className="heading text-center " id="otherprojectheading">
              Other projects that I've worked on
            </h4>
          </div>
        </div>
      </div>
      <div className="row arhive">
        <div className="col s12 m4 l4">
          <div className="card small">
            <div className="card-content white-text">
              <div className="row">
                <div className="col icons s12">
                  <i className="far fa-folder"></i>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col s12">
                  <span className="card-title">Flutter Facebook SDK</span>
                  <p>
                    A Flutter plugin used to fetch Facebook deep links and log
                    app events
                  </p>
                  <div className="links mt-5">
                    <ul>
                      <li>Dart</li>
                      <li>Kotlin</li>
                      <li>Swift</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://pub.dev/packages/flutter_facebook_sdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/saadfarhan124/flutter_facebook_sdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4 l4">
          <div className="card small">
            <div className="card-content white-text">
              <div className="row">
                <div className="col icons s12">
                  <i className="far fa-folder"></i>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col s12">
                  <span className="card-title">Reddit Data Scrapper</span>
                  <p>
                    Reddit scrapper built using PRAW API that fetches posts,
                    comments and replies
                  </p>
                  <div className="links mt-5">
                    <ul>
                      <li>Python</li>
                      <li>PRAW</li>
                      <li>Selenium</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <a
                    href="https://github.com/saadfarhan124/Reddit-Data-Scrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4 l4">
          <div className="card small">
            <div className="card-content white-text">
              <div className="row">
                <div className="col icons s12">
                  <i className="far fa-folder"></i>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col s12">
                  <span className="card-title">Anonymous Social</span>
                  <p>WebApp that allows users to post data anonymously</p>
                  <div className="links mt-5">
                    <ul>
                      <li>Express JS</li>
                      <li>Node JS</li>
                      <li>Mongo DB</li>
                      <li>Jade</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://github.com/saadfarhan124/Node-Minimal-Social-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://anonymous-social.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row arhive">
        <div className="col s12 m4 l4">
          <div className="card small">
            <div className="card-content white-text">
              <div className="row">
                <div className="col icons s12">
                  <i className="far fa-folder"></i>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col s12">
                  <span className="card-title">Instagram Downloader</span>
                  <p>A Python based utility to download Instagram Posts</p>
                  <div className="links mt-5">
                    <ul>
                      <li>Python</li>
                      <li>Selenium</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://github.com/saadfarhan124/Instagram-Downloader"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m4 l4">
          <div className="card small">
            <div className="card-content white-text">
              <div className="row">
                <div className="col icons s12">
                  <i className="far fa-folder"></i>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col s12">
                  <span className="card-title">Alumni Portal</span>
                  <p>
                    Portal to keep track of Alumni's informations and their job
                    experiences.
                  </p>
                  <div className="links mt-5">
                    <ul>
                      <li>ASP.NET</li>
                      <li>Entity Framework</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://github.com/saadfarhan124/Alumni-Portal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m4 l4">
          <div className="card small">
            <div className="card-content white-text">
              <div className="row">
                <div className="col icons s12">
                  <i className="far fa-folder"></i>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col s12">
                  <span className="card-title">WordPress Automation</span>
                  <p>
                    Python utility to create WordPress Pages from a txt file
                  </p>
                  <div className="links mt-5">
                    <ul>
                      <li>Python</li>
                      <li>Selenium</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="links mt-5">
                <ul>
                  <li>
                    <a
                      href="https://github.com/saadfarhan124/WordPress-Page-Automations"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
