import React from 'react';
import logo from '../logo.svg';
import {} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/App.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="footer" className = "footer fluid">
          <a target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/dimitrios-nikitopoulos-343404137/">
            <FontAwesomeIcon icon = {faLinkedin} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href = "https://github.com/dimitronikito">
            <FontAwesomeIcon icon = {faGithub} />
          </a>
          <img src = {logo} className = "App-logo" alt="built with react" title="built with react"/>
          <p className="lead" id="foot-desc"> Built with React for Chrome </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
