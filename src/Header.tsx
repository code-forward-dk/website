import type { RefObject } from "react";
import classNames from "classnames";

import Logo from "./Logo";

import "./Header.css";

interface HeaderProps {
  highlightedSectionIndex: number;
  missionSectionRef: RefObject<HTMLDivElement>;
  curriculumSectionRef: RefObject<HTMLDivElement>;
  teamSectionRef: RefObject<HTMLDivElement>;
  supportSectionRef: RefObject<HTMLDivElement>;
  onScrollToSection: (sectionRef: RefObject<HTMLDivElement>) => void;
}

const Header = ({
  highlightedSectionIndex,
  missionSectionRef,
  curriculumSectionRef,
  teamSectionRef,
  supportSectionRef,
  onScrollToSection,
}: HeaderProps) => (
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
              onClick={() => {
                onScrollToSection(missionSectionRef);
              }}
            >
              Mission
            </button>
          </li>
          <li>
            <button
              className={classNames({
                highlighted: highlightedSectionIndex === 1,
              })}
              onClick={() => {
                onScrollToSection(curriculumSectionRef);
              }}
            >
              Curriculum
            </button>
          </li>
          <li>
            <button
              className={classNames({
                highlighted: highlightedSectionIndex === 2,
              })}
              onClick={() => {
                onScrollToSection(teamSectionRef);
              }}
            >
              Team
            </button>
          </li>
          <li>
            <button
              className={classNames("accent", {
                highlighted: highlightedSectionIndex === 3,
              })}
              onClick={() => {
                onScrollToSection(supportSectionRef);
              }}
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
