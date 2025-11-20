// file: app/page.tsx
import LiquidEther from "@/components/LiquidEther";
import Project from "@/components/Projects"


export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white">
            <div className="absolute z-10 flex flex-col items-center w-full max-w-4xl mx-auto font-100">
                <h1 className="text-5xl font-bold mb-4">My Projects</h1>
                <Project/>
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