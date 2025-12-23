import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AIPlaybook from "../components/aiPlaybook/AIPlaybook";
import "../components/hero/hero.scss";

const AIPlaybookPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/#Homepage", isRoute: true },
    { name: "About", href: "/#About", isRoute: true },
    { name: "Experience", href: "/#Experience", isRoute: true },
    { name: "Case Studies", href: "/#CaseStudies", isRoute: true },
    { name: "AI Playbook", href: "/ai-playbook", isRoute: false, active: true },
    { name: "Contact", href: "/#Contact", isRoute: true },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.isRoute) {
      // Extract the hash from href (e.g., "/#About" -> "About")
      const hash = link.href.split('#')[1];
      navigate('/');
      // Scroll to the element after navigation
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const drawerVariants = {
    closed: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="hero-section" style={{ minHeight: "100vh" }}>
      {/* Mobile Header */}
      <div className="mobile-header">
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              className="mobile-drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <button
                className="mobile-drawer__close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
              <nav className="mobile-drawer__nav">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`mobile-drawer__link ${link.active ? "mobile-drawer__link--active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link);
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span
                      key={link.name}
                      className={`mobile-drawer__link ${link.active ? "mobile-drawer__link--active" : ""}`}
                    >
                      {link.name}
                    </span>
                  )
                ))}
              </nav>
              <div className="mobile-drawer__social">
                <a
                  href="https://www.linkedin.com/in/siddhant-misra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/linkedin.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/Siddhant-Misra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/github.png" alt="GitHub" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <nav className="sidebar__nav">
          {navLinks.map((link) => (
            link.isRoute ? (
              <a
                key={link.name}
                href={link.href}
                className={`sidebar__link ${link.active ? "sidebar__link--active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
              >
                {link.name}
              </a>
            ) : (
              <span
                key={link.name}
                className={`sidebar__link ${link.active ? "sidebar__link--active" : ""}`}
              >
                {link.name}
              </span>
            )
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
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: "200px", flex: 1 }}>
        <AIPlaybook />
      </main>
    </div>
  );
};

export default AIPlaybookPage;
