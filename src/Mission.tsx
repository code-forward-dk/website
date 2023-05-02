import type { RefObject } from "react";

import Section from "./Section";

interface MissionProps {
  sectionRef: RefObject<HTMLDivElement>;
}

const Mission = ({ sectionRef }: MissionProps) => (
  <Section sectionRef={sectionRef} isDark>
    <h2>Our mission</h2>
    <p>
      We empower minoritized individuals in Denmark to succeed in the tech
      industry by providing accessible, high-quality web development education
      and internship opportunities. Through our partnership with leading tech
      companies, we aim to promote diversity and inclusion in the tech sector,
      and support the professional growth and success of our participants.
    </p>
  </Section>
);

export default Mission;
