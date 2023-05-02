import type { RefObject } from "react";

import Section from "./Section";

interface TeamProps {
  sectionRef: RefObject<HTMLDivElement>;
}

const Team = ({ sectionRef }: TeamProps) => (
  <Section sectionRef={sectionRef} isDark>
    <h2>Our team</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
      minima sunt dolor labore, velit asperiores reiciendis aliquid commodi
      vitae exercitationem suscipit dignissimos error tenetur eligendi accusamus
      expedita. Aut, nobis nesciunt.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
      minima sunt dolor labore, velit asperiores reiciendis aliquid commodi
      vitae exercitationem suscipit dignissimos error tenetur eligendi accusamus
      expedita. Aut, nobis nesciunt.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
      minima sunt dolor labore, velit asperiores reiciendis aliquid commodi
      vitae exercitationem suscipit dignissimos error tenetur eligendi accusamus
      expedita. Aut, nobis nesciunt.
    </p>
  </Section>
);

export default Team;
