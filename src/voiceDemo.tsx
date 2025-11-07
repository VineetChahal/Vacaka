import { useState, useRef } from "react";

  const audioFiles = [
    "/audio/sample1.mp3",
    "/audio/sample2.mp3",
    "/audio/sample3.mp3",
    "/audio/sample4.mp3",
  ];

export default function VoiceDemo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedLang, setSelectedLang] = useState(" ");
    const audioRef = useRef(null);


    const languages = ["Hindi", "Bengali", "Tamil", "Punjabi", "Marathi"];


    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.src = audioFiles[currentIndex];
            audioRef.current.play();
        }
    };


    const nextAudio = () => {
        setCurrentIndex((prev) => (prev + 1) % audioFiles.length);
    };


    const prevAudio = () => {
        setCurrentIndex((prev) => (prev - 1 + audioFiles.length) % audioFiles.length);
    };


    return (
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 py-12 px-16 text-white">
            <div className="w-300">
                <div className="w-full md:w-2/3 bg-[#1E2533] rounded-3xl p-6 border border-gray-600">
                    <h2 className="text-xl">Voice Demo</h2>
                    <p className="text-gray-300 mb-4">
                        Listen to samples, switch languages, and explore natural emotion & clarity.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-4xl">🔊</span>
                        <div className="flex-1 h-1 bg-gray-500 rounded-full relative">
                            <div className="absolute w-4 h-4 bg-white rounded-full -top-1 right-0" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-8 mb-4">
                        <button onClick={prevAudio} className="text-3xl">⏮️</button>
                        <button onClick={playAudio} className="text-4xl">▶️</button>
                        <button onClick={nextAudio} className="text-3xl">⏭️</button>
                    </div>

                    <p className="text-gray-300 mb-4">Select Output language</p>
                    <div className="flex flex-wrap gap-4">
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLang(lang)}
                                className={`px-6 py-3 rounded-xl text-lg border transition ${selectedLang === lang
                                        ? "bg-white text-black"
                                        : "bg-gray-600 border-gray-500"
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>


                    <audio ref={audioRef} />
                </div>
            </div>


            <div className="w-full md:w-1/3 bg-[#1E2533] rounded-3xl p-6 border border-gray-600">
                <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
                <div className="flex flex-col gap-6 text-lg">
                    <div className="flex justify-between"><span>Words Processed</span><span>12.4M</span></div>
                    <div className="flex justify-between"><span>Mins. Used</span><span>2500</span></div>
                    <div className="flex justify-between"><span>Avg. Latency</span><span>180ms</span></div>
                    <div className="flex justify-between"><span>Supported Locales</span><span>40+</span></div>
                </div>
            </div>
        </div>
    );
}