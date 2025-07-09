import React from "react";
import "./About.scss";
import resume from "../../../assets/GOKULNATH S.pdf";
import { motion } from "framer-motion";
import { bios } from "../../../Data";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
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
            transition={{ duration: 1 }}
          >
            <div className="about-content">
              <p className="about-description">
                A passionate Computer Technology graduate with a deep love for
                creating innovative digital solutions. With expertise in modern
                web technologies and a commitment to continuous learning, I
                specialize in developing user-centric applications that deliver
                meaningful impact. I believe in leveraging technology to solve
                complex challenges and create exceptional user experiences that
                make a difference.
              </p>

              <div className="bio-section">
                <h3>Contact Details</h3>
                <div className="bio-grid">
                  {bios.map((bio) => (
                    <div className="bio-item" key={bio.id}>
                      <div className="bio-icon">{bio.icon}</div>
                      <div className="bio-content">
                        <span className="bio-key">{bio.key}</span>
                        <span className="bio-value">{bio.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a
                href={resume}
                download="GOKULNATH S.pdf"
                className="resume-btn"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <span>View Resume</span>
                <svg
                  width="14"
                  height="14"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
