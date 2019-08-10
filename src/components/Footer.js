import React from 'react';
import logo from '../logo.svg';
import {} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className = "footer">
          <a href = "https://www.linkedin.com/in/dimitrios-nikitopoulos-343404137/">
          <FontAwesomeIcon icon = {faLinkedin} />
          </a>
          <a href = "https://github.com/dimitronikito">
          <FontAwesomeIcon icon = {faGithub} />
          </a>
          <img src = {logo} className = "App-logo" alt="built with react" title="built with react"/>
        </div>
      </footer>
    )
  }
}

export default Footer;
