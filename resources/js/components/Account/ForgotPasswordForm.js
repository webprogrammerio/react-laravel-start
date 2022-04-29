import React from 'react';

const ForgotPasswordForm = () => {
  return (
    <>
      <form className="flex flex-col" method="POST" action="#">
        <div className="mb-3">
          <label
            className="block text-gray-500 text-sm font-bold mb-2 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="email address"
            className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none focus:border-blue-600 transition duration-500 p-3 border border-solid border-gray-300"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded shadow-lg hover:shadow-xl transition duration-200"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
