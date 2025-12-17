import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const navLinks = [
    { name: "Home", href: "#Homepage" },
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Case Studies", href: "#CaseStudies" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <div className="hero-section">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <nav className="sidebar__nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="sidebar__link">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="sidebar__bottom">
          <div className="sidebar__social">
            <a
              href="https://www.linkedin.com/in/siddhant-misra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Siddhant-Misra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.png" alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
          <a
            href="/Siddhant_Misra.pdf"
            download="Siddhant_Misra.pdf"
            target="_blank"
            className="sidebar__resume"
          >
            Download Resume
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-intro">
          <div className="hero-intro__image">
            <img src="/hero2.jpg" alt="Siddhant Misra" />
          </div>
          <div className="hero-intro__text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Siddhant Misra
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Product Manager
            </motion.h2>
            <motion.p
              className="hero-intro__hook"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Scaling ML-powered analytics to 20K+ users. Previously shipped for
              U.S. Army, Booz Allen, and AstraZeneca.
            </motion.p>
          </div>
        </div>

        {/* About Section */}
        <motion.section
          id="About"
          className="about-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>About</h3>
          <div className="about-section__content">
            <p>
              I'm a Product Manager with 6+ years of experience building 0→1
              products across healthcare, enterprise, and consumer domains. I
              have a full-stack engineering background, which means I can
              prototype, ship fast, and speak fluently with engineering teams.
            </p>
            <p>
              Currently, I'm the founding PM at a stealth startup building
              ML-powered esports analytics. Previously, I led product for
              enterprise clients at Inhance Digital, delivering virtual
              experiences and HIPAA-compliant tools.
            </p>
            <p>
              I'm looking for PM roles where I can own ambiguous problems, ship
              quickly, and drive measurable impact.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Hero;
