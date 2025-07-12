import React, { useState } from "react";
import "./Skills.scss";
import { skillsData, professionalExperience } from "../../../Data";
import { educationData } from "../../../Data";
import { motion } from "framer-motion";

const Skills = () => {
  const [active, setActive] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  // Filter skills by category
  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="title"
      >
        <h1>Skills & Experience</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Experience
        </button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >
          Education
        </button>
      </motion.div>

      {active === 1 && (
        <>
          {/* Category filter commented out */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            viewport={{ once: true }}
            className="skills-grid"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="skill-card"
                style={{ "--skill-color": skill.color }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <p className="category">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="professional-experiences"
      >
        {active === 2 &&
          professionalExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="professional-experience-card"
            >
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <h4 className="role">{exp.role}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              <div className="experience-details">
                <p className="description">{exp.description}</p>
                <div className="tech-stack">
                  <h5>Tech Stack:</h5>
                  <div className="tech-tags">
                    {exp.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="experiences"
      >
        {active === 3 &&
          educationData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="experience-card"
            >
              <div className="experience-year">
                <span>{experience.year}</span>
              </div>
              <div className="experience-content">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Skills;
