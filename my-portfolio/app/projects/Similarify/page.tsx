import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Similarify</h1>
                <b className={"opacity-80 font-bold text-center"}>Spotify music-taste compatibility app where two people join a room and compare their listening.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            Two people sign in with Spotify, one creates a room and shares its code, and the other joins. <br/>
                            Similarify then compares their top artists and tracks and shows how compatible their music taste is. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    The comparison uses a rank-weighted Jaccard similarity over each user&apos;s top artists and tracks, so favorites near the top of both lists count for more than overlaps further down. <br/>
                    Results are shown as a compatibility score, a genre Venn diagram, an overlap grid, and a playlist bubble chart built with Recharts. <br/>
                    The backend is FastAPI with SQLAlchemy, Alembic and PostgreSQL, using python-jose for tokens. The frontend is Next.js with React Query and Tailwind. <br/>
                </b>
                <a href={"https://github.com/rayyansur/Similarify"}
                   className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#1DB954"
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
