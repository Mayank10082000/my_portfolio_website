import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  // Calculate a different delay for each card to create staggered floating
  const getFloatDelay = (idx) => 0.4 + idx * 0.4; // Stagger by 0.4 seconds each

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.8,
        delay: index * 0.2,
      }}
      className="p-5 py-8 sm:py-6 sm:p-2 h-full"
    >
      <motion.div
        // Initial hover effect
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
        // Floating animation
        animate={{
          y: [0, -8, 0], // Slightly subtle movement
          transition: {
            duration: 3.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: getFloatDelay(index),
          },
        }}
        className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-full"
      >
        <h1 className="text-[1.4rem] font-semibold sm:text-xl">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 my-1">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + techIndex * 0.05 }}
              key={techIndex}
              className="px-2 py-1 bg-gray-200 rounded-md text-xs"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <p className="text-[.9rem] text-justify break-words text-gray-500 flex-grow">
          {project.description}
        </p>

        <div className="flex gap-2 mt-2">
          {project.liveDemo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveDemo}
              className="px-2 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className="px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
