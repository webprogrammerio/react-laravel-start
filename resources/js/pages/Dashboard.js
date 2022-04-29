import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="">
        <Link
          to="/account"
          className="bg-white hover:bg-gray-200 border border-solid border-blue-500 text-blue-500 font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200"
        >
          View Account Info
        </Link>
      </section>
    </>
  );
};

export default Dashboard;
