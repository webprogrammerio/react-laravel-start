import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmEmail = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-4">Confirm Email</h1>
        <p className="mb-4">
          (Email cofirmed!)
          <br />
          (Email confirmation error)
          <br />
          (Email already confirmed)
          <br />
        </p>
        <p className="">
          <Link
            to="/login"
            className="bg-white hover:bg-gray-200 border border-solid border-blue-500 text-blue-500 font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
          >
            Proceed to Login
          </Link>
        </p>
      </section>
    </>
  );
};

export default ConfirmEmail;
