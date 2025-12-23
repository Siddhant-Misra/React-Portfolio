import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./AIPlaybook.scss";

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

const AIPlaybook = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    if (selectedCategory || selectedEntry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCategory, selectedEntry]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (selectedEntry) {
          setSelectedEntry(null);
        } else if (selectedCategory) {
          setSelectedCategory(null);
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedEntry, selectedCategory]);

  const categories = [
    {
      id: "rag",
      title: "RAG",
      icon: "🔍",
      color: "#10a37f",
      entries: [
        {
          id: "chunking-strategies",
          title: "Chunking strategies that don't suck",
          content: "Content coming soon",
        },
        {
          id: "embedding-models",
          title: "Embedding models: cost vs quality tradeoffs",
          content: "Content coming soon",
        },
      ],
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering",
      icon: "✨",
      color: "#a78bfa",
      entries: [
        {
          id: "system-prompts",
          title: "System prompts that actually work",
          content: "Content coming soon",
        },
        {
          id: "few-shot-zero-shot",
          title: "Few-shot vs zero-shot: when to use each",
          content: "Content coming soon",
        },
      ],
    },
    {
      id: "observability",
      title: "Observability",
      icon: "📊",
      color: "#f59e0b",
      entries: [
        {
          id: "llm-tracing",
          title: "Why you need LLM tracing from day one",
          content: "Content coming soon",
        },
        {
          id: "langsmith-langfuse",
          title: "LangSmith vs Langfuse vs building your own",
          content: "Content coming soon",
        },
      ],
    },
    {
      id: "agents",
      title: "Agents",
      icon: "🤖",
      color: "#ef4444",
      entries: [
        {
          id: "agents-vs-chains",
          title: "When to use agents vs simple chains",
          content: "Content coming soon",
        },
        {
          id: "agent-demos-fail",
          title: "Why most agent demos fail in production",
          content: "Content coming soon",
        },
      ],
    },
    {
      id: "evaluation",
      title: "Evaluation",
      icon: "📈",
      color: "#3b82f6",
      entries: [
        {
          id: "ai-output-quality",
          title: "How to know if your AI output is good enough",
          content: "Content coming soon",
        },
        {
          id: "building-eval-sets",
          title: "Building eval sets without losing your mind",
          content: "Content coming soon",
        },
      ],
    },
    {
      id: "pm-perspective",
      title: "PM Perspective",
      icon: "💡",
      color: "#ec4899",
      entries: [
        {
          id: "scoping-ai-features",
          title: "Scoping AI features when nobody knows what's possible",
          content: "Content coming soon",
        },
        {
          id: "when-to-say-no",
          title: "When to say no to AI",
          content: "Content coming soon",
        },
      ],
    },
  ];

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleEntryClick = (entryId) => {
    setSelectedEntry(entryId);
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };

  const handleCloseEntry = () => {
    setSelectedEntry(null);
  };

  const selectedEntryData = selectedEntry && selectedCategory
    ? selectedCategory.entries.find((entry) => entry.id === selectedEntry)
    : null;

  return (
    <div className="ai-playbook-section">
      <div className="ai-playbook-header">
        <h2>AI Playbook</h2>
        <p>Practical guides for building with AI</p>
      </div>

      <div className="ai-playbook-grid">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="ai-playbook-card"
            style={{ "--accent-color": category.color }}
            onClick={() => handleCardClick(category)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="ai-playbook-card__icon">{category.icon}</div>
            <h3 className="ai-playbook-card__title">{category.title}</h3>
            <span className="ai-playbook-card__count">
              {category.entries.length} entries
            </span>
            <div className="ai-playbook-card__accent" />
          </motion.div>
        ))}
      </div>

      {/* Category Modal - shows entries list */}
      {createPortal(
        <AnimatePresence>
          {selectedCategory && !selectedEntry && (
            <>
              <motion.div
                className="modal-overlay"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={handleCloseCategory}
              />
              <motion.div
                className="modal ai-playbook-category-modal"
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div
                  className="modal__header"
                  style={{ borderColor: selectedCategory.color }}
                >
                  <div className="modal__header-info">
                    <span className="modal__icon">{selectedCategory.icon}</span>
                    <h2>{selectedCategory.title}</h2>
                  </div>
                  <button className="modal__close" onClick={handleCloseCategory}>
                    ✕
                  </button>
                </div>
                <div className="modal__content">
                  <div className="ai-playbook-entries-list">
                    {selectedCategory.entries.map((entry) => (
                      <div
                        key={entry.id}
                        className="ai-playbook-entry-item"
                        onClick={() => handleEntryClick(entry.id)}
                      >
                        <span className="ai-playbook-entry-item__title">
                          {entry.title}
                        </span>
                        <span className="ai-playbook-entry-item__arrow">→</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Entry Modal - shows individual entry content */}
      {createPortal(
        <AnimatePresence>
          {selectedEntryData && (
            <>
              <motion.div
                className="modal-overlay"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={handleCloseEntry}
              />
              <motion.div
                className="modal ai-playbook-modal"
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div
                  className="modal__header"
                  style={{ borderColor: selectedCategory.color }}
                >
                  <div className="modal__header-info">
                    <span
                      className="modal__category-tag"
                      style={{ color: selectedCategory.color }}
                    >
                      {selectedCategory.title}
                    </span>
                    <h2>{selectedEntryData.title}</h2>
                  </div>
                  <button className="modal__close" onClick={handleCloseEntry}>
                    ✕
                  </button>
                </div>
                <div className="modal__content">
                  <p className="ai-playbook-content__placeholder">
                    {selectedEntryData.content}
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

export default AIPlaybook;
