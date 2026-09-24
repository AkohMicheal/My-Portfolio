// src/components/navigationbar/Navbar.tsx
"use client";

import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "All Projects", href: "/projects" },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1edfv5JOUJO6ppSqy39pqgHvW1jLwoRxV/view?usp=sharing",
      external: true,
      download: true,
    },
    { name: "Home", href: "/" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-black/80 backdrop-blur-sm text-white px-6 py-4 flex items-center justify-between rounded-3xl border border-green-500/60 shadow-lg fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50"
    >
      {/* Logo */}
      <Link href="/">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-green-500 text-xl">{`</>`}</span>
        <span className="tracking-wide">AkohTech.Dev</span>
      </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
              download={item.download ? true : undefined}
              className="hover:text-green-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex gap-5 text-lg">
        <Link
          href="http://x.com/AkohTech"
          className="hover:text-green-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.instagram.com/akohtech?igsh=MXQxcW5xdjE2aWcxZw=="
          className="hover:text-green-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://linkedin.com/in/micheal-akoh"
          className="hover:text-green-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/AkohTech?mibextid=ZbWKwL"
          className="hover:text-green-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-sm text-white px-6 py-4 flex flex-col gap-4 md:hidden border-t border-green-500/60">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-green-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex gap-4 text-lg mt-4">
            <Link
              href="http://x.com/AkohTech"
              className="hover:text-green-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.instagram.com/akohtech?igsh=MXQxcW5xdjE2aWcxZw=="
              className="hover:text-green-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/micheal-akoh

"
              className="hover:text-green-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/AkohTech?mibextid=ZbWKwL"
              className="hover:text-green-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
