import React from "react";

const Achievement = () => {
  return (
    <div
      id="achievements"
      className="container m-auto mt-16"
      style={{ scrollMarginTop: "40px" }}
    >
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Achievements & Certifications
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <div data-aos="fade-up" className="left flex-1 w-full mb-8"></div>

        <div className="achievement-cards flex flex-col gap-6">
          <div
            data-aos="fade-up"
            className="achievement-card border-l-4 border-yellow-500 pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg"
          >
            <h4 className="text-xl font-semibold">
              Associate Cloud Engineer - Google Cloud Platform
            </h4>
            <p className="text-gray-500 text-sm mt-2">Cloud Certification</p>
            <a
              href="https://link-to-gcp-certificate.com"
              className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="achievement-card border-l-4 border-yellow-500 pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg"
          >
            <h4 className="text-xl font-semibold">
              Qualified GATE CSE 2022, 2023, 2024
            </h4>
            <p className="text-gray-500 text-sm mt-2">
              Competitive Examination
            </p>
            <a
              href="https://link-to-gate-scorecard.com"
              className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Score Card
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="achievement-card border-l-4 border-yellow-500 pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg"
          >
            <h4 className="text-xl font-semibold">Qualified GATE DA 2024</h4>
            <p className="text-gray-600 font-medium">
              Score of 491 out of 1000 and AIR 2371
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Competitive Examination
            </p>
            <a
              href="https://link-to-gate-da-scorecard.com"
              className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Score Card
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="achievement-card border-l-4 border-yellow-500 pl-4 py-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] rounded-r-lg"
          >
            <h4 className="text-xl font-semibold">Letter of Appreciation</h4>
            <p className="text-gray-600 font-medium">
              For Qualifying GATE 2022
            </p>
            <a
              href="https://link-to-appreciation-letter.com"
              className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Letter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
