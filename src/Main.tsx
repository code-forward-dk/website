import Splash from "./splash.jpg";

import "./Main.css";

const Main = () => (
  <main className="site-main">
    <div className="site-main-inner-wrapper">
      <h2>Our mission</h2>
      <p>
        Our mission is to empower minoritized individuals in Denmark to succeed
        in the tech industry by providing accessible, high-quality front-end
        development education and internship opportunities. Through our
        partnership with leading IT companies, we aim to promote diversity and
        inclusion in the tech sector, and support the professional growth and
        success of our participants.
      </p>
    </div>
    <div className="splash" style={{ backgroundImage: `url(${Splash})` }}>
      <button>Apply now</button>
    </div>
  </main>
);

export default Main;
