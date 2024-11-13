import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const hasNotificationBeenDisplayedRef = useRef(false);

  useEffect(() => {
    if (!hasNotificationBeenDisplayedRef.current) {
      toast("Welcome to my website. CSS sometimes is fun and hell.", {
        toastId: "welcome-toast", // Ensure only one toast with this ID appears
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
  
      hasNotificationBeenDisplayedRef.current = true;
    }
  }, []);
  
  

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://github.com/Siddhant-Misra" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/siddhant-misra/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
