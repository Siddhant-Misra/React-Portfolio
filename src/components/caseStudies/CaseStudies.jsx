import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./CaseStudies.scss";

const modalVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedStudy]);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedStudy) {
        setSelectedStudy(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedStudy]);

  const caseStudies = [
    {
      id: "openai-talent",
      title: "OpenAI Talent: AI-Native Job Board",
      subtitle: "Concept Case Study | 2024",
      teaser: "A job marketplace where candidates prove skills with live, AI-assisted work samples",
      color: "#10a37f",
      content: {
        type: "structured",
        oneLiner: "A job marketplace where candidates prove skills with live, AI-assisted work samples and hiring teams get fewer, higher-signal applicants.",
        sections: [
          {
            title: "Context",
            content: "Hiring for AI roles is messy. Titles are vague, resumes don't prove ability, and inbound overwhelms teams. Traditional boards optimize for clicks, not fit."
          },
          {
            title: "Users",
            list: [
              "Candidates: AI or ML engineers, data folks, applied researchers, PMs.",
              "Employers: Startups and mid-market teams building with LLMs."
            ]
          },
          {
            title: "Problem",
            content: "Both sides waste time. Candidates apply into black holes. Recruiters sift inflated claims with little evidence. There is no shared, fast way to verify if someone can actually do the work."
          },
          {
            title: "Goal and Single Metric",
            content: "Goal: Raise match quality while lowering time to a meaningful conversation.",
            details: [
              "North-star: Qualified Intro Rate (QIR).",
              "Guardrails: Candidate and employer first-response time, fairness across cohorts, assessment error rate, assessment cost."
            ]
          },
          {
            title: "Constraints",
            content: "Small team, privacy expectations, bias risk, ATS integrations, and keeping run-costs low."
          },
          {
            title: "Options Considered",
            list: [
              "Classic posts and resumes: Easy to ship, low signal.",
              "Skill badges or quizzes: Some signal, easy to game.",
              "Work samples in a sandbox with AI-assisted scoring: Highest signal, needs human review for edge cases."
            ],
            conclusion: "Decision: Work samples with rubrics and human-in-the-loop."
          },
          {
            title: "MVP Scope (8 to 10 Weeks)",
            subsections: [
              {
                subtitle: "Candidate",
                list: [
                  "Profile with verified identity, links, and Work Samples (tiny tasks: retrieval prompt, eval design, small data clean, AI feature UX).",
                  '"Proof" uploads: repo, Colab, Loom.',
                  "Private Career Agent to draft tailored applications from profile plus samples."
                ]
              },
              {
                subtitle: "Employer",
                list: [
                  "Structured job spec (skills, models, data constraints, salary band, location).",
                  "Evidence-based shortlist: rank by skills plus sample proof, not keywords.",
                  "ATS sync (Greenhouse or Lever) for source of truth."
                ]
              },
              {
                subtitle: "Platform",
                list: [
                  "Secure task runner (containerized), deterministic scoring with rubrics.",
                  "Bias controls: AI scoring is advisory, human decision required, explainable rubrics.",
                  "Event tracking for end-to-end funnel."
                ]
              }
            ]
          },
          {
            title: "What I'd Build (My Role)",
            list: [
              "PRD, structured job schema, and starter task library (engineering, data, PM).",
              "Candidate flow: pick task → timebox → run in sandbox → auto-score → human review if needed → publish to profile.",
              "Employer dashboard: shortlist by evidence, one-click invite, SLA nudges.",
              "Analytics: QIR, time-to-first-response, candidate NPS, cost per assessment, human-review rate.",
              "Policy guardrails with Legal: explainability, appeals, privacy, retention."
            ]
          },
          {
            title: "Success Metrics (First 90 Days)",
            list: [
              "QIR ≥ 35%",
              "Time-to-first-response ≤ 72h",
              "Assessment cost P95 ≤ $0.45",
              "Human-review rate ≤ 10%",
              "Candidate opt-in to work samples ≥ 60%"
            ]
          },
          {
            title: "Experiment Plan",
            table: {
              headers: ["Hypothesis", "Change", "Metric", "Decision Rule"],
              rows: [
                ["Work samples improve match", "Apply plus 1 task vs classic apply", "QIR, first response time", "Ship if QIR improves by 10% with neutral response time"],
                ["Structured spec reduces noise", "Structured spec vs free text", "Invite quality, drop-off", "Keep if invite-to-onsite improves by at least 15%"],
                ["Agent improves applications", "Career Agent on vs off", "Invite rate, time to apply", "Keep if invite rate improves by 10%"],
                ["Process is fair", "Audit by cohort", "Invite rate parity", "Investigate any gap greater than 5pp"]
              ]
            }
          },
          {
            title: "System Sketch",
            list: [
              "Web app (Next.js)",
              "Profiles, Jobs, WorkSamples (Postgres)",
              "Task Runner (per-task containers)",
              "Scoring Service (rubrics and model evals)",
              "Review Queue (human-in-the-loop)",
              "Results back to profile plus ATS sync"
            ]
          },
          {
            title: "Risks and Mitigations",
            list: [
              "Bias: AI scoring is advisory. Publish rubrics. Human decision is mandatory. Appeals path.",
              "Gaming: Rotate task pools, plagiarism checks, require repo history or Loom walkthrough.",
              "Privacy: Opt-in for training use, 90-day default deletion, clear retention policy.",
              "Cold-start: Curate early adopters, weekly \"shortlist\" mailers to hiring teams."
            ]
          },
          {
            title: "90-Day Results (Hypothetical Snapshot)",
            list: [
              "QIR hit 38% by week 6.",
              "Median time-to-first-response 48h.",
              "Employers invited 2.1× fewer candidates to reach onsite.",
              "Candidate applications drafted via Agent were 1.4× more likely to get an invite.",
              "Assessment cost P95 $0.39, human-review 8%."
            ],
            conclusion: "How measured: GA4 plus server events into Looker, weekly readouts."
          },
          {
            title: "Next Steps",
            list: [
              "Proof stacks on profiles (code, Loom, rubric) reusable per job.",
              "PM case tasks: PRD critique, experiment design, metric tradeoffs.",
              "Deeper ATS actions: stage updates and rejection reasons.",
              "University and bootcamp partners to supply verified samples."
            ]
          }
        ]
      }
    },
    {
      id: "youtube-music",
      title: "YouTube Music: Smart Playlist Controls",
      subtitle: "Product Improvement | 2024",
      teaser: "Redesigning playlist management to fix broken shuffle and missing search functionality",
      color: "#FF0000",
      content: {
        type: "structured",
        oneLiner: "A feature proposal to improve YouTube Music's playlist management with search, custom sorting, and smarter shuffle behavior.",
        sections: [
          {
            title: "Three Things to Improve",
            subsections: [
              {
                subtitle: "1. Improved Playlist Management & Sorting",
                content: "Problem: Users cannot search within a playlist, making it difficult to find a specific song. Additionally, playlist sorting options are limited.",
                detail: "Why Important: Playlists are a core feature of any music streaming service. Offering robust sorting and search options will enhance user experience and engagement."
              },
              {
                subtitle: "2. A More Focused Music-Only Experience",
                content: "Problem: YouTube Music still feels too much like YouTube. Music videos are shuffled with songs, and the option to disable them is buried deep in the settings. Additionally, there's no HiFi audio quality like Apple Music or Tidal.",
                detail: "Why Important: Many users prefer a pure music streaming experience. Making it easier to disable videos and offering HiFi audio will position YouTube Music as a serious competitor to premium music services."
              },
              {
                subtitle: "3. Smarter Shuffle & Playback Behavior",
                content: "Problem: Shuffle mode does not truly shuffle a curated playlist; it often repeats a small subset of songs before switching to recommended tracks. Additionally, when searching for a song, specifically in my car which is a Tesla, YouTube Music often plays the entire album instead of just the selected track.",
                detail: "Why Important: A core expectation of a music streaming app is that shuffle mode works properly and search results prioritize user intent. Users should feel in control of their playback experience."
              }
            ]
          },
          {
            title: "New Feature: Smart Playlist Controls",
            content: "Let's focus on Improved Playlist Management & Sorting since it directly impacts usability.",
            list: [
              "Search within Playlists: Users can quickly find a song within their playlist via a dedicated search bar.",
              "Custom Sorting: Allow users to sort playlists based on custom parameters (e.g., artist, release date, most played, manually drag-and-drop).",
              "Persistent Shuffle State: The shuffle feature should remember user behavior and truly randomize playback instead of cycling through a limited selection."
            ]
          },
          {
            title: "Why this Feature?",
            list: [
              "Directly improves user experience by making playlist management easier.",
              "Addresses frustration from users who struggle to find songs or deal with broken shuffle functionality.",
              "Aligns with industry standards, where competitors like Spotify and Apple Music already offer these capabilities."
            ]
          },
          {
            title: "MVP Trade-offs and Prioritization",
            content: "Since the feature must launch at an annual product conference, but the team is behind schedule, we need to define an MVP.",
            subsections: [
              {
                subtitle: "Trade-offs to Meet the Deadline",
                list: [
                  "Start with Search & Sorting Only: Implement playlist search and drag-and-drop sorting first. Persistent Shuffle can be added in later updates.",
                  "No Advanced Filters Yet: Advanced filtering (e.g., sort by least played, release date, etc.) will be added post-launch.",
                  "No Desktop-Specific Version: Focus on mobile UX first, since most YouTube Music users are on mobile."
                ]
              }
            ]
          },
          {
            title: "Why this MVP?",
            list: [
              "High-impact changes that improve usability with minimal engineering effort.",
              "Solves major frustrations while keeping the release manageable.",
              "Allows future iteration without delaying the core feature."
            ]
          },
          {
            title: "Metrics for Measuring Success",
            content: "To track the impact of this feature, we'll measure:",
            list: [
              "Feature Adoption: Percentage of users engaging with playlist search or custom sorting.",
              "Playlist Search Frequency: How often users search within a playlist.",
              "Shuffle Retention Rate: Whether users stick with Shuffle mode after enabling Persistent Shuffle.",
              "User Satisfaction: Qualitative feedback via surveys and app store reviews."
            ]
          },
          {
            title: "Data Collection Methods",
            list: [
              "Log search queries and sorting interactions.",
              "A/B test shuffle behavior before and after launch.",
              "Conduct user feedback sessions to refine the experience.",
              "Monitor Reddit and other social media for constant user feedback."
            ]
          }
        ]
      }
    },
    {
      id: "roku-remote",
      title: "Roku Mobile Remote via Phone",
      subtitle: "Product Analysis | Consumer Tech",
      teaser: "Analyzing how Roku's mobile app eliminates the frustration of lost remotes with private listening",
      color: "#662D91",
      content: {
        type: "structured",
        oneLiner: "The Roku mobile app's remote control feature allows users to control their Roku streaming devices from their smartphones, offering an alternative to the traditional physical remote.",
        sections: [
          {
            title: "How It Works",
            content: "The app connects to a Roku device over Wi-Fi and replicates the physical remote's functions, including volume control, navigation, and voice commands. It also enables a private listening mode by routing audio through the phone."
          },
          {
            title: "Problem Solved",
            content: "Losing a physical remote is common, and this app eliminates that frustration. Additionally, it improves the user experience by offering private listening, which is not available on all standard remotes. The app also provides a keyboard for easier text input, making searches faster than using an on-screen remote."
          },
          {
            title: "Competitive Analysis",
            content: "Compared to Apple TV's remote, the Roku app offers more seamless connectivity without requiring an Apple device. Google Chromecast relies on a phone for all interactions, whereas Roku offers both physical and digital remote options, giving users more flexibility."
          },
          {
            title: "Improvement Opportunity",
            content: "Roku's private listening mode is great, but it's currently limited to the phone controlling the Roku. A major improvement would be allowing private listening across multiple devices, such as seamlessly switching audio from the mobile remote to wireless earbuds or a smart speaker. This could be helpful if someone starts watching on TV but wants to continue listening while moving around."
          },
          {
            title: "Personal Experience",
            content: "I frequently misplace my remote or never have batteries, and this app has saved me from countless frustrating searches. The private listening mode is a game-changer when I want to watch late at night without disturbing others."
          }
        ]
      }
    },
    {
      id: "oral-b",
      title: "Oral-B iO Series 5: Smart Toothbrush",
      subtitle: "Product Analysis | Consumer Health",
      teaser: "How real-time pressure feedback and app tracking build long-term healthy brushing habits",
      color: "#0066CC",
      content: {
        type: "structured",
        oneLiner: "The Oral-B iO Series 5 is an advanced electric toothbrush that offers five cleaning modes and a pressure sensor to guide users in maintaining optimal brushing habits.",
        sections: [
          {
            title: "Key Features",
            content: "It uses a pressure sensor to alert users if they are brushing too hard or too soft, ensuring a safe and effective cleaning experience. The Oral-B app tracks brushing in real-time, offering insights and reminders. It also features a built-in timer and a head replacement alert to encourage consistent oral hygiene."
          },
          {
            title: "Problem Solved",
            content: "Many people struggle with applying the correct amount of pressure while brushing, leading to gum damage or ineffective cleaning. The iO Series 5 addresses this by providing real-time feedback. The app's tracking feature ensures users brush evenly and for the recommended duration, helping build long-term healthy habits."
          },
          {
            title: "Competitive Analysis",
            content: "Compared to other electric toothbrushes, the Oral-B iO Series 5 offers superior real-time feedback through its pressure sensor, unlike traditional models that lack such smart tracking. While Philips Sonicare provides a strong cleaning experience, it doesn't integrate tracking and guidance as seamlessly as Oral-B's app does."
          },
          {
            title: "Improvement Opportunities",
            list: [
              "Introduce AI-driven personalized recommendations within the app. After tracking user brushing habits over time, the app could suggest customized cleaning modes or areas to focus on.",
              "Partner with healthcare providers to offer free brush heads if users brush twice a day consistently.",
              "Provide a method to send brush heads back for recycling for credits, boosting Oral-B's sustainability efforts."
            ]
          },
          {
            title: "Personal Experience",
            content: "I used to struggle with over-brushing and noticed gum sensitivity over time. This toothbrush has helped me develop better habits by making brushing feel more interactive and guided, almost like having a personal dental assistant. Plus I have a routine every morning where I keep my phone, glasses and water bottle on the table at a specific place and go brush, and come back and then open my phone and water load."
          }
        ]
      }
    },
    {
      id: "conways-law",
      title: "Conway's Law for Product Managers",
      subtitle: "Product Thinking | Framework",
      teaser: "How organizational structure shapes product architecture and what PMs can do about it",
      color: "#F59E0B",
      content: {
        type: "structured",
        oneLiner: "\"Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.\" – Melvin Conway, 1968",
        sections: [
          {
            title: "What is Conway's Law?",
            content: "Conway's Law is a simple yet profound observation that often governs how systems, software, and even products are designed. It suggests that the way a team communicates shapes the design of the systems they create. While the concept originated in software engineering, its implications go far beyond code, making it a valuable lens for product managers (PMs) to view their work."
          },
          {
            title: "Why Should Product Managers Care?",
            content: "As a product manager, your role is to act as the bridge between stakeholders, developers, designers, and customers. The way your teams are structured and how they communicate can directly impact not only the architecture of your product but also its scalability, usability, and adaptability in the long run. Understanding Conway's Law can help you identify how organizational structures and communication pathways might be influencing not only your product's architecture but also its user experience, development velocity, and overall success."
          },
          {
            title: "How Conway's Law Helps PMs",
            subsections: [
              {
                subtitle: "1. Identify Silos and Their Impact on Products",
                content: "Siloed teams often lead to disjointed user experiences. If different teams own different parts of a product with little cross-communication, the product itself may feel fragmented. A lack of collaboration between design, engineering, and business units can result in misaligned priorities, conflicting UX patterns, and inefficiencies."
              },
              {
                subtitle: "2. Optimize Team Structures for Product Goals",
                content: "If your team structure doesn't align with how the product should evolve, you'll likely face friction. Ensuring that cross-functional teams are formed based on product areas rather than existing hierarchies can lead to more streamlined development and innovation."
              },
              {
                subtitle: "3. Foster Better Communication",
                content: "Healthy communication is crucial in product development. Encouraging open dialogue across teams can help bridge gaps between business objectives and technical feasibility, reducing misunderstandings and ensuring alignment. Tools like Slack, Notion, and regular syncs can reinforce transparency."
              },
              {
                subtitle: "4. Improve Time to Market",
                content: "When teams are structured effectively, with clear ownership and strong collaboration, product development speeds up. Misaligned teams often lead to endless back-and-forths, delays, and last-minute fixes, while well-structured teams can iterate efficiently and deploy faster."
              },
              {
                subtitle: "5. Align the Product Vision Across the Organization",
                content: "Great products are built when everyone understands the 'why' behind them. Ensuring that teams, from engineering to marketing, share a unified vision prevents inconsistencies in execution. Conway's Law reminds PMs to align team communication structures with the intended product outcome."
              }
            ]
          },
          {
            title: "Conclusion",
            content: "For product managers, Conway's Law is a powerful reminder that organizational design and product design are deeply intertwined. Whether you're an aspiring PM or an experienced one, leveraging this principle can help you identify areas for improvement, foster collaboration, and ultimately create better products. By proactively assessing how your team's communication structure influences your product, you can anticipate challenges before they arise, streamline decision-making, and drive more cohesive outcomes."
          }
        ]
      }
    }
  ];

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedStudy(null);
  };

  const selected = caseStudies.find((study) => study.id === selectedStudy);

  const renderContent = (content) => {
    if (!content) return null;

    return (
      <div className="case-study-content">
        {content.oneLiner && (
          <p className="case-study-content__oneliner">{content.oneLiner}</p>
        )}

        {content.sections?.map((section, idx) => (
          <div key={idx} className="case-study-content__section">
            <h4>{section.title}</h4>

            {section.content && <p>{section.content}</p>}

            {section.details && (
              <ul>
                {section.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}

            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.conclusion && (
              <p className="case-study-content__conclusion">{section.conclusion}</p>
            )}

            {section.subsections?.map((sub, subIdx) => (
              <div key={subIdx} className="case-study-content__subsection">
                <h5>{sub.subtitle}</h5>
                {sub.content && <p>{sub.content}</p>}
                {sub.detail && <p className="case-study-content__detail">{sub.detail}</p>}
                {sub.list && (
                  <ul>
                    {sub.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.table && (
              <div className="case-study-content__table-wrapper">
                <table className="case-study-content__table">
                  <thead>
                    <tr>
                      {section.table.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="case-studies-section">
      <div className="case-studies-header">
        <h2>Case Studies</h2>
        <p>Deep dives into product work</p>
      </div>

      <div className="case-studies-grid">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="case-study-card"
            onClick={() => setSelectedStudy(study.id)}
            style={{ "--accent-color": study.color }}
          >
            <div className="case-study-card__content">
              <h3>{study.title}</h3>
              <p className="case-study-card__subtitle">{study.subtitle}</p>
              <p className="case-study-card__teaser">{study.teaser}</p>
            </div>
            <span className="case-study-card__arrow">→</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {selected && (
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
                className="modal case-study-modal case-study-modal--fullpage"
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div
                  className="modal__header"
                  style={{ borderColor: selected.color }}
                >
                  <div className="modal__header-info">
                    <h2>{selected.title}</h2>
                    <span className="modal__subtitle">{selected.subtitle}</span>
                  </div>
                  <button className="modal__close" onClick={handleClose}>
                    ✕
                  </button>
                </div>
                <div className="modal__content">
                  {renderContent(selected.content)}
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

export default CaseStudies;
