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
    </div>
  </header>
);

export default Header;
