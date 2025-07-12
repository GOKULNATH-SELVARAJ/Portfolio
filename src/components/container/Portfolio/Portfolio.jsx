import React, { useEffect, useState } from "react";
import "./Portfolio.scss";

import { workImages } from "../../../Data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "live" }); // Default to 'live'
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const newWork = workImages.filter((workImage) => {
      return workImage.category.toLowerCase() === tab.name;
    });
    setWorks(newWork);
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({
      name: e.target.textContent.toLowerCase().includes("live")
        ? "live"
        : "personal",
    });
    setActive(index);
  };

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="buttons"
      >
        <button
          className={active === 0 ? "active" : ""}
          onClick={(e) => activeTab(e, 0)}
        >
          Live Project
        </button>
        <button
          className={active === 1 ? "active" : ""}
          onClick={(e) => activeTab(e, 1)}
        >
          Personal Project
        </button>
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {works.map((work) => (
          <div
            className="workImage"
            key={work.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/project/${work.id}`)}
          >
            <div className="image-container">
              <img
                src={work.images[0]}
                alt={`${work.name} - Image`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="project-info">
              <h3>{work.name}</h3>
            </div>
          </div>
        ))}
      </motion.div>
      {/* <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="talk"
      >
        <div className="talk_left">
          <h3>
            so let's talk about <br /> <span>your next projects</span>
          </h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="talk_right"
        >
          <a href="#contact">Contact Me</a>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Portfolio;
