import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import ClipPathTransition from "./components/clippathtransition/ClipPathTransition";
import CaseStudies from "./components/caseStudies/CaseStudies";
import AIPlaybook from "./components/aiPlaybook/AIPlaybook";

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
      <section id="AIPlaybook">
        <AIPlaybook />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
