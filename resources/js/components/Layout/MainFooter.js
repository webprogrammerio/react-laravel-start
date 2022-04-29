import React from 'react';

const MainFooter = () => {
  return (
    <footer className="max-w-lg mx-auto flex justify-center text-white">
      <a href="#" className="hover:underline" target="_blank">
        React Laravel Login Tutorial
      </a>
      <span className="mx-3">•</span>
      <a
        href="https://webprogrammer.io/"
        className="hover:underline"
        target="_blank"
      >
        webprogrammer.io
      </a>
    </footer>
  );
};

export default MainFooter;
