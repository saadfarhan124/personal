import React from "react";
import "./LeftPane.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';


export const LeftPane = () => (
  <div id="leftpane" className="leftPane load-hidden hide-on-small-only">
    <ul className="socials">
   
      <li>
        {/* github */}
        <a href="https://github.com/saadfarhan124" rel="noopener noreferrer" target="_blank" className="social">
          <FontAwesomeIcon icon={faGithub}  size="lg"/>
        </a>
      </li>
      <li>
        <a href="https://medium.com/@saadfarhan124" rel="noopener noreferrer" target="_blank" className="social">
          <FontAwesomeIcon icon={faMedium}  size="lg"/>
        </a>
      </li>
      <li>
        {/* {linkedin} */}
        <a href="https://www.linkedin.com/in/saadfarhan124/" rel="noopener noreferrer" target="_blank" className="social">
          <FontAwesomeIcon icon={faLinkedin}  size="lg"/>        
        </a>
      </li>
      <li>
        {/* {Facebook} */}

        <a href="https://www.facebook.com/SaadFarhan12" rel="noopener noreferrer" target="_blank" className="social">
          <FontAwesomeIcon icon={faFacebook}  size="lg"/>
        </a>
      </li>
    </ul>
  </div>
);
