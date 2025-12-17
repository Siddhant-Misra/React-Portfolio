import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import ClipPathTransition from "./components/clipPathTransition/ClipPathTransition";
import CaseStudies from "./components/caseStudies/CaseStudies";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Hero />
      </section>
      <section id="Experience">
        <ClipPathTransition />
      </section>
      <section id="CaseStudies">
        <CaseStudies />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
