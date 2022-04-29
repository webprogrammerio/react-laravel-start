require('./bootstrap');

// require('./components/App');

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './store/auth-context';

import MainHeader from './components/Layout/MainHeader';
import MainFooter from './components/Layout/MainFooter';
import MainBody from './components/Layout/MainBody';

export default function App() {
  return (
    <>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </>
  );
}

if (document.getElementById('root')) {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
