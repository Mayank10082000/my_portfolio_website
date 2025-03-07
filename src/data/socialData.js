import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiKaggle, SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const socialData = [
  {
    id: 1,
    icon: AiFillGithub,
    url: "https://github.com/Mayank10082000",
    ariaLabel: "GitHub",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/mayankgupta10082000/",
    ariaLabel: "LinkedIn",
  },
  {
    id: 3,
    icon: SiKaggle,
    url: "https://www.kaggle.com/mayankasheshgupta",
    ariaLabel: "Kaggle",
  },
  {
    id: 4,
    icon: SiLeetcode,
    url: "https://leetcode.com/u/mayankgupta2000/",
    ariaLabel: "LeetCode",
  },
  {
    id: 5,
    icon: MdEmail,
    url: "mailto:mayankasheshgupta@gmail.com",
    ariaLabel: "Email",
  },
];

export const heroData = {
  name: "Mayank Gupta",
  roles: ["Software Engineer"], // You can add more roles if needed
  resumeLink: "../assets/Resume.pdf", // This path will be imported in Hero.jsx
  linkedInLink: "https://www.linkedin.com/in/mayankgupta10082000/",
  profileImage: "../assets/mayank-gupta.png", // This path will be imported in Hero.jsx
};
