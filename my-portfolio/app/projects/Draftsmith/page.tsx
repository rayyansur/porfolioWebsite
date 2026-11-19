import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Draftsmith</h1>
                <b className={"opacity-80 font-bold text-center"}>A League of Legends draft recommender that ranks champion picks and builds five-stack team comps.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            In champ select, you enter your role and any ally and enemy picks and get a ranked list of champions for your slot, weighted toward champions you actually play well. <br/>
                            Every recommendation is broken into lane matchup, counters to the enemy comp, synergy with allies and personal comfort, so you can see why it ranks where it does. <br/>
                            For Clash or flex, a captain enters five Riot IDs and roles, picks a style like engage, poke or scaling, and gets the best full comps built from each player&apos;s real champion pool. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    A crawler pulls ranked matches from the Riot API across regions, throttled by a Redis sliding-window rate limiter that follows Riot&apos;s rate-limit headers, and it resumes after a crash without fetching the same match twice. Matches are aggregated per patch into champion, matchup and synergy tables. <br/>
                    Scores are computed as log-odds relative to each champion&apos;s base win rate, and every pairwise stat is shrunk with empirical Bayes so small samples fall back toward zero instead of looking like hard counters. <br/>
                    FastAPI, PostgreSQL, Redis and an arq job queue on the backend; React, Vite, TypeScript, Tailwind, React Query and Zustand on the frontend, all in Docker Compose. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#C89B3C"
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
