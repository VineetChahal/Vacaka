const storySections = [
    {
        bg: "#779ee0",
        text: `Look, we’ve all been there.

You get a massive regional content slate from the top — maybe 20 new shows across Marathi, Tamil, Bengali, and Kannada — and you’re told they all need to be dubbed into four other languages.

Tight deadlines. Simulcast launch. No excuses.`,
    },
    {
        bg: "#b989d9",
        text: `You run your current “AI solution” — the one everyone’s been hyping — and what do you get?

Flat, monotonous audio. A Tamil voice that sounds like it was trained in Delhi. A Hindi track that’s too neutral to sound human. Cartoon characters with zero emotional range.

And then the real nightmare begins: MANUAL QA.`,
    },
    {
        bg: "#e770b1",
        text: `You’re suddenly managing five vendors, burning your budget on emotional correction, lip-sync fixes, and compliance audits — because one wrong voice can become a legal crisis overnight.

Meanwhile, the world has moved to live everything — live sports, live news, live events — and your so-called “AI” is still stuck in a batch queue waiting for post-production.

We saw this happening everywhere — studios frustrated, creators exhausted, enterprises terrified of non-compliance`,
    },
    {
        bg: "#6593e6",
        text: `We thought: What if the voice AI actually worked the way the industry needed it to?

That’s when we built Vācaka.AI — not a toy, not another synthesis tool, but the infrastructure.

We stopped trying to make “AI sound human” — we made it listen like one.`,
    },
];

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