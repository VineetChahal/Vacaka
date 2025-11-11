import React from "react";
import { Section } from "./homepage";

const ResearchInsight: React.FC = () => {
  return (
    <Section id="research-insight" className="bg-black text-white px-6 flex flex-col items-center text-center mb-40">
      <h2 className="text-4xl font-bold mb-10">Research Insight</h2>

      <div className="max-w-4xl relative text-left text-gray-300 leading-relaxed">
        <span className="absolute -top-8 -left-6 text-5xl text-gray-500">❝</span>

        <p className="text-xl">
          When it comes to the complex phonetics and regional dialects of
          languages like Kannada, Malayalam, or Bengali, a generalized model can
          only achieve 80% quality. Our specialized models, leveraging India's
          linguistic depth, start at 99% emotional and phoneme-accuracy,
          eliminating the need for the human 'clean-up' process that costs you
          time and nearly 40% of your dubbing budget.
        </p>

        <span className="absolute -bottom-9 -right-5 text-5xl text-gray-500">
          ❞
        </span>
      </div>
    </Section>
  );
};

export default ResearchInsight;
