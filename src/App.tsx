import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import useNavigationHighlight from "./useNavigationHighlight";

import "./App.css";

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
