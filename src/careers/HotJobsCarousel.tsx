import React, { useState, useEffect } from "react";

interface Job {
  title: string;
  description: string;
  location: string;
}

interface HotJobsCarouselProps {
  jobs?: Job[];
}

const jobList = [
  {
    title: "AI Research Intern",
    description:
      "Help our voice models learn how to feel. Work with the tech that powers emotion and authenticity in 22+ Indian languages.",
    location: "Remote / Hybrid",
  },
  {
    title: "Frontend Developer",
    description:
      "Build sleek, performant UI that helps creators and studios localize content effortlessly.",
    location: "Bangalore / Remote",
  },
  {
    title: "ML Engineer",
    description:
      "Join our team pushing boundaries in real-time multilingual emotion modeling.",
    location: "Remote",
  },
];

const HotJobsCarousel: React.FC<HotJobsCarouselProps> = ({ jobs = jobList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [jobs.length]);

  return (
    <section className="bg-black text-white w-full pb-60">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-pink-400 text-left">
          Hot Jobs
        </h2>

        <div className="relative bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 rounded-2xl p-10 shadow-lg transition-all duration-500 ease-in-out">
          <h3 className="text-lg font-bold underline mb-4 text-blue-200">
            {jobs[currentIndex].title}
          </h3>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-4">🤖</div>
            <p className="text-gray-100 text-lg leading-relaxed max-w-md">
              {jobs[currentIndex].description}
            </p>
            <p className="text-gray-300 mt-3 font-medium">
              Location: {jobs[currentIndex].location}
            </p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-6" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotJobsCarousel;
