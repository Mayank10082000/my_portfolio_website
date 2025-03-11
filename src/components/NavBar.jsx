import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "experience",
  },
  {
    id: 3,
    name: "projects",
  },
  {
    id: 4,
    name: "education",
  },
  {
    id: 5,
    name: "achievements",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto fixed top-0 py-5 sm:py-4 z-50 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Mayank Gupta.
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger with spinning animation (will be visible both in and outside the menu) */}
          <motion.button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block md:z-50"
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <HiMenu size={25} />
          </motion.button>

          <motion.ul
            className="flex items-center space-x-11 md:flex-col md:fixed md:right-0 md:top-0 md:bg-white md:space-x-0 md:text-center md:w-full md:max-w-[300px] md:h-screen md:z-40"
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : "100%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className="md:m-6 md:flex md:justify-center md:w-full"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <a
              href="https://www.linkedin.com/in/mayankgupta10082000/"
              className="bg-black text-[0.78rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              HIRE ME
            </a>
          </motion.ul>
        </motion.div>
      </nav>
    </div>
  );
};

export default NavBar;
