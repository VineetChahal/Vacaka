import { ArrowUpRight } from "lucide-react";

const productCards = [
    {
        title: "Vācaka.AI Connect™",
        subtitle: "Plug-ins & API Integration Suite",
        points: [
            "Native plug-ins for Adobe, DaVinci Resolve.",
            "RESTful APIs for Dubbing, TTS, STS, and ASR.",
            "Emotion and lip-sync alignment for playback.",
            "Secure authentication & consent-verified voices.",
            "Custom SDKs for OTT and studio integrations.",
            "Developer dashboard with analytics."
        ],
        button: "Request a Demo",
        color: '#e099ff',
        link: '',
    },
    {
        title: "Vācaka.AI Dubb™",
        subtitle: "Real-Time Dubbing Engine",
        points: [
            "Real-time Speech-to-Speech dubbing.",
            "0.5-second latency output.",
            "YouTube Live, OBS, Twitch integrations.",
            "Built-in emotion retention.",
            "Multi-speaker mode."
        ],
        button: "Go Live in Any Language",
        color: '#e770b1',
        link: '',
    },
    {
        title: "Vācaka.AI Clone™",
        subtitle: "Neural Voice Cloning",
        points: [
            "High-fidelity voice replication.",
            "Emotion & tone preservation.",
            "Multilingual voice synthesis.",
            "Consent-based ethical usage.",
            "Audited Identity Layer.",
            "Speech-to-Speech dubbing included."
        ],
        button: "Try Now for Free",
        color: '#6593e6',
        link: '',
    },
    {
        title: "Vācaka.AI Sonic™",
        subtitle: "Text & Speech Intelligence Suite",
        points: [
            "Natural TTS in 120+ voices.",
            "Emotion, pitch & tone control.",
            "98% accurate STT.",
            "Handles Hinglish & accents.",
            "Auto timestamp & transcription export."
        ],
        button: "Play Now for Free",
        color: '#c179e0',
        link: '',
    },
]

function ProductsServices() {
    return (
        <div className="w-full bg-black py-16 flex flex-col items-center">
            <div className="w-11/12 mb-10">
                <h2 className="text-white text-4xl font-bold mb-2">
                    Products & Services
                </h2>
                <p className="text-gray-300 text-lg">
                    Pick the tools that fit your studio or creator workflow.
                </p>
            </div>

            <div className="w-11/12 flex flex-wrap justify-center gap-6">
                {productCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#1c2430] text-white rounded-3xl p-8 w-full md:w-[22%] relative flex flex-col justify-between border border-purple-500/40"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                            <div className="h-[2px] bg-gray-500/40 mb-4"></div>
                            <h4 className="text-lg font-medium mb-4">{card.subtitle}</h4>

                            <ul className="space-y-3 text-gray-300">
                                {card.points.map((p, i) => (
                                    <li key={i} className="leading-snug">
                                        • {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            style={{ backgroundColor: card.color }}
                            className="text-black font-semibold px-4 py-3 rounded-full mt-8 transition-opacity"
                        >
                            {card.button}
                        </button>

                        <ArrowUpRight
                            size={32}
                            className="absolute bottom-2 right-2 text-yellow-300 cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsServices;