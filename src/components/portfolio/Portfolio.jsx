import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const items = [
  {
    id: 1,
    title: "Restaurant Discovery Tracker",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Built a regional search interface using Leaflet.js and Google Sheets API for real-time restaurant data. Designed search filters and interactive map markers displaying menu highlights and recommendations. Mobile-responsive with behavior-driven updates.",
    link: "https://celadon-granita-cbde24.netlify.app/",
    tech: "Leaflet.js, Google Sheets API, JavaScript, CSS",
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: "/!Untitled.png",
    desc: "Designed and built personal portfolio using React and Framer Motion. Features smooth scroll animations, interactive experience cards, and responsive design across all viewports.",
    link: "https://helpful-frangollo-23f30c.netlify.app/",
    tech: "React, Vite, Framer Motion, SCSS",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section>
      <div className="container" id="Projects">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.tech && <p className="tech-stack"><strong>Tech:</strong> {item.tech}</p>}
            <button onClick={() => handleButtonClick(item.link)}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      <ToastContainer />
    </div>
  );
};

export default Portfolio;
