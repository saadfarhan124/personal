import React from "react";
import "./Navbar.scss";
import anime from "animejs/lib/anime.es.js";

class Navbar extends React.Component {
  state = {
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
    shouldHideNav: true
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  // componentDidMount() {
  //   // anime({
  //   //   targets: ".hide-on-med-and-down>li",
  //   //   translateY: 50
  //   // });
  // }

  handleScroll = () => {
    const { lastScrollY, shouldHideNav } = this.state;
    const currentScrollY = window.scrollY;
    if (shouldHideNav) {
      if (currentScrollY > lastScrollY) {
        this.setState({ slide: "-70px" });
      } else {
        this.setState({ slide: "0px" });
      }
      this.setState({ lastScrollY: currentScrollY });
    }
  };

  scroll = function(ele) {
    let offsetTop = document.getElementById(ele).offsetTop;

    window.scrollTo({
      top: offsetTop - 30,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <div className="navbar-fixed">
        <nav
          style={{
            transition: "0.5s ease",
            transform: `translate(0, ${this.state.slide})`
          }}
        >
          <div className="nav-wrapper">
            <div className="left">
              <a href="#!" className="brand-logo">
                Logo
              </a>
            </div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a onClick={() => this.scroll("about")}>
                  <code>01.</code> About
                </a>
              </li>
              <li>
                <a onClick={() => this.scroll("experience")}>
                  <code>02.</code> Experience
                </a>
              </li>
              <li>
                <a href="sass.html">
                  <code>03.</code> Work
                </a>
              </li>
              <li>
                <a href="sass.html">
                  <code>04.</code> Contact
                </a>
              </li>
              <li>
                <a className="waves-effect waves-light btn btn-resume">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">
              <code>1.</code> About
            </a>
          </li>
          <li>
            <a href="sass.html">
              <code>2.</code> Experience
            </a>
          </li>
          <li>
            <a href="sass.html">
              <code>3.</code> Work
            </a>
          </li>
          <li>
            <a href="sass.html">
              <code>4.</code> Contact
            </a>
          </li>
          <li>
            <a className="waves-effect waves-light btn btn-resume">Resume</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
