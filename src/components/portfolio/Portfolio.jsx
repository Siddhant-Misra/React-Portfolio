import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const items = [
  {
    id: 1,
    title: "React Portfolio",
    img: "/!Untitled.png",
    desc: "This website was built using React, SCSS and Framer Motion and EmailJS to send emails from the Contact Us section of this page.",
    link: "",
  },
  {
    id: 2,
    title: "React Weather",
    img: "https://poetic-buttercream-9cbdae.netlify.app/static/media/bg.b6796c73.jpg",
    desc: "This is a React webapp that shows the weather using the Open Weather API.",
    link: "https://poetic-buttercream-9cbdae.netlify.app/",
  },
  {
    id: 3,
    title: "HTML Projects",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Some of the showcases of the HTML, CSS and JS projects I've done",
    links: [
      {
        name: "Decommissioned Portfolio",
        link: "https://siddhant-misra.github.io/Decommissioned-Portfolio/",
      },
      {
        name: "Random Quote Generator",
        link: "https://siddhant-misra.github.io/Random-Quote-Generator/",
      },
      {
        name: "Portfolio",
        link: "https://siddhant-misra.github.io/Portfolio/",
      },
      { name: "Typing", link: "https://siddhant-misra.github.io/Typing/" },
    ],
  },
  {
    id: 4,
    title: "Synapse Test",
    img: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "This is a implementation of a REST API that uses the API of Synapsefi to mimic digit.co. Synapsefi is a banking API platform. A user can create an acocunt, verify said account using a government ID and a SSN. After verification, the user can then create two accounts. I used a CRON job to simulate a transaction from one account to another, hence showcasing a savings app.",
    link: "https://github.com/Siddhant-Misra/SynapseTest",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const handleButtonClick = (link) => {
    if (item.id === 1) {
      toast.info("Its this website!", {
        autoClose: 1000,
        position: "bottom-center",
      });
    } else {
      window.open(link, "_blank");
    }
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
            {/* Render buttons based on the number of links for item 3 */}
            {item.id === 3 && item.links && item.links.length > 0 && (
              <div>
                {item.links.map((linkObj, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(linkObj.link)}
                  >
                    {linkObj.name}
                  </button>
                ))}
              </div>
            )}
            {/* Render a single button for other items */}
            {item.id !== 3 && (
              <button onClick={() => handleButtonClick(item.link)}>
                See Demo
              </button>
            )}
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
