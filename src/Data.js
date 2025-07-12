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
  SiRedux,
  SiFirebase,
  SiC,
  SiXcode,
  SiRealm,
} from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { AiFillAndroid } from "react-icons/ai";
import abg_logo from "./assets/ABG_logo.png";
import gintaa_logo from "./assets/Gintaa_Logo.png";
import gintaa_1 from "./assets/Gintaa_1.png";
import gintaa_2 from "./assets/Gintaa_2.png";
import gintaa_3 from "./assets/Gintaa_3.png";
import gintaa_4 from "./assets/Gintaa_4.png";
import abg_connect_1 from "./assets/ABG_connect_1.png";
import abg_connect_2 from "./assets/ABG_connect_2.png";
import abg_connect_3 from "./assets/ABG_connect_3.png";
import abg_connect_4 from "./assets/ABG_connect_4.png";
import clubM_logo from "./assets/ClubM_logo.png";
import clubM_1 from "./assets/ClubM_1.png";
import clubM_2 from "./assets/ClubM_2.png";
import clubM_3 from "./assets/ClubM_3.png";
import clubM_4 from "./assets/ClubM_4.png";

export const navLinks = ["home", "skills", "projects", "contact"];

export const socialIcons = [
  <a href="https://www.linkedin.com/in/gokulnath363/">
    <FaLinkedin color="#cbbbf9" size={20} />
  </a>,
  <a href="https://github.com/GOKULNATH-SELVARAJ">
    <FiGithub color="#cbbbf9" size={20} />
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
    category: "Mobile App Development",
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
    color: "#cbbbf9",
  },
  {
    id: 5,
    name: "Android",
    icon: <AiFillAndroid />,
    category: "Mobile App Development",
    proficiency: 85,
    color: "#78C257",
  },
  {
    id: 6,
    name: "iOS",
    icon: <SiXcode />,
    category: "Mobile App Development",
    proficiency: 85,
    color: "#61DAFB",
  },
  {
    id: 7,
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Frontend",
    proficiency: 90,
    color: "#E34F26",
  },
  {
    id: 8,
    name: "CSS3",
    icon: <FaCss3 />,
    category: "Frontend",
    proficiency: 85,
    color: "#1572B6",
  },
  {
    id: 9,
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
    proficiency: 82,
    color: "#61DAFB",
  },
  {
    id: 10,
    name: "Python",
    icon: <SiPython />,
    category: "Programming Languages",
    proficiency: 80,
    color: "#A8B9CC",
  },
  {
    id: 11,
    name: "Flutter",
    icon: <SiFlutter />,
    category: "Mobile App Development",
    proficiency: 85,
    color: "#02569B",
  },
  {
    id: 12,
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    proficiency: 75,
    color: "#339933",
  },
  {
    id: 13,
    name: "Firebase",
    icon: <SiFirebase />,
    category: "Backend",
    proficiency: 78,
    color: "#FFCA28",
  },
  {
    id: 14,
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
    techStack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
      "Git",
      "Kotlin",
    ],
    description:
      "Contributed to multiple cross-domain mobile apps including ABG Connect, Gintaa Delivery Partner, and Club Mahindra. Implemented Firebase push notifications and optimized API calls using Redux in ABG Connect. Developed a native Kotlin module in Gintaa to play delivery alerts even in Silent/DND mode. Improved UI/UX and performance in the Club Mahindra app, including dynamic carousel components. Collaborated with cross-functional teams to deliver scalable and user-friendly solutions.",
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
    images: [
      abg_logo,
      abg_connect_1,
      abg_connect_2,
      abg_connect_3,
      abg_connect_4,
    ],
    name: "ABG Connect",
    category: "live",
    description:
      "ABG Connect is a corporate event management app that allows users to create and manage events, upload photos and documents, and share important information with participants. It features real-time push notifications to keep attendees informed and engaged, making event coordination smooth and efficient for teams.",
    github: "",
    live: {
      Android:
        "https://play.google.com/store/apps/details?id=abg.mice.android&pcampaignid=web_share",
      iOS: "https://apps.apple.com/in/app/abg-connect/id6504823580",
      macOS: "https://apps.apple.com/in/app/abg-connect/id6504823580",
      Windows:
        "https://play.google.com/store/apps/details?id=abg.mice.android&pcampaignid=web_share",
      Linux:
        "https://play.google.com/store/apps/details?id=abg.mice.android&pcampaignid=web_share",
    },
    techStack: [
      { name: "React Native", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Android", icon: <AiFillAndroid /> },
      { name: "iOS", icon: <SiXcode /> },
    ],
  },
  {
    id: 2,
    images: [gintaa_logo, gintaa_1, gintaa_2, gintaa_3, gintaa_4],
    name: "Gintaa Delivery Partner",
    category: "live",
    description:
      "A mobile application built for delivery personnel to manage and streamline order deliveries efficiently. The app includes real-time order updates, route tracking, push notifications, and a native Android module that ensures alert sounds are played even in Silent and DND modes. Developed using React Native with custom Kotlin integrations to enhance reliability and user experience.",
    github: "",
    live: {
      Android:
        "https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.delivery.prod&pcampaignid=web_share",
      iOS: "https://apps.apple.com/in/app/gintaa-delivery-partner-app/id6740474792",
      macOS:
        "https://apps.apple.com/in/app/gintaa-delivery-partner-app/id6740474792",
      Windows:
        "https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.delivery.prod&pcampaignid=web_share",
      Linux:
        "https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.delivery.prod&pcampaignid=web_share",
    },
    techStack: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Firebase", icon: <FaReact /> },
      { name: "Push Notifications", icon: <FaReact /> },
      { name: "Android", icon: <AiFillAndroid /> },
      { name: "iOS", icon: <SiXcode /> },
    ],
  },
  {
    id: 3,
    images: [clubM_logo, clubM_1, clubM_2, clubM_3, clubM_4],
    name: "Club Mahindra",
    category: "live",
    description:
      "A feature-rich mobile application designed to enhance the vacation planning experience for Club Mahindra members. The app allows users to explore resorts, check availability, book holidays, and access exclusive member benefits. Contributed to performance improvements, UI enhancements, and optimized API usage to deliver a smooth and engaging user experience using React Native and Redux.",
    github: "",
    live: {
      Android:
        "https://play.google.com/store/apps/details?id=co.clubmahindra.mahindraholidays&pcampaignid=web_share",
      iOS: "https://apps.apple.com/in/app/club-mahindra/id1146810334",
      macOS: "https://apps.apple.com/in/app/club-mahindra/id1146810334",
      Windows:
        "https://play.google.com/store/apps/details?id=co.clubmahindra.mahindraholidays&pcampaignid=web_share",
      Linux:
        "https://play.google.com/store/apps/details?id=co.clubmahindra.mahindraholidays&pcampaignid=web_share",
    },
    techStack: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Redux", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Realm", icon: <SiRealm /> },
      { name: "Android", icon: <AiFillAndroid /> },
      { name: "iOS", icon: <SiXcode /> },
    ],
  },
  // {
  //   id: 4,
  //   images: [abg_logo, profile, abg_connect_1],
  //   name: "Task Manager",
  //   category: "personal",
  //   description: "Personal task management application",
  //   github: "https://github.com/GOKULNATH-SELVARAJ/task-manager",
  //   live: "#",
  // },
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

export const getOS = () => {
  if (navigator.userAgentData) {
    return navigator.userAgentData.platform;
  }

  // Fallback for non-Chromium browsers (still uses deprecated `platform`)
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/.test(userAgent)) return "iOS";
  if (/mac/.test(userAgent)) return "macOS";
  if (/win/.test(userAgent)) return "Windows";
  if (/linux/.test(userAgent)) return "Linux";

  return "Android";
};
