
import "./services.scss";
// import "./serviceStyle.css"
import { useState } from "react";
import { initialTabs as tabs } from "./categories"; // Assuming categories.js has been updated with the earlier code
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="headingService">
       <h1  className="main-title">Skills</h1>
       
    <div className="window">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.category}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {item.category}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div className="textMain"
            key={selectedTab ? selectedTab.category : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.items.join(", ") : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
    </div>
  );
}
