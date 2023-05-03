import { useState, useEffect, useRef, useCallback } from "react";
import type { RefObject } from "react";

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
    window.addEventListener("resize", windowChangeListener);

    return () => {
      window.removeEventListener("scroll", windowChangeListener);
      window.addEventListener("resize", windowChangeListener);
    };
  }, []);

  const onScrollToSection = useCallback(
    (sectionRef: RefObject<HTMLDivElement>) => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return {
    highlightedSectionIndex,
    missionSectionRef,
    curriculumSectionRef,
    teamSectionRef,
    supportSectionRef,
    onScrollToSection,
  };
};

export default useNavigationHighlight;
