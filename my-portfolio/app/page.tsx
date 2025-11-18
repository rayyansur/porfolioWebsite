// file: app/page.tsx
import Hero from "../components/Hero";
import LiquidEther from "@/components/LiquidEther";
import ChromaGrid from "@/components/ChromaGrid";

const items = [
    {
        image: "https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/img.png?raw=true",
        title: "Knowledge Recogntion Location AI",
        handle: "AI app to help visually impaired people find objects and detect collisions using computer vision.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(145deg, #0f4396, #222)",
        url: "https://github.com/rayyansur/KLR.ai",
        subtitle: ""
    },
    {
        image: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source",
        title: "ASL-to-Speech",
        handle: "Pattern recognition model for sign language to speech to aid in real time conversations.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6CF5F5, #222)",
        url: "https://github.com/rayyansur/ASL-to-Speech",
        subtitle: ""
    },
    {
        image: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source",
        title: "BeesBot",
        handle: "Discord bot made to integrate text commands like coinflipping and card games.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6C42F5, #222)",
        url: "https://github.com/rayyansur/BeesBot",
        subtitle: ""
    },
    {
        image: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source",
        title: "BeesBot",
        handle: "Discord bot made to integrate text commands like coinflipping and card games.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6C42F5, #222)",
        url: "https://github.com/rayyansur/BeesBot",
        subtitle: ""
    }
];



export default function Page() {
  return (
      <main className="flex flex-col items-center min-h-screen text-white">
          <div className="absolute z-10 flex flex-col items-center w-full max-w-4xl mx-auto font-100">
              <Hero/>
              <div style={{height: '600px', width: "900px", position: 'relative'}}>
                  <ChromaGrid
                      items={items}
                      radius={300}
                      damping={0.45}
                      fadeOut={0.6}
                      ease="power3.out"
                  />
              </div>
          </div>
          <div className="fixed inset-0 -z-10 bg-black">
              <LiquidEther
                  colors={['#D79CBD', '#0f5cff', '#65dcfc']}
                  mouseForce={20}
                  cursorSize={100}
                  isViscous={false}
                  viscous={30}
                  iterationsViscous={32}
                  iterationsPoisson={32}
                  resolution={0.5}
                  isBounce={false}
                  autoDemo={true}
                  autoSpeed={0.5}
                  autoIntensity={2.2}
                  takeoverDuration={0.25}
                  autoResumeDelay={3000}
                  autoRampDuration={0.6}
              />
          </div>
      </main>
  );
}