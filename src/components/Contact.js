import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How can we help? Let's talk
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI-powered solutions? 
            Get in touch and let's discuss your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>contact@sargas.io</span>
            </button>
            <button className="btn-secondary">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;