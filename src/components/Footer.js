import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              AI-powered web and mobile development solutions that transform 
              your business in just 12 weeks.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Feel free to drop us a note:</span>
              <a href="mailto:contact@sargas.io" className="text-primary-600 hover:text-primary-700 font-medium">
                contact@sargas.io
              </a>
            </div>
          </div>
          
          {/* Menu Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#contacts" className="text-gray-600 hover:text-gray-900">Contacts</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#web-dev" className="text-gray-600 hover:text-gray-900">Web Development</a></li>
              <li><a href="#mobile-dev" className="text-gray-600 hover:text-gray-900">Mobile Development</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-gray-900">Support and Maintenance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <a href="#privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
            <a href="#terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Use</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#linkedin" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;