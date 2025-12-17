import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./ClipPathTransition.scss";

const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const ClipPathTransition = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    if (selectedRole) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRole]);

  const experiences = [
    {
      id: "stealth",
      company: "Stealth Startup",
      title: "Product Manager",
      period: "Jun 2024 – Present",
      location: "Remote",
      description:
        "Leading product for an ML-powered esports analytics platform, building prediction systems that help users make data-driven decisions in real-time.",
      achievements: [
        "Shipped 0→1 features in 1-week cycles, scaling platform from MVP to 20K+ weekly active users",
        "Built ML prediction engine that processes live match data and surfaces actionable insights",
        "Redesigned onboarding flow using GA4 behavioral analytics, reducing drop-off by 35%",
        "Prototyped natural language querying feature using Claude and GPT-4 APIs",
      ],
      tech: "React, Node.js, Python, GA4, Amplitude, Claude API, GPT-4",
      color: "#FF6B35",
    },
    {
      id: "inhance-pm",
      company: "Inhance Digital",
      title: "Product Manager",
      period: "Oct 2020 – Nov 2023",
      location: "Los Angeles, CA",
      description:
        "Owned product roadmap for mobile and web SaaS products serving healthcare organizations, first responders, and defense clients.",
      achievements: [
        "Delivered 20+ virtual experiences for U.S. Army, Booz Allen Hamilton, Whirlpool, Amgen, and AstraZeneca",
        "Launched HIPAA-compliant triage app for first responders, improving response time by 25%",
        "Defined KPIs using GA4 and Looker Studio; used funnel analysis to drive roadmap decisions",
        "Migrated tech stack from ReactJS to modular platform, cutting infrastructure costs by 40%",
      ],
      tech: "GA4, Looker Studio, JIRA, Figma, React, HTML/CSS",
      color: "#EAD200",
    },
    {
      id: "inhance-eng",
      company: "Inhance Digital",
      title: "Full Stack Engineer",
      period: "Oct 2020 – Nov 2023",
      location: "Los Angeles, CA",
      description:
        "Worked as a hybrid PM/engineer, building the technical foundation for enterprise products.",
      achievements: [
        "Built CMS platforms and secure user flows for Fortune 500 clients",
        "Engineered account linking and multi-user permission systems",
        "Achieved ADA/WCAG compliance for public-sector applications",
      ],
      tech: "React, Vue.js, Node.js, MongoDB, REST APIs, Firebase",
      color: "#6ACB00",
    },
    {
      id: "creating-margin",
      company: "Creating Margin",
      title: "Web Developer",
      period: "Dec 2019 – Apr 2020",
      location: "Boise, ID",
      description:
        "Rebuilt the firm's digital presence with data-driven UX improvements.",
      achievements: [
        "Redesigned website UX based on Google Analytics insights, improving engagement by 22%",
        "Implemented SEO-optimized architecture and conversion tracking",
      ],
      tech: "WordPress, Google Analytics, HTML/CSS, JavaScript",
      color: "#19A0FA",
    },
    {
      id: "pantsuit",
      company: "Pantsuit Professionals",
      title: "Full Stack Developer",
      period: "Aug 2018 – Dec 2019",
      location: "New York, NY",
      description:
        "Built core platform features for a professional networking and e-commerce startup.",
      achievements: [
        "Developed job board with search, filtering, and Stripe payment integration",
        "Optimized site performance, reducing load times by 50%",
      ],
      tech: "React, Node.js, Stripe API, MongoDB",
      color: "#771ADA",
    },
  ];

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedRole(null);
  };

  const selectedExp = experiences.find((exp) => exp.id === selectedRole);

  return (
    <div className="experience-section">
      <div className="experience-header">
        <h2>Experience</h2>
        <p>Click on a role to see details</p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="experience-item"
            onClick={() => setSelectedRole(exp.id)}
            style={{ "--accent-color": exp.color }}
          >
            <div className="experience-item__date">{exp.period}</div>
            <div className="experience-item__content">
              <h3 className="experience-item__company">{exp.company}</h3>
              <p className="experience-item__title">{exp.title}</p>
              <p className="experience-item__location">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedExp && (
            <>
              <motion.div
                className="modal-overlay"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={handleClose}
              />
              <motion.div
                className="modal"
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div
                  className="modal__header"
                  style={{ borderColor: selectedExp.color }}
                >
                  <div className="modal__header-info">
                    <h2>{selectedExp.company}</h2>
                    <h3>
                      {selectedExp.title} | {selectedExp.period}
                    </h3>
                    <span className="modal__location">{selectedExp.location}</span>
                  </div>
                  <button className="modal__close" onClick={handleClose}>
                    ✕
                  </button>
                </div>
                <div className="modal__content">
                  <p className="modal__description">{selectedExp.description}</p>
                  <h4>Key Achievements:</h4>
                  <ul>
                    {selectedExp.achievements.map((point, index) => (
                      <li key={`point-${index}`}>{point}</li>
                    ))}
                  </ul>
                  <p className="modal__tech">
                    <strong>Tech:</strong> {selectedExp.tech}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default ClipPathTransition;
