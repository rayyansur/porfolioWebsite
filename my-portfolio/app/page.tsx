// file: app/page.tsx
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Carousel from "../components/Carousel";


export default function Page() {
  return (
      <main className="flex flex-col items-center min-h-screen text-white">
          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
              <Hero/>
              <Carousel/>
              <Projects/>
          </div>
      </main>
  );
}