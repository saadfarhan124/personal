import React, {useEffect} from "react";
import "./App.css";
import {Navbar} from "./components/Navbar/Navbar.component";
import { Landing } from "./components/Landing/Landing.component";
import { LeftPane } from "./components/LeftPane/LeftPane.component";
import { RightPane } from "./components/RightPane/RightPane.component";
import { Footer } from "./components/Footer/Footer.component";
import { About } from "./components/About/About.component";
import { Contact } from "./components/Contact/Contact.component";
import { Reviews } from "./components/Reviews/Reviews.component";

import Projects from "./components/Projects/Projects.component";

import Experience from "./components/Experience/Experience.component";

function App() {
  useEffect(()=>{
    // var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, []);
  })
  return (
    <div className="App" id="fullpage">
      <Navbar />
      <RightPane />
      <LeftPane />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
