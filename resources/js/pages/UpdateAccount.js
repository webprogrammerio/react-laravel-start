import React from 'react';
import { Link } from 'react-router-dom';
import UpdateAccountForm from '../components/Account/UpdateAccountForm';

const UpdateAccount = () => {
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
        <h1 className="text-2xl mb-4">Update Your Account</h1>
        <UpdateAccountForm />
      </section>
    </>
  );
};

export default UpdateAccount;
