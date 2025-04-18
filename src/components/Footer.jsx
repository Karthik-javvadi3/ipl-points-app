import React from "react";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* IPL Score Tracker Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-3">IPL Score Tracker</h2>
            <p className="text-gray-300 max-w-xs">
              The ultimate destination for IPL cricket fans to stay updated with
              live scores, team standings, and match schedules.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                  Live Scores
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                  Schedule
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                  Teams
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                  Stats
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/k_i_n_g__karthik"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              Download our mobile app for a better experience
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
          © 2025 IPL Score Tracker by Karthik Javvadi . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
