import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg relative z-20"> 
      <div className="container mx-auto flex justify-between items-center">

        <Link
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          MovieDeck
        </Link>

        {/* Hamburger/Close Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" /> 
            ) : (
              <Bars3Icon className="h-8 w-8" /> 
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && ( 
        <div className="md:hidden absolute top-full right-0 mt-2 bg-gray-700 w-48 rounded-md shadow-lg py-2 z-10">
          <ul className="flex flex-col">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;