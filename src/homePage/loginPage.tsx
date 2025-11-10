import React from "react";
import { Images } from "../constants/svgPaths";
import { GIFs } from "../constants/gifPaths";
import { socialLinks } from "../data";

const LoginPage: React.FC = () => {
  const handleGetStarted = (): void => {
    console.log("Get Started clicked");
  };

  const handleLogin = (): void => {
    console.log("Login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-10"
        src={GIFs.GIF_PURPLE_BG_VIDEO}
        alt="Background"
      />
      <div className="relative bg-stone-100 rounded-3xl shadow-2xl p-12 max-w-md w-full text-center z-10">
        <div className="mb-8 inline-block">
          <div className="w-18 h-18 bg-black rounded-2xl flex items-center justify-center">
            <img
              src={Images.VACAKA_AI_LOGO}
              alt="VACAKA_AI_LOGO"
              className="h-20 w-35 rounded-lg overflow-hidden scale-200"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-12 leading-tight">
          Make AI sound the
          <br />
          way India feels
        </h1>

        <button
          onClick={handleGetStarted}
          className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 mb-6"
        >
          GET STARTED FREE
        </button>

        <p className="text-gray-700 text-sm">
          Already have an account?{" "}
          <button
            onClick={handleLogin}
            className="text-gray-900 font-semibold underline hover:text-gray-700 transition-colors"
          >
            Login
          </button>
        </p>
      </div>

      <div className="absolute bottom-22 gap-2 flex z-10">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-full text-gray-900 transition-colors duration-200 shadow-lg overflow-hidden "
          >
           <img src={social.icon} alt="icons" className="w-12 h-12 object-cover hover:border-2 hover:border-purple-300"/>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
