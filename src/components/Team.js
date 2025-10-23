import React from 'react';

const Team = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600">Meet the experts behind your success</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900 mb-1">Team Member</h3>
              <p className="text-gray-600 text-sm">Senior Developer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;