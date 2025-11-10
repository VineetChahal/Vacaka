import { storySections } from "../data";

function OurStory() {

    return (
        <div className="w-full flex flex-col items-center gap-8 py-12 bg-black">
            <h1 className="text-white text-4xl font-bold mb-6 text-center">
                Our Story: Why We Built Vācaka.AI
            </h1>

            {storySections.map((sec, index) => (
                <div
                    key={index}
                    className="w-11/12 md:w-3/4 rounded-3xl p-10"
                    style={{ backgroundColor: sec.bg }}
                >
                    <p className="text-white text-xl leading-relaxed whitespace-pre-line">
                        {sec.text}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default OurStory;