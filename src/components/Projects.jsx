import React, { useRef } from "react";
import { projectsData } from "../data/projectsData";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../chip/ProjectCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Individual item animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div
      id="projects"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-5"
      >
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Projects
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-3 gap-6 w-[90%] mx-auto mt-8 md:grid-cols-1 md:gap-10"
      >
        {projectsData.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
