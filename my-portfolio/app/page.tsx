// file: app/page.tsx
import AboutMe from "../components/AboutMe";
import LiquidEther from "@/components/LiquidEther";

export default function Page() {
  return (
      <main className="flex flex-col items-center min-h-screen text-white font-">
          <div className="absolute z-1 flex flex-col items-center w-full font-100">
              <AboutMe/>
          </div>
          <div className="fixed inset-0 -z-1 bg-black">
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