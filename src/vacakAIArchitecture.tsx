const items = [
  "Emotion Recognition & Expressive Voice Synthesis",
  "Adaptive Lip-Sync & Contextual Emotion Control",
  "Reinforcement-Learning Engine for Voice Cloning",
  "Neural Accent Adaptation for 70+ Indian Dialects",
  "Multilingual Speech Understanding",
  "Audited Identity Layer™ for Verified Voice Provenance",
];

export default function VacakAIArchitecture() {
  return (
    <div className="w-full bg-black text-white py-20 flex flex-col items-center gap-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Vācaka Intelligence Architecture™</h1>
        <p className="text-gray-300 text-lg">our AI Advantage & USPs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-6">
        {items.map((text, index) => (
          <div
            key={index}
            className="border border-[#e099ff] rounded-3xl px-6 py-10 text-center text-xl transition-all duration-300 hover:bg-[#9867ae] hover:text-black cursor-pointer"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}