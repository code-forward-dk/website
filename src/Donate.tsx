import type { RefObject } from "react";

import Section from "./Section";

interface DonateProps {
  sectionRef: RefObject<HTMLDivElement>;
}

const Donate = ({ sectionRef }: DonateProps) => (
  <Section sectionRef={sectionRef}>
    <h2>Support us</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
      minima sunt dolor labore, velit asperiores reiciendis aliquid commodi
      vitae exercitationem suscipit dignissimos error tenetur eligendi accusamus
      expedita. Aut, nobis nesciunt.
    </p>
  </Section>
);

export default Donate;
