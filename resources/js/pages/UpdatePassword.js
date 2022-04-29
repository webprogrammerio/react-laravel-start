import React from 'react';
import { Link } from 'react-router-dom';
import UpdatePasswordForm from '../components/Account/UpdatePasswordForm';

const UpdatePassword = () => {
  return (
    <>
      <section>
        <p className="pb-2">
          <Link
            to="/account"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
          >
            &lsaquo; Return to Account
          </Link>
        </p>
        <h1 className="text-2xl mb-4">Update Password</h1>
        <UpdatePasswordForm />
      </section>
    </>
  );
};

export default UpdatePassword;
