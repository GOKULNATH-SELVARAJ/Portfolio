import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiFlutter,
  SiPython,
  SiTypescript,
  SiSocketdotio,
} from "react-icons/si";
import { SiC } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

import work1 from "./assets/work1.png";
import portfolio from "./assets/portfolio.jpg";
import profile from "./assets/Profile_image.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <a href="https://www.linkedin.com/in/gokulnath363/">
    <FaLinkedin />
  </a>,
  <a href="https://github.com/GOKULNATH-SELVARAJ">
    <FiGithub />
  </a>,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Gokulnath S",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+919345592552",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "us.gokulnath@gmail.com",
  },
];

export const icons = [
  <SiC />,
  // <SiCplusplus />,
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <FaReact />,
  <FaNodeJs />,
  <FaFigma />,
  <SiFlutter />,
];

// Enhanced skills data with categories and proficiency levels
export const skillsData = [
  {
    id: 1,
    name: "React Native",
    icon: <FaReact />,
    category: "Mobile Development",
    proficiency: 90,
    color: "#61DAFB",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <DiJavascript />,
    category: "Programming Languages",
    proficiency: 88,
    color: "#F7DF1E",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Programming Languages",
    proficiency: 80,
    color: "#3178C6",
  },
  {
    id: 4,
    name: "Socket.io",
    icon: <SiSocketdotio />,
    category: "Backend",
    proficiency: 75,
    color: "#FF00FF",
  },
  {
    id: 5,
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Frontend",
    proficiency: 90,
    color: "#E34F26",
  },
  {
    id: 6,
    name: "CSS3",
    icon: <FaCss3 />,
    category: "Frontend",
    proficiency: 85,
    color: "#1572B6",
  },
  {
    id: 7,
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
    proficiency: 82,
    color: "#61DAFB",
  },
  {
    id: 8,
    name: "Python",
    icon: <SiPython />,
    category: "Programming Languages",
    proficiency: 80,
    color: "#A8B9CC",
  },
  {
    id: 9,
    name: "Flutter",
    icon: <SiFlutter />,
    category: "Mobile Development",
    proficiency: 85,
    color: "#02569B",
  },
  {
    id: 10,
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    proficiency: 75,
    color: "#339933",
  },
  {
    id: 11,
    name: "Firebase",
    icon: <FaReact />,
    category: "Backend",
    proficiency: 78,
    color: "#FFCA28",
  },
  {
    id: 12,
    name: "Git",
    icon: <FiGithub />,
    category: "Tools",
    proficiency: 85,
    color: "#F05032",
  },
];

// Professional experience data
export const professionalExperience = [
  {
    id: 1,
    company: "Divum Corporate Services Pvt Ltd",
    role: "Mobile Application Developer",
    duration: "Jul 2023 - Present",
    techStack: ["React Native", "TypeScript", "Firebase", "Redux", "Git"],
    description:
      "Developed and maintained cross-platform mobile applications using React Native. Implemented state management with Redux and integrated Firebase for backend services.",
  },
];

export const educationData = [
  {
    id: 1,
    year: "2020 - 2024",
    position: "Bannari Amman Institute of Technology, Sathyamangalam",
    company: "B.Tech Computer Technology with 8.68 CGPA",
  },
  {
    di: 2,
    year: "2018 - 2020",
    position: "ARB International School, Pollachi",
    company: "HSC with a percentage of 80",
  },
  {
    id: 3,
    year: "2017 - 2018",
    position: "ARB International School, Pollachi",
    company: "SSLC with a percentage of 71.17",
  },
];

export const workImages = [
  {
    id: 1,
    images: [work1, portfolio, profile],
    name: "Amazon Clone",
    category: "live",
    description: "A full-stack e-commerce clone with React and Node.js",
    github: "https://github.com/GOKULNATH-SELVARAJ/amazon-clone",
    live: "https://amazon-clone-eight-rho.vercel.app/",
  },
  {
    id: 2,
    images: [portfolio, work1, profile],
    name: "Portfolio Website",
    category: "personal",
    description: "Personal portfolio built with React and SCSS",
    github: "https://github.com/GOKULNATH-SELVARAJ/portfolio",
    live: "#",
  },
  {
    id: 3,
    images: [profile, work1, portfolio],
    name: "Chat Application",
    category: "live",
    description: "Real-time chat app with Socket.io and React",
    github: "https://github.com/GOKULNATH-SELVARAJ/chat-app",
    live: "https://chat-app-demo.vercel.app/",
  },
  {
    id: 4,
    images: [work1, profile, portfolio],
    name: "Task Manager",
    category: "personal",
    description: "Personal task management application",
    github: "https://github.com/GOKULNATH-SELVARAJ/task-manager",
    live: "#",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: " Meenakshipuram, Palakkad ",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "us.gokulnath@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-9345592552",
  },
];
