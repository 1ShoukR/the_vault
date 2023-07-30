import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxTypescriptTypes";

const Navbar = () => {
  const userAuth = useAppSelector((state) => state.userAuth);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-white">
            Home
          </Link>
        </div>
        {userAuth.isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {userAuth.first_name}</span>
            <Link
              to="/feature-1"
              className="text-white hover:text-blue-200 hover:underline"
            >
              Feature 1
            </Link>
            <Link
              to="/feature-2"
              className="text-white hover:text-blue-200 hover:underline"
            >
              Feature 2
            </Link>
            {/* Add more links as needed */}
            <Link
              to="/logout"
              className="text-white hover:text-blue-200 hover:underline"
            >
              Logout
            </Link>
          </div>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
