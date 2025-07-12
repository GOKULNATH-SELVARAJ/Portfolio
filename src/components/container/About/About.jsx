import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { bios } from "../../../Data";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          viewport={{ once: true }}
          className="title"
        >
          <span>Discover</span>
          <h1>About Me</h1>
        </motion.div>

        <div className="about_container">
          <motion.div
            className="about_content"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [0, 0], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="about-content">
              <motion.div
                className="description-wrapper"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="description-card">
                  {/* <h3>Who I Am</h3> */}
                  <p className="about-description">
                    A passionate Computer Technology graduate with a deep love
                    for creating innovative digital solutions. With expertise in
                    modern web technologies and a commitment to continuous
                    learning, I specialize in developing user-centric
                    applications that deliver meaningful impact. I believe in
                    leveraging technology to solve complex challenges and create
                    exceptional user experiences that make a difference.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bio-section"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3>Contact Details</h3>
                <div className="bio-grid">
                  {bios.map((bio) => (
                    <motion.div
                      className="bio-item"
                      key={bio.id}
                      whileHover={{ scale: 1.03, y: -3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bio-icon">{bio.icon}</div>
                      <div className="bio-content">
                        <span className="bio-key">{bio.key}</span>
                        <span className="bio-value">{bio.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* <motion.div
                className="cta-wrapper"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a
                  href={resume}
                  download="GOKULNATH S.pdf"
                  className="resume-btn"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Download Resume</span>
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
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
