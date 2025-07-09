import React, { useEffect, useState } from "react";
import "./Portfolio.scss";

import { workImages } from "../../../Data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="buttons"
      >
        <button
          className={active === 0 ? "active" : ""}
          onClick={(e) => activeTab(e, 0)}
        >
          All
        </button>
        <button
          className={active === 1 ? "active" : ""}
          onClick={(e) => activeTab(e, 1)}
        >
          Live Project
        </button>
        <button
          className={active === 2 ? "active" : ""}
          onClick={(e) => activeTab(e, 2)}
        >
          Personal Project
        </button>
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {works.map((work) => {
          const currentImageIndex = currentImageIndices[work.id] || 0;

          const nextImage = () => {
            setCurrentImageIndices((prev) => ({
              ...prev,
              [work.id]:
                currentImageIndex === work.images.length - 1
                  ? 0
                  : currentImageIndex + 1,
            }));
          };

          const prevImage = () => {
            setCurrentImageIndices((prev) => ({
              ...prev,
              [work.id]:
                currentImageIndex === 0
                  ? work.images.length - 1
                  : currentImageIndex - 1,
            }));
          };

          const goToImage = (index) => {
            setCurrentImageIndices((prev) => ({
              ...prev,
              [work.id]: index,
            }));
          };

          return (
            <div className="workImage" key={work.id}>
              <div className="carousel-container">
                <img
                  src={work.images[currentImageIndex]}
                  alt={`${work.name} - Image ${currentImageIndex + 1}`}
                />

                {work.images.length > 1 && (
                  <>
                    <button
                      className="carousel-btn prev-btn"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      className="carousel-btn next-btn"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <FiChevronRight />
                    </button>

                    <div className="carousel-indicators">
                      {work.images.map((_, index) => (
                        <button
                          key={index}
                          className={`indicator ${
                            index === currentImageIndex ? "active" : ""
                          }`}
                          onClick={() => goToImage(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="project-info">
                <h3>{work.name}</h3>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
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
      </motion.div>
    </div>
  );
};

export default Portfolio;
