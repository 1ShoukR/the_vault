import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-white">
            Home
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/create-account"
            className="text-white hover:text-blue-200 hover:underline"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-blue-200 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
