// file: app/experience/page.tsx
import Experience from "@/components/Experience";
import DarkVeil from "@/components/DarkVeil";

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white">
            <div className="relative z-0 flex flex-col items-center w-full font-100 py-20">
                <Experience/>
            </div>
            <div className="fixed inset-0 -z-1 bg-black">
                <DarkVeil
                    hueShift={35}
                    noiseIntensity={0.02}
                    scanlineIntensity={0.06}
                    speed={0.6}
                    scanlineFrequency={1.5}
                    warpAmount={0.6}
                    resolutionScale={1}
                />
            </div>
        </main>
    );
}
