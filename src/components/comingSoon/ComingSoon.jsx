import { motion } from "framer-motion";
import "./comingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="comingSoon">
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Something exciting is in the works.
        </motion.p>
        <motion.div
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
