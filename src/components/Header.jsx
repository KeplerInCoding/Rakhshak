import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref for the mobile menu
  const menuRef = useRef(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <img
            src="/logo.png"
            alt="Government Logo"
            className="inline-block h-8 mr-2"
          />
          Project Name
        </div>
        <div className="md:hidden flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}    
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/guidelines" className="hover:text-blue-300">Guidelines</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/red-zones" className="hover:text-blue-300">Red Zones</Link>
          <Link to="/login" className="hover:text-blue-300">Login</Link>
        </nav>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden fixed inset-0 bg-blue-900 bg-opacity-80 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center mt-16">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Link
              to="/"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/guidelines"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Guidelines
            </Link>
            <Link
              to="/contact"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/red-zones"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Red Zones
            </Link>
            <Link
              to="/login"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
