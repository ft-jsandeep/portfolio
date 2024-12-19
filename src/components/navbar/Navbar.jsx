import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sandeep Jha
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/ft-jsandeep">
            {" "}
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/ft-jsandeep">
            {" "}
            <img src="/tech/github.png" alt="Github" />
          </a>
          <a href="https://leetcode.com/u/sandeepjha2302/">
            {" "}
            <img src="/leetcode.png" alt="Leetcode" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
