import Section from "./Section";

import SplashImage from "./splash.jpg";

import "./Splash.css";

const Splash = () => (
  <div
    className="splash"
    style={{
      backgroundImage: `url(${SplashImage})`,
    }}
  >
    <div className="splash-inner-wrapper">
      <p>
        We’re <em>transforming</em> the image of what a tech professional looks
        like.
      </p>
      <p>
        We’re building Denmark’s best talent pipeline of <em>diverse</em>{" "}
        software engineers through cutting&#8209;edge <em>training</em> and{" "}
        <em>mentorship</em> for minoritized individuals.
      </p>
    </div>
  </div>
);

export default Splash;
