import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-24 overflow-hidden relative">
      
      {/* Background Wavy Pattern (Similar to the login page) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,700 C360,600 720,800 1080,700 L1440,700 L1440,800 L0,800 Z" fill="rgba(124, 58, 237, 0.1)" />
        </svg>
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">
          ABOUT US
        </h2>
        {/* Placeholder for the mic/audio background image */}
        <div className="absolute inset-x-0 top-0 h-40 bg-cover bg-center opacity-10" style={{backgroundImage: "url(https://placehold.co/1200x200/505050/ffffff?text=Studio+Background)"}}></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="https://placehold.co/500x500/3c0a52/ffffff?text=AI+Robot+Voice+Studio" 
              alt="AI Robot Working with Media Screens"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 text-lg space-y-6">
            <p className="text-gray-300 leading-relaxed">
              We are the architects of the new media supply chain. <strong className="text-purple-400">Vācaka.AI</strong> is an 
              AI-first infrastructure company disrupting generalized AI voice by specializing in the high-compliance, complex needs of the professional APAC media supply chain.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              We're replacing the legacy of slow, expensive batch-processing with our proprietary <strong className="text-purple-400">AI Voice Transmission Infrastructure</strong>. Our focus is on providing guaranteed quality and legal security for Tier-1 OTTs and studios in India and the Asia-Pacific region.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-purple-400">Our Specialization:</strong> Real-time, emotion-calibrated dubbing in 22+ Indian vernacular languages and dialects, including complex categories like cartoon dubbing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;