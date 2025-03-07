import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiKaggle } from "react-icons/si";

export const contactLinks = [
  {
    id: 1,
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/mayankgupta10082000/",
    label: "LinkedIn",
  },
  {
    id: 2,
    icon: FaGithub,
    url: "https://github.com/Mayank10082000",
    label: "GitHub",
  },
  {
    id: 3,
    icon: MdEmail,
    url: "mailto:mayankasheshgupta@gmail.com",
    label: "Email",
  },
  {
    id: 4,
    icon: SiLeetcode,
    url: "https://leetcode.com/u/mayankgupta2000/",
    label: "LeetCode",
  },
  {
    id: 5,
    icon: SiKaggle,
    url: "https://www.kaggle.com/mayankasheshgupta",
    label: "Kaggle",
  },
];

export const footerConfig = {
  heading: "Let's Connect",
  copyright: "Mayank Gupta",
  year: new Date().getFullYear(),
};

// Quick links for navigation
export const quickLinks = [
  { id: 1, name: "Home", url: "#home" },
  { id: 2, name: "Skills", url: "#skills" },
  { id: 3, name: "Projects", url: "#projects" },
  { id: 4, name: "Experience", url: "#experience" },
  { id: 5, name: "Education", url: "#education" },
];
