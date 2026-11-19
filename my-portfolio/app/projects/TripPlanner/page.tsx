import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Trip Planner</h1>
                <b className={"opacity-80 font-bold text-center"}>Plan each day of a trip as a graph of timed activities instead of a flat list.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            Each trip is split into days, and each day holds one or more plans. A plan is a directed acyclic graph: one root activity that can branch into options and join back up, so a day can hold alternatives instead of one fixed itinerary. <br/>
                            Activities have a start time and a duration that sets their height on the canvas, and can link to a website, a Google Maps place, or both. Trips can be shared with friends as collaborators. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    The graph rules are enforced in the service layer, not just the UI: exactly one root per graph, no cycles, no self-loops or duplicate edges, and every edge has to run forward in time. Deleting an activity re-parents its children onto its parents. <br/>
                    Every edit that reads the graph first takes a row lock on it, so two concurrent edits cannot each pass a check that together they would break. <br/>
                    The backend is FastAPI with PostgreSQL and Alembic. The frontend is React with Vite, React Flow for the canvas, Zustand, React Query and Google Maps. Both are deployed on Vercel. <br/>
                </b>
                <a href={"https://trip-planner-frontend.vercel.app/"}
                   className={"text-blue-600 underline text-2xl"}> Website Link</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#3B6EA8"
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
