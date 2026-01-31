// file: app/page.tsx
import LiquidEther from "@/components/LiquidEther";
import Project from "@/components/Projects"
import PixelSnow from "@/components/PixelSnow";


export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white">
            <div className="absolute z-0 flex flex-col items-center w-full max-w-4xl mx-auto font-100">
                <h1 className="text-5xl font-bold mb-4"><br/>My Projects<br/></h1>
                <Project/>
            </div>
            <div className="fixed inset-0 -z-10 bg-black">
                <PixelSnow
                    color="#ffffff"
                    flakeSize={0.01}
                    minFlakeSize={1.25}
                    pixelResolution={200}
                    speed={1.25}
                    density={0.1}
                    direction={125}
                    brightness={10}
                    depthFade={8}
                    farPlane={20}
                    gamma={0.8}
                    variant="square"
                ></PixelSnow>
            </div>
        </main>
    );
}