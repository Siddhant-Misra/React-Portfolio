// Define the array of categories and their respective items
const allCategories = [
  {
    category: "Product Management",
    items: [
      "User Research",
      "A/B Testing",
      "Product Design",
      "Development Leadership",
      "Cross-functional Team Collaboration",
      "Data-driven Decision Making",
      "Stakeholder Management",
      "Budget Management",
      "Vendor Assessment",
      "SEO",
      "Web Optimization",
    ],
  },

  {
    category: "Technical",
    items: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "Nodejs",
      "VueJS",
      "MongoDB",
      "Firebase",
      "GCP",
      "Full Stack Development",
      "UI/UX",
      "Performance Optimization",
      "Data Analytics",
      "Tailwind CSS",
      "CMS Development",
      "Virtual Experiences",
      "API Development",
    ],
  },
  {
    category: "Tools",
    items: [
      "Google Analytics",
      "GTM",
      "Looker Studio",
      "Webpack",
      "Trello",
      "Figma",
      "Monday",
      "Adobe Suite",
    ],
  },
  //   {
  //       category: "Soft Skills",
  //       items: ["Collaboration", "Documentation", "Project & Vendor Management", "Negotiation", "Team Leadership"]
  //   }
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
