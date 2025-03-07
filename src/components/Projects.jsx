// import React from "react";

// const Projects = () => {
//   return (
//     <div id="projects" className=" container m-auto   mt-16">
//       {/* heading */}
//       <div data-aos="fade-up" className="relative mb-5">
//         <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
//           Projects
//         </h3>
//         <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
//       </div>
//       <div data-aos="fade-up" className="left flex-1 w-full">
//         <p className=" text-gray-700 font-medium w-[100%]">My Projects.</p>
//       </div>
//       {/* card*/}
//       <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
//         <div className="left flex-1 flex items-center justify-center">
//           <fieldset
//             data-aos="zoom-in"
//             className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
//           >
//             <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
//               Experience
//             </legend>
//             <div className=" relative">
//               {/* design */}
//               <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
//                 <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
//                 <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
//                 <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
//               </div>
//               {/* design */}
//               <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
//                 <h1 className="text-[1.4rem] font-semibold sm:text-xl">
//                   Software Developer
//                 </h1>
//                 <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
//                   Company Name
//                 </span>
//                 <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
//                   June 2023 - Present
//                 </span>
//                 <p className=" text-[.9rem] text-justify break-words text-gray-500">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Excepturi nihil aut quae obcaecati alias placeat totam aperiam
//                   pariatur quam? Accusantium minima aperiam error obcaecati
//                   autem doloribus deserunt qui, laborum incidunt amet, numquam
//                   eos cum tempora. Debitis, esse quae corporis deserunt officia
//                   quos in a, quaerat vero odio vitae.
//                 </p>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//         <div className="right flex-1 flex items-center justify-center">
//           <fieldset
//             data-aos="zoom-in"
//             className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
//           >
//             <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
//               Education
//             </legend>
//             <div className=" relative">
//               {/* design */}
//               <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
//                 <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
//                 <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
//                 <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
//               </div>
//               {/* design */}
//               <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
//                 <h1 className="text-[1.4rem] font-semibold sm:text-xl">
//                   B.Tech, Computer Science
//                 </h1>
//                 <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
//                   College Name
//                 </span>
//                 <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
//                   Year 2023 - Year 2027
//                 </span>
//                 <p className=" text-[.9rem] text-justify text-gray-500">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Excepturi nihil aut quae obcaecati alias placeat totam aperiam
//                   pariatur quam? Accusantium minima aperiam error obcaecati
//                   autem doloribus deserunt qui, laborum incidunt amet, numquam
//                   eos cum tempora. Debitis, esse quae corporis deserunt officia
//                   quos in a, quaerat vero odio vitae.
//                 </p>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import styled from "styled-components";

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
      {/* card */}
      <ProjectsWrapper className="w-[90%] sm:w-full mt-5 mx-auto overflow-hidden">
        <div className="project-container flex gap-8 md:flex-col sm:gap-5">
          <ProjectCard
            className="project-card flex-1 min-w-[45%] md:min-w-full"
            data-aos="fade-right"
          >
            <fieldset className="w-full p-5 py-12 sm:py-8 sm:p-2">
              <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                Chatty App
              </legend>
              <div className="relative">
                {/* design */}
                <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                  <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                  <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                </div>
                {/* design */}
                <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Chatty - Connect With Friends
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                      MERN Stack
                    </span>
                    <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                      (MongoDB, Express, React, Node.js)
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href="#"
                      className="text-sm bg-black text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                  <p className="text-[.9rem] text-justify break-words text-gray-500 mt-2">
                    Built a fullstack realtime chat application where users can
                    connect with friends and chat. Implemented features
                    including authentication mechanisms, account creation and
                    deletion, and real-time messaging using Socket.io. Used
                    MongoDB for database, Express and Node.js for backend, and
                    React for the frontend.
                  </p>
                </div>
              </div>
            </fieldset>
          </ProjectCard>

          <ProjectCard
            className="project-card flex-1 min-w-[45%] md:min-w-full"
            data-aos="fade-left"
          >
            <fieldset className="w-full p-5 py-12 sm:py-8 sm:p-2">
              <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                ML Project
              </legend>
              <div className="relative">
                {/* design */}
                <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                  <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                  <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                </div>
                {/* design */}
                <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Heart Stroke Predictor
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                      Python, Machine Learning
                    </span>
                    <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                      (Flask, Random Forest)
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href="#"
                      className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                  <p className="text-[.9rem] text-justify text-gray-500 mt-2">
                    Developed a machine learning model using Random Forest
                    Classifier to predict the risk of heart stroke based on
                    various health and lifestyle factors such as age, gender,
                    blood pressure, smoking status, etc. Preprocessed data using
                    NumPy and Pandas, and deployed the model locally using Flask
                    for an interactive user interface.
                  </p>
                </div>
              </div>
            </fieldset>
          </ProjectCard>

          {/* Additional projects can be added here */}
        </div>
      </ProjectsWrapper>
    </div>
  );
};

// Styled components for animations
const ProjectsWrapper = styled.div`
  position: relative;

  .project-container {
    animation: slideAnimation 20s linear infinite;
  }

  .project-container:hover {
    animation-play-state: paused;
  }

  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .project-container {
      animation: none;
    }
  }
`;

const ProjectCard = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export default Projects;
