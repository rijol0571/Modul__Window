import React from "react";
import { GiDolphin } from "react-icons/gi";

const Header = ({ onSignInClick, onSignUpClick }) => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GiDolphin size={30} />
          <span className="text-lg font-bold">Home Work</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <button
            onClick={onSignInClick}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
          <button
            onClick={onSignUpClick}
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
