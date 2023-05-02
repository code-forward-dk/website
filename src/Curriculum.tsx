import type { RefObject } from "react";

import Section from "./Section";

import { ReactComponent as Education } from "./education.svg";
import { ReactComponent as Projects } from "./projects.svg";
import { ReactComponent as Internships } from "./internships.svg";

import "./Curriculum.css";

interface CurriculumProps {
  sectionRef: RefObject<HTMLDivElement>;
}

// TODO: Replace images

const Curriculum = ({ sectionRef }: CurriculumProps) => (
  <Section sectionRef={sectionRef}>
    <h2>Our curriculum</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis provident
      maxime, officia reprehenderit ratione laboriosam, sunt consequatur esse
      adipisci debitis deserunt ad et doloribus veniam est id. Aliquid, itaque
      assumenda.
    </p>
    <div className="curriculum-overview">
      <div>
        <Education width={240} height={240} />
        <h3>Education</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          deserunt tempore voluptatem dolore cupiditate, eum quam saepe,
          voluptates soluta, reprehenderit voluptatum autem id sint! Totam
          reiciendis praesentium quaerat non corrupti.
        </p>
      </div>
      <div>
        <Projects width={240} height={240} />
        <h3>Projects</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          deserunt tempore voluptatem dolore cupiditate, eum quam saepe,
          voluptates soluta, reprehenderit voluptatum autem id sint! Totam
          reiciendis praesentium quaerat non corrupti.
        </p>
      </div>
      <div>
        <Internships width={240} height={240} />
        <h3>Internships</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          deserunt tempore voluptatem dolore cupiditate, eum quam saepe,
          voluptates soluta, reprehenderit voluptatum autem id sint! Totam
          reiciendis praesentium quaerat non corrupti.
        </p>
      </div>
    </div>
  </Section>
);

export default Curriculum;
