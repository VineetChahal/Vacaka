import React from "react";
import AppBar from "../components/AppBar";
import { sections, type ContentSection } from "../data";
interface EmotionBannerProps {
  sections?: ContentSection[];
}

const EmotionBanner: React.FC<EmotionBannerProps> = ({
  sections: sectionsProp,
}) => {
  const sectionsToRender: ContentSection[] = sectionsProp ?? sections;

  const renderTextWithBrands = (
    text: string,
    brandNames?: string[]
  ): React.ReactNode => {
    if (!brandNames || brandNames.length === 0) {
      return <>{text}</>;
    }

    const sortedBrandNames = [...brandNames].sort(
      (a, b) => b.length - a.length
    );

    let segments: Array<{ text: string; isBrand: boolean }> = [
      { text, isBrand: false },
    ];

    sortedBrandNames.forEach((brand) => {
      segments = segments.flatMap((segment) => {
        if (segment.isBrand) return [segment];

        const parts = segment.text.split(brand);
        return parts
          .map((part) => ({
            text: part,
            isBrand: false,
          }))
          .flatMap((item, index, array) =>
            index === array.length - 1
              ? [item]
              : [item, { text: brand, isBrand: true }]
          );
      });
    });

    return (
      <>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            {segment.isBrand ? (
              <span className="font-bold text-pink-400">{segment.text}</span>
            ) : (
              segment.text
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans relative overflow-x-hidden">
      <AppBar />
      <div className="w-full max-w-6xl mx-auto p-8 space-y-12 relative mt-10">
        {sectionsToRender.map(
          (section: ContentSection, sectionIndex: number) => {
            return (
              <div
                key={sectionIndex}
                className="space-y-8 glass rounded-xl p-8"
              >
                <div className="bg-gray-900/40 rounded-2xl overflow-hidden object-cover">
                  <img
                    src={section.heroImage}
                    alt={section.title}
                    className="w-7xl h-64 md:h-96 object-cover object-center scale-125"
                  />
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm text-white rounded-2xl py-6 px-8">
                  <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {section.title}
                  </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {section.leftContent.map((text: string, index: number) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-gray-200"
                      >
                        {renderTextWithBrands(text, section.brandNames)}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {section.rightContent.map((text: string, index: number) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-gray-200"
                      >
                        {renderTextWithBrands(text, section.brandNames)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      <style>{`
        .glass { 
          background: rgba(255,255,255,0.03); 
          border: 1px solid rgba(255,255,255,0.04); 
          backdrop-filter: blur(6px); 
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default EmotionBanner;
