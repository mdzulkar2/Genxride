'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "About", path: "/about" },
  ];

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            GenXRide
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.path} className="relative group">
                  <Link
                    href={link.path}
                    className={`transition ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
              Sign Up
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg ${
                pathname === link.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/login" className="block text-gray-300">
            Login
          </Link>

          <Link href="/signup" className="block bg-white text-black px-4 py-2 rounded-full text-center">
            Sign Up
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};