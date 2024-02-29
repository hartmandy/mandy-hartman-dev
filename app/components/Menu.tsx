import { Link } from "@remix-run/react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 py-4">
        <button onClick={toggleMenu} className="py-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-neutral-200 rounded-md shadow-lg z-10 overflow-hidden">
            <ul>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Link
                  to="/"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Link
                  to="/projects"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Link
                  to="/blog"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Link
                  to="/about"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
