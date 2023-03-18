import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane,  FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { FiGithub } from "react-icons/fi";


import work1 from "./assets/work1.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://www.linkedin.com/in/gokulnath363/">
                <FaLinkedin />
            </a>,
  <a href="https://github.com/GOKULNATH-SELVARAJ">
  <FiGithub />
</a>
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
    value: "gokulnath.ct20@bitsathy.ac.in",
  },
];

export const icons = [
  <SiC />,
  <SiCplusplus />,
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <FaReact />,
  <FaNodeJs />,
  <FaFigma />,
];
export const experiences = [
  {
    id: 1,
    year: "2020 - 2024",
    position: "Bannari Amman Institute of Technology, Sathyamangalam",
    company: "B.Tech Computer Technology",
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
    img: work1,
    name: "project 1",
    category: "web"
  }
]


export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: " Meenakshipuram, Palakkad ",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "gokulnath.ct20@bitsathy.ac.in",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-9345592552",
  },
];