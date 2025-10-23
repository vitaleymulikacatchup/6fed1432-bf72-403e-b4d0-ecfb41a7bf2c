import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'Python', color: 'bg-blue-100 text-blue-800' },
    { name: 'Django', color: 'bg-green-100 text-green-800' },
    { name: 'Telegram', color: 'bg-blue-100 text-blue-800' },
    { name: 'Whatsapp', color: 'bg-green-100 text-green-800' },
    { name: 'Redis', color: 'bg-red-100 text-red-800' },
    { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'HTML', color: 'bg-orange-100 text-orange-800' },
    { name: 'CSS', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', color: 'bg-green-100 text-green-800' }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary-600">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-primary-600">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-400 rounded-full -ml-2"></div>
                  <div className="w-6 h-6 bg-red-300 rounded-full -ml-2"></div>
                  <span className="font-semibold ml-2">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-5 h-5" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">We use only modern technologies</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className={`tech-badge ${tech.color}`}>
                    #{tech.name.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="floating-3d">
                <div className="w-80 h-80 relative">
                  {/* 3D Twisted Shape */}
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <path d="M200,50 Q300,100 250,200 Q200,300 100,250 Q50,150 150,100 Q200,50 200,50" 
                            fill="url(#gradient1)" opacity="0.3" />
                      <path d="M200,80 Q270,120 230,200 Q200,280 130,240 Q80,160 160,120 Q200,80 200,80" 
                            fill="url(#gradient1)" opacity="0.5" />
                      <path d="M200,110 Q240,140 220,200 Q200,260 160,230 Q110,170 170,140 Q200,110 200,110" 
                            fill="url(#gradient1)" opacity="0.7" />
                    </svg>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;