import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <>
      <header className="flex max-w-lg mx-auto">
        <div className="flex-1 w-32">
          <Link
            to="/"
            className="text-white hover:underline font-semibold text-xl tracking-tight"
          >
            React Laravel App
          </Link>
        </div>
        <div className="flex-1 w-32 ">
          <ul className="float-right flex mt-1">
            <li className="mr-6"></li>
            <li className="mr-6">
              <Link to="/dashboard" className="text-white hover:underline">
                Dashboard
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/login" className="text-white hover:underline">
                Login
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/logout" className="text-white hover:underline">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="flex max-w-lg mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <br />
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
          <br />
          <Link to="/logout" className="text-white hover:underline">
            Logout
          </Link>
          <br />
          <Link to="/forgot-password" className="text-white hover:underline">
            Forgot Password
          </Link>
          <br />
          <Link to="/account" className="text-white hover:underline">
            Account
          </Link>
          <br />
          <Link to="/confirm-email" className="text-white hover:underline">
            Confirm Email
          </Link>
          <br />
          <Link to="/create-account" className="text-white hover:underline">
            Create Account
          </Link>
          <br />
          <Link to="/dashboard" className="text-white hover:underline">
            Dashboard
          </Link>
          <br />
          <Link to="/update-account" className="text-white hover:underline">
            Update Account
          </Link>
          <br />
          <Link to="/update-password" className="text-white hover:underline">
            Update Password
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
