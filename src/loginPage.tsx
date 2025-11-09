import React from "react";

// interface SocialLink {
//   icon: string;
//   href: string;
//   label: string;
// }

const LoginPage: React.FC = () => {

  // const socialLinks: SocialLink[] = [
  //   {
  //     icon: "",
  //     href: "https://twitter.com",
  //     label: "Twitter",
  //   },
  //   {
  //     icon: "public/Images and PNGs/LINKEDIN.png",
  //     href: "https://linkedin.com",
  //     label: "LinkedIn",
  //   },
  //   {
  //     icon: "public/Images and PNGs/INSTAGRAM.png",
  //     href: "https://instagram.com",
  //     label: "Instagram",
  //   },
  //   {
  //     icon: "public/Images and PNGs/Youtube.png",
  //     href: "https://youtube.com",
  //     label: "YouTube",
  //   },
  //   {
  //     icon: "public/Images and PNGs/DISCORD.png",
  //     href: "https://discord.com",
  //     label: "Discord",
  //   },
  // ];

  const handleGetStarted = (): void => {
    console.log("Get Started clicked");
  };

  const handleLogin = (): void => {
    console.log("Login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-28 z-10"
        src="\Videos\GIF-Purple-BG-Video.gif"
      />
      <div className="relative bg-stone-100 rounded-3xl shadow-2xl p-12 max-w-md w-full text-center z-10">
        <div className="mb-8 inline-block">
          <div className="w-18 h-18 bg-black rounded-2xl flex items-center justify-center">
            <img
              src="\SVGs\10.svg"
              alt="login logo"
              className="h-20 w-35 rounded-lg overflow-hidden"
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

      <div className="absolute bottom-22  flex gap-4 z-10">
        {/* {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors duration-200 shadow-lg overflow-hidden"
          >
           {social.icon}
          </a>
        ))} */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-twitter-icon lucide-twitter cursor-pointer h-12 w-12"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-linkedin-icon lucide-linkedin cursor-pointer h-12 w-12"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-instagram-icon lucide-instagram cursor-pointer h-12 w-12"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-youtube-icon lucide-youtube cursor-pointer h-12 w-12"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      </div>
    </div>
  );
};

export default LoginPage;
