import type { RefObject } from "react";
import classNames from "classnames";

import "./Section.css";

interface SectionProps {
  className?: string;
  isDark?: boolean;
  sectionRef?: RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const Section = ({
  isDark = false,
  className,
  sectionRef,
  children,
}: SectionProps) => (
  <div
    ref={sectionRef}
    className={classNames(
      "site-section-outer-wrapper",
      { "is-dark": isDark },
      className
    )}
  >
    <div className="site-section-inner-wrapper">{children}</div>
  </div>
);

export default Section;
