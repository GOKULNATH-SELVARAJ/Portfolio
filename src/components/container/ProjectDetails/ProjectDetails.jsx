import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOS, workImages } from "../../../Data";
import "./ProjectDetails.scss";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = name.replace(/-/g, " ");
  const project = workImages.find(
    (p) => String(p.name) === String(decodedName)
  );
  const [currentImage, setCurrentImage] = React.useState(0);
  const userOS = getOS();
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="not-found">
          <div className="not-found-content">
            <h2>Project Not Found</h2>
            <p>
              The project you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" className="back-home">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const getStoreText = () => {
    const ua = navigator.userAgent.toLowerCase();

    if (/android/.test(ua)) return "Visit Play Store";
    if (/iphone|ipad|ipod/.test(ua)) return "Visit App Store";
    if (/mac/.test(ua)) return "Visit App Store";
    if (/win/.test(ua)) return "Visit Play Store";
    if (/linux/.test(ua)) return "Visit Play Store";

    return "Visit Play Store"; // Default fallback
  };

  return (
    <div className="project-details-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <button onClick={() => navigate(-1)} className="back-button">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="page-title">Project Details</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="project-title">{project.name}</h1>
        <p className="project-subtitle">
          Explore the details and features of this amazing project
        </p>
      </section>
      {/* Main Content */}
      <main className="main-content">
        <div className="content-grid">
          {/* Image Section */}
          <div className="image-section">
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src={project.images[currentImage]}
                  alt={`${project.name} - Image ${currentImage + 1}`}
                  className="project-image"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="nav-button prev-button"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="nav-button next-button"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              <div className="image-indicators">
                {project.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`indicator ${
                      idx === currentImage ? "active" : "inactive"
                    }`}
                    onClick={() => setCurrentImage(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Tech Stack Section Below Image */}
            {project.techStack && (
              <div className="tech-stack-section">
                <h3 className="tech-stack-title">Tech Stack</h3>
                <div className="tech-stack-grid">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="tech-item">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="info-section">
            <div className="project-info">
              <h2 className="info-title">About This Project</h2>
              <div className="project-description">{project.description}</div>
              <div className="action-buttons">
                <a
                  className="action-button primary"
                  href={
                    project.live["Download"]
                      ? project.live["Download"]
                      : project.live[userOS]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt className="icon" />
                  {project.live["Download"] ? (
                    <span>Download Android APK</span>
                  ) : (
                    <span>{getStoreText()}</span>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
