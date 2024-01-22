import React from 'react';

const Modal = ({ show, onClose, children }: { show: boolean, onClose?: () => void, children: React.ReactNode }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white p-6 md:p-8 lg:p-12 rounded shadow-lg" onClick={e => e.stopPropagation()}>
        <button className="text-black absolute top-0 right-0 mt-4 mr-4 text-2xl leading-none font-semibold outline-none focus:outline-none" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
