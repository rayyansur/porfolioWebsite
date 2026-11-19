import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>BeesBot</h1>
                <b className={"opacity-80 font-bold text-center"}>Discord bot made to integrate text commands like coinflipping, tournaments and a daily LeetCode challenge.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            A Discord bot built with a collaborator for random server commands. <br/>
                            /coinflip opens a modal to pick between two to five options, /sacrifice picks random people from a list, and /tournament builds a random, bye-free bracket from the mentioned players: knockout for powers of two, round robin for three or five, and group stage into knockout otherwise. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Every day at midnight Eastern the bot posts five never-repeated LeetCode problems and pings a role. Members react to mark the ones they solved, and /lc_stats and /lc_leaderboard track solves by difficulty. If the bot was offline at midnight it posts on startup and picks up reactions made while it was down. <br/>
                    There is also a flamer that replies to specific users with a local LLM running through Ollama. <br/>
                    Built in Node.js with discord.js and MySQL. <br/>
                </b>
                <a href={"https://github.com/rayyansur/BeesBot"}
                   className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#9C9CF5"
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
