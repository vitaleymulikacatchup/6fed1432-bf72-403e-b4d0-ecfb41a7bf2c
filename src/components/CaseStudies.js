import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Real projects, real results</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
              <span>View All</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 text-white">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Dios</h3>
                  <p className="text-blue-100 mb-6">
                    A comprehensive digital platform that revolutionized how businesses 
                    manage their operations with AI-powered insights and automation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold">$2,500</div>
                    <div className="text-blue-200 text-sm">Project Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12w</div>
                    <div className="text-blue-200 text-sm">Timeline</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">AI/ML</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                  View Case Study
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="bg-white/10 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                {/* Dashboard Mockup */}
                <div className="w-80 h-48 bg-white rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-6 bg-blue-500 rounded w-16"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-100 rounded"></div>
                      <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-blue-100 rounded"></div>
                      <div className="h-16 bg-green-100 rounded"></div>
                      <div className="h-16 bg-purple-100 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
                  +150% ROI
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;