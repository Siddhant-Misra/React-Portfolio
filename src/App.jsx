import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import ClipPathTransition from "./components/clippathtransition/ClipPathTransition";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Experience">
        <ClipPathTransition />
      </section>
      <section id="Branding">
        <Services />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
