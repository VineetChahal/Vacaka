import React from "react";
import { STORY_DATA, type Story } from "../data";

const StoryCard: React.FC<Story> = ({
  title,
  date,
  category,
  description,
  imageUrl,
  readMoreUrl,
  color,
}) => {
  return (
    <div className="flex flex-col bg-black text-white rounded-lg h-full relative group">
      <div className="w-full h-58 bg-gray-900 overflow-hidden rounded-t-lg border-1 border-red-500">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/400x300/111827/ffffff?text=Image+Missing";
          }}
        />
      </div>

      <div
        className="
      w-[90%] -translate-y-10 z-10 p-5 shadow-xl rounded-lg bg-black relative
      "
      >
        <h2 className="text-xl font-bold mb-3 leading-snug">{title}</h2>

        <p className="text-xs text-whitesmoke-400 font-medium">
          {date} - {category}
        </p>
      </div>

      <div
        className="h-px w-[100px] ml-5"
        style={{ backgroundColor: color }}
      ></div>

      <div className="px-5 pb-5 pt-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-400 mb-6 flex-grow">{description}</p>
        <a
          href={readMoreUrl}
          className="text-white text-sm font-medium flex items-center justify-center transition-colors hover:text-indigo-400 w-fit"
          onClick={(e) => e.preventDefault()}
          style={{ color: color }}
        >
          READ MORE
          <svg
            className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: color }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const StorySections: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-12">
      <header className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-2">Latest Stories</h1>
        <p className="text-lg text-gray-400">
          Browse and read the latest stuff
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {STORY_DATA.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default StorySections;
