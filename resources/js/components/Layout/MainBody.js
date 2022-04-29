import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Account = React.lazy(() => import('../../pages/Account'));
const ConfirmEmail = React.lazy(() => import('../../pages/ConfirmEmail'));
const CreateAccount = React.lazy(() => import('../../pages/CreateAccount'));
const Dashboard = React.lazy(() => import('../../pages/Dashboard'));
const Login = React.lazy(() => import('../../pages/Login'));
const Logout = React.lazy(() => import('../../pages/Logout'));
const UpdateAccount = React.lazy(() => import('../../pages/UpdateAccount'));
const UpdatePassword = React.lazy(() => import('../../pages/UpdatePassword'));
const ForgotPassword = React.lazy(() => import('../../pages/ForgotPassword'));

const MainBody = () => {
  return (
    <>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account" element={<Account />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/update-account" element={<UpdateAccount />} />
            <Route path="/update-password" element={<UpdatePassword />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default MainBody;
