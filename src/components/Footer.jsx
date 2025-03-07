// import React from "react";
// import { FaTelegramPlane } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { RiInstagramFill } from "react-icons/ri";

// const Footer = () => {
//   return (
//     <div
//       id="projects"
//       className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]"
//     >
//       <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
//         <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
//           Let's Connect
//         </h2>
//         <div className=" flex items-center justify-center gap-8 sm:gap-5">
//           <a
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             href=""
//             className="box font-medium text-white   flex items-center justify-center flex-col"
//           >
//             <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
//             <p>Telegram</p>
//           </a>
//           <a
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             href=""
//             className="box font-medium text-white  flex items-center justify-center flex-col"
//           >
//             <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
//             <p>WhatsApp</p>
//           </a>
//           <a
//             data-aos="fade-up"
//             data-aos-duration="1400"
//             href=""
//             className="box font-medium text-white  flex items-center justify-center flex-col"
//           >
//             <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
//             <p>Instagram</p>
//           </a>
//         </div>
//         <div className="sm:text-[12px]">
//           | Copyright &copy; <span>2025 Dev AlphaSpace </span> All rights
//           reserved
//           <a href="#"></a> |
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { contactLinks, footerConfig, quickLinks } from "../data/footerData";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-6 mt-16">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 px-6">
          {/* About section */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Mayank Gupta</h3>
            <p className="text-gray-600 mb-4">
              Software Engineer passionate about building innovative solutions
              and exploring new technologies.
            </p>
            <p className="text-gray-600">
              Based in India, available for new opportunities and
              collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-yellow-500 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">{footerConfig.heading}</h3>
            <div className="flex flex-wrap gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-500 transition"
                  aria-label={link.label}
                >
                  <link.icon className="text-2xl" />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-2 sm:mb-0">
              &copy; {footerConfig.year} {footerConfig.copyright}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
