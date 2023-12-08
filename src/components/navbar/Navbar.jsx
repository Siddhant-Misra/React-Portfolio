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
      // Display a toast notification when the component mounts
      toast("Welcome to my website. CSS sometimes is fun and hell.", {
        position: "top-right",
        autoClose: 5000, // Set the duration for the notification
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });

      // Set the ref to true to indicate that the notification has been displayed
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
          Siddhant Misra
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
