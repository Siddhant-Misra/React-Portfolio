// Define the array of categories and their respective items
const allCategories = [
  { 
      category: "Product Management", 
      items: ["User Research", "Feature Development", "Stakeholder Communication", "Healthcare Compliance", "Web Accessibility Standards"] 
  },
  { 
      category: "Technical", 
      items: [
          "Full Stack Development", 
          "UI/UX", 
          "Performance Optimization", 
          "Data Analytics", 
          "Web Development", 
          "CMS Development", 
          "Virtual Experiences", 
          "API Development"
      ] 
  },
  { 
      category: "Tools", 
      items: [
          "JavaScript", 
          "React", 
          "Node.js", 
          "VueJS", 
          "Nuxt", 
          "MongoDB", 
          "Firebase", 
          "Google Analytics", 
          "GTM", 
          "Webpack", 
          "Looker Studio", 
          "Tailwind CSS", 
          "Trello", 
          "Figma", 
          "Adobe Suite", 
          "SQL", 
          "PostgreSQL", 
          "MySQL"
      ] 
  },
  { 
      category: "Soft Skills", 
      items: ["Collaboration", "Documentation", "Project & Vendor Management", "Negotiation", "Team Leadership"] 
  }
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
  