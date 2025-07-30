import { Link } from "@remix-run/react";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-6 mb-8 border-b border-neutral-700 px-4 md:px-8">
      <div className="flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-neutral-700 hover:text-black transition-colors"
        >
          Mandy Hartman
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-neutral-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-6 pb-4 border-t border-neutral-700 pt-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-lg text-neutral-700 hover:text-black hover:font-bold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block text-lg text-neutral-700 hover:text-black hover:font-bold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block text-lg text-neutral-700 hover:text-black hover:font-bold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg text-neutral-700 hover:text-black hover:font-bold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-lg text-neutral-700 hover:text-black hover:font-bold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;
