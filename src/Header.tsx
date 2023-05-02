import classNames from "classnames";

import Logo from "./Logo";

import "./Header.css";

interface HeaderProps {
  highlightedSectionIndex: number;
}

const Header = ({ highlightedSectionIndex }: HeaderProps) => (
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
            <button
              className={classNames({
                highlighted: highlightedSectionIndex === 0,
              })}
            >
              Mission
            </button>
          </li>
          <li>
            <button
              className={classNames({
                highlighted: highlightedSectionIndex === 1,
              })}
            >
              Curriculum
            </button>
          </li>
          <li>
            <button
              className={classNames({
                highlighted: highlightedSectionIndex === 2,
              })}
            >
              Team
            </button>
          </li>
          <li>
            <button
              className={classNames("accent", {
                highlighted: highlightedSectionIndex === 3,
              })}
            >
              Support
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
