import React from "react";
import {
  FaMedal,
  FaAward,
  FaCertificate,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import achievementData from "../data/achievementData";
import { motion } from "framer-motion";

const Achievement = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "medal":
        return <FaMedal size={20} color="white" />;
      case "award":
        return <FaAward size={20} color="white" />;
      case "certificate":
        return <FaCertificate size={20} color="white" />;
      case "trophy":
        return <FaTrophy size={20} color="white" />;
      default:
        return <FaStar size={20} color="white" />;
    }
  };

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

      {/* Mobile view - ZIGZAG PATTERN */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

          {achievementData.map((achievement, index) => (
            <div key={`mobile-${achievement.id}`} className="mb-16 relative">
              {index % 2 === 0 ? (
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    {" "}
                    {/* Increased padding from pr-4 to pr-8 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      whileHover={{
                        x: -4,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                        backgroundColor: "rgb(254, 249, 195)", // yellow-100
                        transition: { duration: 0.2 },
                      }}
                      className="ml-auto bg-yellow-50 p-4 rounded-lg shadow-lg border-t-4 border-yellow-400 text-right"
                      style={{ marginRight: "12px" }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800">
                        {achievement.title}
                      </h4>
                      {achievement.description && (
                        <p className="text-gray-600 font-medium text-sm">
                          {achievement.description}
                        </p>
                      )}
                      {achievement.subtitle && (
                        <p className="text-gray-500 text-xs mt-1">
                          {achievement.subtitle}
                        </p>
                      )}
                      <a
                        href={achievement.link}
                        className="text-blue-500 hover:text-blue-700 hover:underline mt-1 inline-block text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {achievement.linkText}
                      </a>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3 + index * 0.2,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg z-20"
                    >
                      {renderIcon(achievement.icon)}
                    </motion.div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="w-1/2"></div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3 + index * 0.2,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg z-20"
                    >
                      {renderIcon(achievement.icon)}
                    </motion.div>
                  </div>

                  <div className="w-1/2 pl-8">
                    {" "}
                    {/* Increased padding from pl-4 to pl-8 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      whileHover={{
                        x: 4,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                        backgroundColor: "rgb(254, 249, 195)",
                        transition: { duration: 0.2 },
                      }}
                      className="mr-auto bg-yellow-50 p-4 rounded-lg shadow-lg border-t-4 border-yellow-400 text-left"
                      style={{ marginLeft: "12px" }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800">
                        {achievement.title}
                      </h4>
                      {achievement.description && (
                        <p className="text-gray-600 font-medium text-sm">
                          {achievement.description}
                        </p>
                      )}
                      {achievement.subtitle && (
                        <p className="text-gray-500 text-xs mt-1">
                          {achievement.subtitle}
                        </p>
                      )}
                      <a
                        href={achievement.link}
                        className="text-blue-500 hover:text-blue-700 hover:underline mt-1 inline-block text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {achievement.linkText}
                      </a>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view - STRAIGHT PATTERN */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

          {achievementData.map((achievement, index) => (
            <div key={`desktop-${achievement.id}`} className="mb-20 relative">
              <div className="flex justify-center mb-8">
                {" "}
                {/* Increased margin-bottom from mb-4 to mb-8 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.4 + index * 0.3,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg z-20"
                >
                  {renderIcon(achievement.icon)}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.3 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  backgroundColor: "rgb(254, 249, 195)", // yellow-100
                  transition: { duration: 0.2 },
                }}
                className="bg-yellow-50 p-6 rounded-lg shadow-lg border-t-4 border-yellow-400 max-w-md mx-auto"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {achievement.title}
                </h4>
                {achievement.description && (
                  <p className="text-gray-600 font-medium">
                    {achievement.description}
                  </p>
                )}
                {achievement.subtitle && (
                  <p className="text-gray-500 text-sm mt-2">
                    {achievement.subtitle}
                  </p>
                )}
                <a
                  href={achievement.link}
                  className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {achievement.linkText}
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
