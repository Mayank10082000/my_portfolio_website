import React, { useState, useRef } from "react";
import {
  FaMedal,
  FaAward,
  FaCertificate,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import achievementData from "../data/achievementData";
import { motion } from "framer-motion";

// 3D Card component with vertical design
const AchievementCard3D = ({ achievement, index }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate cursor position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (from -10 to 10 degrees)
    const rotateY = (x / rect.width) * 20 - 10;
    const rotateX = ((y / rect.height) * 20 - 10) * -1; // Invert X rotation

    // Calculate glare effect position (0-100%)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  // Function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "medal":
        return <FaMedal size={32} color="#f59e0b" />;
      case "award":
        return <FaAward size={32} color="#f59e0b" />;
      case "certificate":
        return <FaCertificate size={32} color="#f59e0b" />;
      case "trophy":
        return <FaTrophy size={32} color="#f59e0b" />;
      default:
        return <FaStar size={32} color="#f59e0b" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="w-full h-full"
    >
      <div
        ref={cardRef}
        className="relative h-full"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="w-full h-full transition-all duration-200 ease-out rounded-xl overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovering
              ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
              : "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
            boxShadow: isHovering
              ? "0 20px 30px rgba(0,0,0,0.2)"
              : "0 10px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Glare effect */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 rounded-xl"
            style={{
              opacity: isHovering ? 0.5 : 0,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
              zIndex: 2,
            }}
          />

          {/* Card content with depth */}
          <div
            className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl border-t-4 border-yellow-400 h-full flex flex-col"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Icon Container */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                {renderIcon(achievement.icon)}
              </div>
            </div>

            {/* Title and Content */}
            <h4 className="text-xl sm:text-lg exsm:text-base font-semibold text-gray-800 text-center mb-2 line-clamp-3">
              {achievement.title}
            </h4>

            {achievement.subtitle && (
              <p className="text-gray-500 text-sm sm:text-xs text-center mb-2 line-clamp-2">
                {achievement.subtitle}
              </p>
            )}

            {achievement.description && (
              <p className="text-gray-600 font-medium text-sm sm:text-xs text-center mb-4 line-clamp-3">
                {achievement.description}
              </p>
            )}

            {/* Link at the bottom */}
            <div className="mt-auto pt-4 flex justify-center">
              <a
                href={achievement.link}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {achievement.linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Achievement = () => {
  return (
    <div
      id="achievements"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10"
      >
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Achievements & Certifications
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </motion.div>

      {/* Achievement Cards 2x2 Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 w-[90%] mx-auto">
        {achievementData.map((achievement, index) => (
          <div
            key={achievement.id}
            className="min-h-[450px] sm:min-h-[320px] exsm:min-h-[300px]"
          >
            <AchievementCard3D achievement={achievement} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
