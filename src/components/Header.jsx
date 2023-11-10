import React from "react";
import { Search } from "@geist-ui/icons";

function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-2 text-sm text-white bg-accent">
      <nav className="flex items-center justify-between">
        <h2>React Essentials</h2>
        <ul className="items-center hidden text-xs sm:flex">
          <li className="mr-6">
            <a href="/" className="text-gray-200 hover:text-white">
              Components
            </a>
          </li>
          <li className="mr-6">
            <a href="/about" className="text-gray-200 hover:text-white">
              Hooks
            </a>
          </li>
          <li className="mr-6">
            <a href="/about" className="text-gray-200 hover:text-white">
              Layouts
            </a>
          </li>
          <li className="mr-6">
            <button className="mt-1 text-gray-200 hover:text-white">
              <Search size={16} />
            </button>
          </li>
        </ul>
        <ul className="flex items-center text-xs sm:hidden">
          <li className="mr-6">
            <button className="mt-1 text-gray-200 hover:text-white">
              <Search size={16} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
