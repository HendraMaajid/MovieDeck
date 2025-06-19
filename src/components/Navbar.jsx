import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand/Logo */}
        <Link to="/" className="text-white text-2xl font-extrabold mb-4 md:mb-0 tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out">
          MovieDeck
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
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
    </nav>
  );
}

export default Navbar;