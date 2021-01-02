import React, {useState, useEffect} from "react";
import "./Navbar.scss";

import ScrollReveal from 'scrollreveal';
import M from 'materialize-css'

export const Navbar = () => {
  const [slide, setSlide] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidenav, setSideNav] = useState();
  const [loadedOnce, setLoadedOnce] = useState(false);
 
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if(currentScrollY > lastScrollY){
      setSlide("-70px");
    }else{
      setSlide("0px");
    }
    setLastScrollY(currentScrollY);
    
  }

  const scroll = (element) => {
    let offSetTop = document.getElementById(element).offsetTop;
    window.scrollTo({
      top : offSetTop - 30,
      behavior : 'smooth'
    }); 
  }

  const reveal = (item) =>{
    ScrollReveal().reveal(item, {
      distance: '150%',
      origin: 'top',
      opacity: null
    });
    // item.style = {display:"block"};
    
  }

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll);
   
    let navigationItems = document.getElementsByClassName("nav-item")
    for(let key in navigationItems){
      let timeDelay = 50;
      setTimeout(() => {
        reveal(navigationItems[key]);
      }, timeDelay*(key+1))
     
    }
    if(!loadedOnce){
      var elems = document.querySelectorAll('.sidenav');
      let instance = (M.Sidenav.init(elems, []));
      console.log(instance);
      setSideNav(instance);
      console.log(sidenav);
      setLoadedOnce(true)
    }
    
  });

  
  return (
    <div className="navbar-fixed">
    <nav
      style={{
        transition: "0.5s ease",
        transform: `translate(0, ${slide})`
      }}
    >
      <div className="nav-wrapper">
        <div className="left">
          <a href="#!" className="brand-logo">
            Logo
          </a>
        </div>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger" >
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li  className="nav-item load-hidden">
            <a onClick={() => scroll("about")}>
              <code>01.</code> About
            </a>
          </li>
          <li className="nav-item load-hidden">
            <a onClick={() => scroll("experience")}>
              <code>02.</code> Experience
            </a>
          </li>
          <li className="nav-item load-hidden">
            <a onClick={() => scroll("about")}>
              <code>03.</code> Work
            </a>
          </li>
          <li className="nav-item load-hidden">
            <a onClick={() => scroll("contact")}>
              <code>04.</code> Contact
            </a>
          </li>
          <li className="nav-item load-hidden">
            <a className="waves-effect waves-light btn btn-resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li>
        <a onClick={() => scroll("about")}>
          <code>1.</code> About
        </a>
      </li>
      <li>
        <a onClick={() => scroll("experience")}>
          <code>2.</code> Experience
        </a>
      </li>
      <li>
        <a onClick={() => alert('saad')}>
          <code>3.</code> Work
        </a>
      </li>
      <li onClick={() => scroll("contact")}>
        <a >
          <code>4.</code> Contact
        </a>
      </li>
      <li>
        <a className="waves-effect waves-light btn btn-resume">Resume</a>
      </li>
    </ul>
  </div>
  )
}

  

