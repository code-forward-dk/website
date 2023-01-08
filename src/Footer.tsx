import {
  FaLinkedinIn,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import Logo from "./Logo";

import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner-wrapper">
      <div>
        <div>
          <Logo />
        </div>
        <address>
          Else Alfelts Vej 52B
          <br />
          2300 Copenhagen, Denmark
        </address>
      </div>
      <div>
        <nav className="social-media-links">
          <ul>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
