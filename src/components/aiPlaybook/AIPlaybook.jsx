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

const categoryVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const AIPlaybook = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    if (selectedEntry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEntry]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedEntry) {
        setSelectedEntry(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedEntry]);

  const categories = [
    {
      id: "rag",
      title: "RAG",
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

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedEntry(null);
  };

  const selected = selectedEntry
    ? categories
        .flatMap((cat) =>
          cat.entries.map((entry) => ({ ...entry, categoryColor: cat.color, categoryTitle: cat.title }))
        )
        .find((entry) => entry.id === selectedEntry)
    : null;

  return (
    <div className="ai-playbook-section">
      <div className="ai-playbook-header">
        <h2>AI Playbook</h2>
        <p>Practical guides for building with AI</p>
      </div>

      <div className="ai-playbook-categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`ai-playbook-category ${
              expandedCategory === category.id ? "ai-playbook-category--expanded" : ""
            }`}
            style={{ "--accent-color": category.color }}
          >
            <button
              className="ai-playbook-category__header"
              onClick={() => toggleCategory(category.id)}
            >
              <span className="ai-playbook-category__title">{category.title}</span>
              <span className="ai-playbook-category__count">
                {category.entries.length} entries
              </span>
              <span className="ai-playbook-category__chevron">
                {expandedCategory === category.id ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {expandedCategory === category.id && (
                <motion.div
                  className="ai-playbook-category__entries"
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={categoryVariants}
                >
                  {category.entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="ai-playbook-entry"
                      onClick={() => setSelectedEntry(entry.id)}
                    >
                      <span className="ai-playbook-entry__title">{entry.title}</span>
                      <span className="ai-playbook-entry__arrow">→</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

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
                className="modal ai-playbook-modal"
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div
                  className="modal__header"
                  style={{ borderColor: selected.categoryColor }}
                >
                  <div className="modal__header-info">
                    <span className="modal__category-tag" style={{ color: selected.categoryColor }}>
                      {selected.categoryTitle}
                    </span>
                    <h2>{selected.title}</h2>
                  </div>
                  <button className="modal__close" onClick={handleClose}>
                    ✕
                  </button>
                </div>
                <div className="modal__content">
                  <p className="ai-playbook-content__placeholder">
                    {selected.content}
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
