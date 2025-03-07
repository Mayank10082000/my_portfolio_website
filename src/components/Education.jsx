import React from "react";

const Education = () => {
  return (
    <div id="education" className="container m-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Education
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <div data-aos="fade-up" className="left flex-1 w-full mb-8"></div>

        <div className="education-cards flex flex-col gap-6">
          <div
            data-aos="fade-up"
            className="education-card border-l-4 border-yellow-500 pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg"
          >
            <h4 className="text-xl font-semibold">
              Master of Technology - Advanced Computing
            </h4>
            <p className="text-gray-600 font-medium">
              Maulana Azad National Institute of Technology
            </p>
            <p className="text-yellow-500 font-medium">August 2023 - Present</p>
            <p className="text-gray-500 text-sm mt-2">CGPA - 8.66</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="education-card border-l-4 border-yellow-500 pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg"
          >
            <h4 className="text-xl font-semibold">
              Bachelor in Engineering - Information Technology
            </h4>
            <p className="text-gray-600 font-medium">
              Institute of Engineering and Technology, DAVV
            </p>
            <p className="text-yellow-500 font-medium">
              August 2019 - July 2023
            </p>
            <p className="text-gray-500 text-sm mt-2">CGPA - 8.49</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
