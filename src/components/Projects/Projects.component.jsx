import React from 'react';
import "./Projects.scss";


const Projects = () => {

    const mapToSpan = (list) => {
        return  list.map((item) => (
            <span>{item}</span>
        ));
    }
    const USDoctorsTechList = ["CodeIgniter", "PHP", "JQuery", "AJAX", "JavaScript",
                                "HTML", "CSS"];
    const USDoctorsSpanItems = mapToSpan(USDoctorsTechList);

    const SathChalooTechList = ["Android", "Firebase", "Kotlin", "Google Services", "React JS",];
    const SathChaloopanItems = mapToSpan(SathChalooTechList);

    const XtremeHardwareechList = ["WordPress", "WooCommerce", "WP Page Builder"];
    const XtremeHardwareItems = mapToSpan(XtremeHardwareechList);

    const StanleyTechList = ["Python", "Electron JS", "JavaScript", "Pandas",
                            "TMDB API", "HTML", "CSS"];
    const StanleyItems = mapToSpan(StanleyTechList);
   
    return(
        <section className="container" id="projects">
            <div className="container heading-container">
                <div className="row">
                    <div className="col m12 s12">
                    <h4 className="heading text-center hvr-underline-from-center" id="experienceheading">
                        <code className="section-number">02.</code>Projects
                    </h4>
                    </div>
                </div>
            </div>
            {/* <div className="container"> */}
                <div className="row mt-20 flex project ">
                    <div className="col s12 m8 l8">
                        <img className="responsive-img project-image" src="/assets/usdoctors.png"></img>
                    </div>
                    <div className="col s12 m4 l4 right">
                        <div className="valign-wrapper full-height">
                            <div className="valign">
                                <h4 className="right-align">USDoctors</h4>
                                <div className="card-wrapper">
                                    <div className="card right-overlap">
                                        <div className="card-content">
                                            <p>An E-Learning Platform connecting Preceptors from all over the US to physcians in training</p>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="technologies">
                                    <div className="row">
                                        <ul>
                                            {USDoctorsSpanItems.map((item) => (
                                                <li >{item}</li>
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
                                <h4 className="left-align">Sath Chaloo</h4>

                                <div className="card left-overlap">

                                    <div className="card-content">
                                        <p>Ride Hailing Startup based in karachi. My key responsibilities included developing and maintaining multiple android and web apps</p>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="row">
                                         <ul>
                                            {SathChaloopanItems.map((item) => (
                                                <li >{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="links mt-5">
                                    <ul>
                                        <li><i className="fa fa-external-link-alt"></i></li>
                                        <li><i className="fab fa-google-play"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m8 l8">
                        <img className="responsive-img project-image inverted" src="/assets/sathchaloo.png"></img>
                    </div>
                </div>
                <div className="row mt-20 flex project">
                    <div className="col s12 m8 l68">
                        <img className="responsive-img project-image" src="/assets/xtreme.png"></img>
                    </div>
                    <div className="col s12 m4 l4 ">
                        <div className="valign-wrapper full-height">
                            <div className="valign">
                                <h4 className="right-align">Xtreme Hardware</h4>

                                <div className="card right-overlap">
                                    <div className="card-content">
                                        <p>An E-Commerce based startup providing computer hardware to people all over Pakistan.</p>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="row">
                                        <ul>
                                            {XtremeHardwareItems.map((item) => (
                                                <li >{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="links mt-5">
                                    <ul>
                                        <li> <i className="fa fa-external-link-alt"></i></li>
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
                                <h4 className="left-align">Stanley</h4>

                                <div className="card left-overlap">
                                    <div className="card-content">
                                        <p>My final year and first project that I led to completion on my own. A simple command based desktop application that generates movie recommendations based on your previous choices.</p>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="row">
                                        <ul>
                                            {StanleyItems.map((item) => (
                                                <li >{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="links mt-5">
                                    <ul>
                                        <li><i class="fab fa-github"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m8 l8">
                        <img className="responsive-img project-image" src="/assets/sathchaloo.png"></img>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}

export default Projects;