import React from "react";
import { contactLinks, footerConfig, quickLinks } from "../data/footerData";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-6 mt-16">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 px-6">
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
