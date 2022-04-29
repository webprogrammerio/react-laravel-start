import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Account/LoginForm';

const Login = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-4">Login</h1>
        <LoginForm />
        <p className="pt-2">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
          >
            Forgot your password?
          </Link>
        </p>
      </section>

      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>

      <section className="pt-2">
        <Link
          to="/create-account"
          className="bg-white hover:bg-gray-200 border border-solid border-blue-500 text-blue-500 font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
        >
          Create An Account
        </Link>
      </section>
    </>
  );
};

export default Login;
