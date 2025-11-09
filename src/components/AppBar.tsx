import React from "react";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="public\Images and PNGs\vacaka-svg.svg"
            alt="Vacaka.AI"
            className="h-16 border-2 border-gray-300 rounded-md"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { text: "About Us", path: "/about-us", isRoute: true },
            { text: "Our Story", path: "ourstory", isRoute: false },
            { text: "Products", path: "products", isRoute: false },
            { text: "Features", path: "features", isRoute: false },
            { text: "Pricing", path: "pricing", isRoute: false },
            { text: "Blogs", path: "/blogs", isRoute: true },
            { text: "Careers", path: "/careers", isRoute: true },
          ].map(({ text, path, isRoute }) =>
            isRoute ? (
              <Link
                key={text}
                to={path}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                {text}
              </Link>
            ) : (
              <Link
                key={text}
                to={`/#${path}`}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                {text}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-2 inline-block bg-gradient-to-r from-pink-800 to-purple-800 px-4 py-2 rounded-md text-white shadow hover:scale-105 transition-transform"
          >
            Talk to Sales
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
