import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
                <span>Starting from $5,000</span>
                <span>•</span>
                <span>4-8 weeks</span>
              </div>
            </div>
            
            {/* Web Development Illustration */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Main Device */}
                  <div className="w-64 h-40 bg-blue-500 rounded-lg relative overflow-hidden">
                    <div className="absolute top-4 left-4 right-4 h-6 bg-white rounded flex items-center px-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-12 left-4 right-4 bottom-4 bg-gray-100 rounded">
                      <div className="p-3 space-y-2">
                        <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-8 bg-blue-200 rounded mt-4"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JS</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CSS</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
                <span>Starting from $8,000</span>
                <span>•</span>
                <span>6-12 weeks</span>
              </div>
            </div>
            
            {/* Mobile Development Illustration */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Mobile Device */}
                  <div className="w-32 h-56 bg-gray-800 rounded-2xl p-2">
                    <div className="w-full h-full bg-white rounded-xl relative overflow-hidden">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
                      <div className="pt-6 px-3 space-y-3">
                        <div className="h-8 bg-blue-500 rounded"></div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-12 bg-gray-100 rounded"></div>
                          <div className="h-12 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">iOS</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <button className="btn-primary">
              Start Small Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;