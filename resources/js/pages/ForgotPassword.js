import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../components/Account/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <>
      <section>
        <p className="pb-2">
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
          >
            &lsaquo; Return to Login
          </Link>
        </p>
        <h1 className="text-2xl mb-4">Forgot Password</h1>
        <ForgotPasswordForm />
      </section>
    </>
  );
};

export default ForgotPassword;
