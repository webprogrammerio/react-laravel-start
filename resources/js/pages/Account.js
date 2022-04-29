import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <>
      <section>
        <p className="pb-2">
          <Link
            to="/dashboard"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
          >
            &lsaquo; Return to Dashboard
          </Link>
        </p>
        <h1 className="text-2xl mb-4">Account Info</h1>
        <div className="mb-4">
          <div className="overflow-x-auto border-x border-t">
            <table className="table-auto w-full">
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Name</td>
                  <td className="p-4">John Smith</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Email</td>
                  <td className="p-4">basic@example.com</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Password</td>
                  <td className="p-4">
                    *****
                    <br />
                    <Link
                      to="/update-password"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
                    >
                      Update Password
                    </Link>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Phone</td>
                  <td className="p-4">(111) 222-5555</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="">
        <Link
          to="/update-account"
          className="bg-white hover:bg-gray-200 border border-solid border-blue-500 text-blue-500 font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
        >
          Update Account Info
        </Link>
      </section>
    </>
  );
};

export default Account;
