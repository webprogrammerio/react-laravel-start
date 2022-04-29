import React from 'react';
import { Link } from 'react-router-dom';
import CreateAccountForm from '../components/Account/CreateAccountForm';

const CreateAccount = () => {
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
        <h1 className="text-2xl mb-4">Create An Account</h1>
        <CreateAccountForm />
      </section>
    </>
  );
};

export default CreateAccount;
