import classNames from "classnames";
import "./Section.css";

interface SectionProps {
  className?: string;
  isDark?: boolean;
  children: React.ReactNode;
}

const Section = ({ isDark = false, className, children }: SectionProps) => (
  <div
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
