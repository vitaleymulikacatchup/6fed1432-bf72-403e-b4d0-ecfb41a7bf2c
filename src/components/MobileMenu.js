import React from 'react';
import { X, Mail } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white mobile-menu z-50 md:hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sargas</span>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Menu */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
              <ul className="space-y-3">
                <li><a href="#case-studies" className="text-gray-600 hover:text-gray-900 block py-2">Case Studies</a></li>
                <li><a href="#blog" className="text-gray-600 hover:text-gray-900 block py-2">Blog</a></li>
                <li><a href="#contacts" className="text-gray-600 hover:text-gray-900 block py-2">Contacts</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-gray-900 block py-2">About Us</a></li>
                <li><a href="#faq" className="text-gray-600 hover:text-gray-900 block py-2">FAQ</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#web-dev" className="text-gray-600 hover:text-gray-900 block py-2">Web Development</a></li>
                <li><a href="#mobile-dev" className="text-gray-600 hover:text-gray-900 block py-2">Mobile Development</a></li>
                <li><a href="#support" className="text-gray-600 hover:text-gray-900 block py-2">Support and Maintenance</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t p-6">
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm mb-2">Feel free to drop us a note:</p>
              <a href="mailto:contact@sargas.io" className="text-primary-600 font-medium flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@sargas.io</span>
              </a>
            </div>
            
            <button className="w-full btn-primary">
              Book a Call
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <a href="#privacy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-900">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;