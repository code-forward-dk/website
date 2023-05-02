import type { RefObject } from "react";

import Splash from "./Splash";
import Mission from "./Mission";
import Curriculum from "./Curriculum";
import Team from "./Team";
import Donate from "./Donate";
import Contact from "./Contact";

interface MainProps {
  missionSectionRef: RefObject<HTMLDivElement>;
  curriculumSectionRef: RefObject<HTMLDivElement>;
  teamSectionRef: RefObject<HTMLDivElement>;
  supportSectionRef: RefObject<HTMLDivElement>;
}

const Main = ({
  missionSectionRef,
  curriculumSectionRef,
  teamSectionRef,
  supportSectionRef,
}: MainProps) => (
  <main className="site-main">
    <Splash />
    <Mission sectionRef={missionSectionRef} />
    <Curriculum sectionRef={curriculumSectionRef} />
    <Team sectionRef={teamSectionRef} />
    <Donate sectionRef={supportSectionRef} />
    <Contact />
  </main>
);

export default Main;
