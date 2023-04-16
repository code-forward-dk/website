import Logo from "./Logo";

import "./Header.css";

const Header = () => (
  <header className="site-header">
    <div className="site-header-inner-wrapper">
      <div className="logo-wrapper">
        <h1>
          <Logo />
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <button>Mission</button>
          </li>
          <li>
            <button>Curriculum</button>
          </li>
          <li>
            <button>Team</button>
          </li>
          <li>
            <button className="accent">Support</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
