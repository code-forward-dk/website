import { useState, useEffect, useRef } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./App.css";

const useNavigationHighlight = () => {
  const missionSectionRef = useRef<HTMLDivElement>(null);
  const curriculumSectionRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const supportSectionRef = useRef<HTMLDivElement>(null);

  const [highlightedSectionIndex, setHighlightedSectionIndex] = useState(0);

  useEffect(() => {
    const windowChangeListener = () => {
      const threshold = Math.min(200, window.innerHeight / 4);
      const scrollPosition = window.innerHeight + window.scrollY;

      if (
        missionSectionRef.current === null ||
        curriculumSectionRef.current === null ||
        teamSectionRef.current === null ||
        supportSectionRef.current === null
      ) {
        return;
      }

      setHighlightedSectionIndex(
        Math.max(
          [
            scrollPosition - missionSectionRef.current.offsetTop >= threshold,
            scrollPosition - curriculumSectionRef.current.offsetTop >=
              threshold,
            scrollPosition - teamSectionRef.current.offsetTop >= threshold,
            scrollPosition - supportSectionRef.current.offsetTop >= threshold,
          ].filter(Boolean).length - 1,
          0
        )
      );
    };

    window.addEventListener("scroll", windowChangeListener);

    return () => {
      window.removeEventListener("scroll", windowChangeListener);
    };
  }, []);

  return {
    highlightedSectionIndex,
    missionSectionRef,
    curriculumSectionRef,
    teamSectionRef,
    supportSectionRef,
  };
};

const App = () => {
  const {
    highlightedSectionIndex,
    missionSectionRef,
    curriculumSectionRef,
    teamSectionRef,
    supportSectionRef,
  } = useNavigationHighlight();

  return (
    <div className="site">
      <Header highlightedSectionIndex={highlightedSectionIndex} />
      <Main
        missionSectionRef={missionSectionRef}
        curriculumSectionRef={curriculumSectionRef}
        teamSectionRef={teamSectionRef}
        supportSectionRef={supportSectionRef}
      />
      <Footer />
    </div>
  );
};

export default App;
