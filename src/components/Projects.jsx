import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Projects
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full"></div>
      {/* card*/}
      <div className="grid grid-cols-1 gap-10 w-[90%] mx-auto mt-8">
        {/* Project Row 1 */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-10">
          {/* Project 1 */}
          <fieldset
            data-aos="zoom-in"
            className="p-5 py-8 sm:py-6 sm:p-2 h-full"
          >
            <div className="relative h-full">
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-full">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Chatty - Connect With Friends
                </h1>
                <div className="flex flex-wrap gap-2 my-1">
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    ReactJS
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    NodeJS
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Socket.io
                  </span>
                </div>
                <p className="text-[.9rem] text-justify break-words text-gray-500 flex-grow">
                  Built a fullstack realtime chat application in which people
                  can connect with their friends and chat. It has various
                  functionalities such as authentication mechanisms, account
                  creation and deletion, and realtime messaging.
                </p>
                <div className="flex gap-2 mt-2">
                  <a
                    href="#"
                    className="px-2 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Project 2 */}
          <fieldset
            data-aos="zoom-in"
            data-aos-delay="300"
            className="p-5 py-8 sm:py-6 sm:p-2 h-full"
          >
            <div className="relative h-full">
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-full">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Heart Stroke Predictor
                </h1>
                <div className="flex flex-wrap gap-2 my-1">
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    NumPy
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Pandas
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Random Forest
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Flask
                  </span>
                </div>
                <p className="text-[.9rem] text-justify text-gray-500 flex-grow">
                  Developed a machine learning model using Random Forest
                  Classifier to predict the risk of heart stroke based on
                  various health and lifestyle factors such as age, gender,
                  blood pressure, smoking status, etc. and deployed the model
                  locally using Flask.
                </p>
                <div className="flex gap-2 mt-2">
                  <a
                    href="#"
                    className="px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Project 3 */}
          <fieldset
            data-aos="zoom-in"
            data-aos-delay="600"
            className="p-5 py-8 sm:py-6 sm:p-2 h-full"
          >
            <div className="relative h-full">
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg h-full">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Disease Prediction Using Chest X-Ray
                </h1>
                <div className="flex flex-wrap gap-2 my-1">
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    TensorFlow
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    VGG-16
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    CNNs
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                    Flask
                  </span>
                </div>
                <p className="text-[.9rem] text-justify break-words text-gray-500 flex-grow">
                  Built a deep learning model to detect COVID-19 infection from
                  chest X-ray images using CNNs and fine tuning pre-trained
                  VGG-16 model on dataset and deployed the model locally using
                  Flask.
                </p>
                <div className="flex gap-2 mt-2">
                  <a
                    href="#"
                    className="px-2 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Projects;
