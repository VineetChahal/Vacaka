import React from "react";

const RandomThoughts: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <h3 className="text-pink-400 text-xl font-semibold mb-4">
            The Why That Drives Us:
          </h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            We built{" "}
            <span className="text-purple-400 font-semibold">Vācaka.AI</span>{" "}
            because India deserves better than flat, westernized,
            one-size-fits-all voices. Because your audience in Chennai,
            Guwahati, and Lucknow deserves to hear their own language, their own
            tone, their own emotion — reflected back accurately.
          </p>
        </div>

        <div>
          <h3 className="text-purple-400 text-xl font-semibold mb-4">
            Our Promise to Artists:
          </h3>
          <p className="text-gray-200 leading-relaxed text-lg mb-6">
            <span className="text-purple-400 font-semibold">Vācaka.AI</span>{" "}
            stands with dubbing artists.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg mb-6">
            We’re not here to take their jobs — we’re here to give them reach,
            recognition, and creative freedom.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg">
            By bringing India’s voice artists under one umbrella, we’re building
            a{" "}
            <span className="font-semibold text-white">
              Voice Discovery Network
            </span>{" "}
            — where artists can explore new dialects, lend their voice data
            responsibly, and get paid for every use of their approved voice
            model.
          </p>
          <br />
          <p className="text-gray-200 leading-relaxed text-lg">
            Our platform doesn’t replace voices — it multiplies their
            possibilities.{" "}
          </p>
          <br />
          <p className="text-gray-200 leading-relaxed text-lg">
            We let artists find new languages, new audiences, and new revenue —
            because the future of dubbing is human artistry, scaled responsibly
            by AI.{" "}
          </p>
        </div>

        <div className="w-full h-72 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mt-10">
          <video width="640" height="360" controls>
            <source src="\Videos\Video 2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
        </div>
      </div>
    </div>
  );
};

export default RandomThoughts;
