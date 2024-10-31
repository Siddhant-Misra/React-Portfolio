import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-290%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Siddhant Misra</motion.h1>
          <motion.h2 variants={textVariants}>
            Product Manager 
          </motion.h2>
          <motion.h3 variants={textVariants}>
            Product Manager with 8+ years of experience developing, launching,
            and optimizing mobile and web products to align with customer needs
            and business objectives. <br />
            <br />
            Skilled in directing entire product lifecycles, from ideation to
            market launch, and driving product roadmaps that enhance user
            experiences and drive revenue growth. <br />
            Successful at utilizing data analytics to inform decision-making,
            collaborating with stakeholders, and delivering innovative solutions
            in fast-paced environments. <br />
            Excellent at identifying market opportunities, conducting user
            research, and executing go-to-market strategies to achieve business
            goals.
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a href={`#Projects`}>See my Projects</motion.a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a href={`#Contact`}> Contact Me</motion.a>
            </motion.button>
            <motion.button>
              <motion.a href="/Siddhant-Misra.pdf" download>
                Download my Resume
              </motion.a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Siddhant Misra
      </motion.div>
      <div className="imageContainer">
        <img src="/hero2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
