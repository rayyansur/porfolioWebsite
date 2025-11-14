// file: app/page.tsx
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Carousel from "../components/Carousel";
import LiquidEther from "../components/LiquidEther";


export default function Page() {
  return (
      <main className="flex flex-col items-center min-h-screen text-white">
          <div className="fixed inset-0 -z-10 bg-black">
              <LiquidEther
                  colors={['#5227FF', '#FF9FFC', '#B19EEF']}
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

          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
              <Hero/>
              <Carousel/>
              <Projects/>
              <Contact/>
          </div>
      </main>
  );
}