import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import profileImage from "../../../assets/Profile_image.png";
import resumePDF from "../../../assets/Gokulnath_Selvaraj.pdf";

const Home = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("projects");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const slideRightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="home-container"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main content */}
      <div className="home-content">
        <motion.div className="profile-section" variants={slideVariants}>
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Gokulnath S"
              className="profile-image"
            />
            <div className="profile-image-border"></div>
          </div>
        </motion.div>

        <motion.div className="text-content" variants={slideRightVariants}>
          <motion.div className="greeting" variants={itemVariants}>
            <span className="wave">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </motion.div>

          <motion.h1 className="name" variants={itemVariants}>
            Gokulnath S
          </motion.h1>

          <motion.div className="title-section" variants={itemVariants}>
            <h2 className="job-title">Mobile Application Developer</h2>
            <div className="title-underline"></div>
          </motion.div>

          <motion.p className="description" variants={itemVariants}>
            Passionate about crafting innovative mobile experiences that delight
            users. Specializing in React Native, Android, and iOS development
            with a focus on clean code and exceptional user interfaces.
          </motion.p>

          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToPortfolio}
              transition={{ duration: 0.3 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Work
            </motion.button>
            <motion.a
              href={resumePDF}
              download="Gokulnath_Selvaraj.pdf"
              className="download-btn"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download CV</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
