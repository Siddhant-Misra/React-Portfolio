// Define the array of categories and their respective items
const allCategories = [
  {
    category: "Product Management",
    items: [
      "User Research",
      "A/B Testing",
      "Roadmap Planning",
      "0→1 Product Development",
      "Cross-functional Leadership",
      "Data-driven Decision Making",
      "Stakeholder Management",
      "Rapid Prototyping",
      "Funnel Analytics",
      "Sprint Planning",
      "PRD Writing",
    ],
  },

  {
    category: "Technical",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Vue.js",
      "Python",
      "SQL",
      "REST APIs",
      "MongoDB",
      "Firebase",
      "GCP",
      "Prompt Engineering",
    ],
  },
  {
    category: "Tools",
    items: [
      "GA4",
      "GTM",
      "Amplitude",
      "Looker Studio",
      "Figma",
      "JIRA",
      "Notion",
      "Postman",
      "Claude API",
      "GPT-4",
    ],
  },
];

// Destructure specific categories
const [productManagement, technical, tools] = allCategories;

// Define the initial tabs (or categories) to display
const initialTabs = [productManagement, technical, tools];

// Function to get the next category not in the provided list
function getNextCategory(categories) {
  const existing = new Set(categories);
  return allCategories.find((category) => !existing.has(category));
}

export { allCategories, initialTabs, getNextCategory };
