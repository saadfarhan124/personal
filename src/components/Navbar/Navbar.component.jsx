import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import ScrollReveal from "scrollreveal";

export const Navbar = () => {
  const [slide, setSlide] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loadedOnce, setLoadedOnce] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setSlide("-70px");
    } else {
      setSlide("0px");
    }
    setLastScrollY(currentScrollY);
  };

  const scroll = (element) => {
    let offSetTop = document.getElementById(element).offsetTop;
    window.scrollTo({
      top: offSetTop - 30,
      behavior: "smooth",
    });
  };

  const reveal = (item, type = "move") => {
    if (type === "move") {
      ScrollReveal().reveal(item, {
        distance: "150%",
        origin: "top",
        opacity: null,
        reset: false,
      });
    } else {
      ScrollReveal().reveal(item, {
        distance: "50px",
        duration: 1000,
        easing: "ease",
        mobile: true,
        reset: true,
        viewFactor: 0.4,
        reset: false,
      });
    }
  };

  const revealWithTimeout = (id, timeDelay = 2000) => {
    setTimeout(() => {
      reveal(document.getElementById(id), "fade-in");
    }, timeDelay);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (!loadedOnce) {
      let navigationItems = document.getElementsByClassName("nav-item");
      var timeDelay = 35;
      for (let key in navigationItems) {
        setTimeout(() => {
          reveal(navigationItems[key]);
        }, timeDelay * (key + 1));
      }

      // timeDelay = 2000;
      revealWithTimeout("landing");
      revealWithTimeout("leftpane");
      revealWithTimeout("rightpane");
      revealWithTimeout("about");
      // reveal(document.getElementById("projects"), "fade-in");
      revealWithTimeout("experience");
      revealWithTimeout("testimonials");
      revealWithTimeout("contact");

      setLoadedOnce(true);
    }
  });

  return (
    <div>
      <div className="navbar-fixed">
        <nav
          style={{
            transition: "0.5s ease",
            transform: `translate(0, ${slide})`,
          }}
        >
          <div className="nav-wrapper">
            <div className="left">
              <a href="#!" className="brand-logo">
                <img src="/assets/logo-blue.png" alt="" />
              </a>
            </div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="nav-item load-hidden">
                <a onClick={() => scroll("about")}>
                  <code>01.</code> About
                </a>
              </li>

              <li className="nav-item load-hidden">
                <a onClick={() => scroll("projects")}>
                  <code>02.</code> Work
                </a>
              </li>
              <li className="nav-item load-hidden">
                <a onClick={() => scroll("experience")}>
                  <code>03.</code> Experience
                </a>
              </li>
              <li className="nav-item load-hidden">
                <a onClick={() => scroll("testimonials")}>
                  <code>04.</code> Testimonials
                </a>
              </li>
              <li className="nav-item load-hidden">
                <a onClick={() => scroll("contact")}>
                  <code>05.</code> Contact
                </a>
              </li>
              <li className="nav-item load-hidden">
                <a
                  // https://drive.google.com/file/d/1DFCvsHnHKLKGW9tOYV1knSrbNKtV7DJM/view?usp=sharing
                  // https://drive.google.com/file/d/1NozNT3Ha3AqnhggKZxBap5RVN3KBd3WL/view?usp=sharing
                  href="https://drive.google.com/uc?export=download&id=1NozNT3Ha3AqnhggKZxBap5RVN3KBd3WL"
                  download
                  className="waves-effect waves-light btn btn-resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a onClick={() => scroll("about")}>
            <code>1.</code> About
          </a>
        </li>
        <li>
          <a onClick={() => scroll("projects")}>
            <code>2.</code> Work
          </a>
        </li>
        <li>
          <a onClick={() => scroll("experience")}>
            <code>3.</code> Experience
          </a>
        </li>
        <li>
          <a onClick={() => scroll("testimonials")}>
            <code>4.</code> Testimonials
          </a>
        </li>

        <li onClick={() => scroll("contact")}>
          <a>
            <code>5.</code> Contact
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=1DFCvsHnHKLKGW9tOYV1knSrbNKtV7DJM"
            download
            className="waves-effect waves-light btn btn-resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
