import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import profileImage from "../../../assets/Profile_image.png";

const Home = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      className="home-container"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-content">
        <motion.div
          className="profile-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Gokulnath S"
              className="profile-image"
            />
            <div className="profile-image-border"></div>
          </div>
        </motion.div>

        <motion.div
          className="text-content"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="greeting"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="wave">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="name"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Gokulnath S
          </motion.h1>

          <motion.div
            className="title-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="job-title">Mobile Application Developer</h2>
            <div className="title-underline"></div>
          </motion.div>

          <motion.p
            className="description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Passionate about crafting innovative mobile experiences that delight
            users. Specializing in React Native, Android, and iOS development
            with a focus on clean code and exceptional user interfaces.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
