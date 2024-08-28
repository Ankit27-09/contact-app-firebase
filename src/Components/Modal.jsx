import React from 'react';
import { createPortal } from 'react-dom';
import { GiTireIronCross } from "react-icons/gi";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
      />
      
      {/* Modal Content */}
      <div className='fixed inset-1/4 min-h-[200px] max-w-[80%] bg-white p-4 rounded-lg z-50'>
        <div className='flex justify-end'>
          <GiTireIronCross
            onClick={onClose}
            className='text-2xl cursor-pointer'
          />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("modal-root") // Make sure this element exists in your HTML
  );
};

export default Modal;
