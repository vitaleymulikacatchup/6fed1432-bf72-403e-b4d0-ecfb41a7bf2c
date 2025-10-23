import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  const handleAcceptAll = () => {
    onClose();
  };

  const handleDeny = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 cookie-modal flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            This site uses cookies
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="text-gray-600 text-sm">
            We and selected third parties use cookies (or similar technologies) for 
            technical purposes, to enhance and analyze site usage, to support our 
            marketing efforts, and for other purposes described below.
          </p>
          
          <p className="text-gray-600 text-sm">
            By clicking "Accept all", you agree to the storing of cookies on your 
            device for these purposes.
          </p>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={handleDeny}
            className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Deny
          </button>
          <button 
            onClick={handleAcceptAll}
            className="flex-1 bg-dark-800 hover:bg-dark-900 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;