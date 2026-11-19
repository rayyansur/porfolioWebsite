import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Roblox Game Pipeline</h1>
                <b className={"opacity-80 font-bold text-center"}>An agentic pipeline that turns a game idea written in plain words into a tested, playable Roblox game.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            I send a game idea, and Claude writes the design brief, builds the map and Luau scripts, models props in Blender, checks everything offline, playtests it in Roblox Studio, publishes it to a private test place, and crash-tests it inside a real Roblox server before merging. I playtest it and publish to my account when I like it. <br/>
                            Games built with it so far: Slurp Lab, a co-op udon-shop tycoon; Steal the Snowmen, a snowman-collecting game; and Shovel the Whole Town, a co-op snow-clearing simulator. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Every game gets its own repo made from the template and configured through a single pipeline.json file. <br/>
                    CI uploads art, builds and checks the place, publishes a test place through Roblox Open Cloud, and runs a crash test in a live server. Studio is driven through an MCP server for screenshots and playtests. <br/>
                    A handbook records the Roblox, Studio and CI traps hit along the way, so each new game avoids them. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#38BDF8"
                    flakeSize={0.01}
                    minFlakeSize={1.25}
                    pixelResolution={200}
                    speed={1.25}
                    density={0.1}
                    direction={125}
                    brightness={1}
                    depthFade={8}
                    farPlane={20}
                    gamma={0.4545}
                    variant="snowflake"
                ></PixelSnow>
            </div>
        </main>
    );
}
