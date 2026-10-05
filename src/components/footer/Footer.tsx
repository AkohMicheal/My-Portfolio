// src/components/footer/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-8 rounded-b-lg">
      <p>&copy; {new Date().getFullYear()} AkohTech Lab. All rights reserved.</p>
      <div className="mt-3 space-x-4">
        <a href="https://github.com/AkohMicheal" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com/in/micheal-akoh" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
        <a href="mailto:akohmicheal@gmail.com" className="hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
