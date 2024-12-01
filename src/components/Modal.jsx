import React from 'react';

const Modal = ({ children, text }) => {
  return (
    <>
      {/* Orqa fon */}
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50"></div>

      {/* Modalning o'zi */}
      <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-[90%] max-w-lg">
        <h3 className="text-lg font-semibold mb-4">{text}</h3>
        {children}
      </div>
    </>
  );
};

export default Modal;
