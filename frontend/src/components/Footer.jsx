import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Career<span className="text-[#6A38C2]">Bridge</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Find your dream job or hire the best talent with ease. Trusted by
            thousands of students and recruiters.
          </p>
        </div>

        {/* For Candidates */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            For Candidates
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Browse Jobs</li>
            <li className="hover:text-white cursor-pointer">Create Resume</li>
            <li className="hover:text-white cursor-pointer">Job Alerts</li>
            <li className="hover:text-white cursor-pointer">Career Advice</li>
          </ul>
        </div>

        {/* For Recruiters */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            For Recruiters
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Post a Job</li>
            <li className="hover:text-white cursor-pointer">
              Browse Candidates
            </li>
            <li className="hover:text-white cursor-pointer">Pricing Plans</li>
            <li className="hover:text-white cursor-pointer">Recruiter Guide</li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
          <p className="text-sm text-gray-400">Email: support@jobportal.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
