import React, { useState, useRef } from "react";
import {
  FaMedal,
  FaAward,
  FaCertificate,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AchievementCard = ({ achievement, index, variants }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  // Get staggered delay for floating animation
  const getFloatDelay = (idx) => 0.3 + idx * 0.4;

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
        return <FaMedal size={28} color="#f59e0b" />;
      case "award":
        return <FaAward size={28} color="#f59e0b" />;
      case "certificate":
        return <FaCertificate size={28} color="#f59e0b" />;
      case "trophy":
        return <FaTrophy size={28} color="#f59e0b" />;
      default:
        return <FaStar size={28} color="#f59e0b" />;
    }
  };

  return (
    <motion.div
      variants={variants}
      custom={index}
      className="w-full h-full"
      // Add the floating animation
      animate={{
        y: [0, -12, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: getFloatDelay(index),
        },
      }}
    >
      <div
        ref={cardRef}
        className="relative h-full"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Enhanced shadow for floating effect */}
        <div
          className="absolute w-[90%] h-[95%] rounded-xl opacity-25 bg-black mx-auto left-0 right-0"
          style={{
            maxWidth: "240px",
            bottom: "-10px",
            filter: "blur(15px)",
            zIndex: 0,
            transform: isHovering
              ? `translateY(15px) scale(0.9)`
              : `translateY(10px) scale(0.95)`,
            transition: "transform 0.2s ease-out",
          }}
        />

        <div
          className="w-full h-full max-w-[260px] mx-auto transition-all duration-200 ease-out rounded-xl overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovering
              ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
              : "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
            boxShadow: isHovering
              ? "0 20px 30px rgba(0,0,0,0.2)"
              : "0 10px 20px rgba(0,0,0,0.1)",
            position: "relative",
            zIndex: 1,
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
            className="bg-gradient-to-b from-yellow-50 to-white p-4 rounded-xl border-t-4 border-yellow-400 h-full flex flex-col"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Icon Container */}
            <div className="flex justify-center items-center mb-3">
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
                {renderIcon(achievement.icon)}
              </div>
            </div>

            {/* Title and Content */}
            <h4 className="text-lg sm:text-base exsm:text-sm font-semibold text-gray-800 text-center mb-2 line-clamp-3">
              {achievement.title}
            </h4>

            {achievement.subtitle && (
              <p className="text-gray-500 text-xs sm:text-[10px] text-center mb-2 line-clamp-2">
                {achievement.subtitle}
              </p>
            )}

            {achievement.description && (
              <p className="text-gray-600 font-medium text-xs sm:text-[10px] text-center mb-3 line-clamp-3">
                {achievement.description}
              </p>
            )}

            {/* Link at the bottom */}
            <div className="mt-auto pt-2 flex justify-center">
              <a
                href={achievement.link}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition-colors text-xs font-medium"
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

export default AchievementCard;
