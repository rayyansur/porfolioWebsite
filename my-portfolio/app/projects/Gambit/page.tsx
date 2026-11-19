import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Gambit.ai</h1>
                <b className={"opacity-80 font-bold text-center"}>A chess practice app with an opening explorer and a chatbot that answers questions about your own chess.com games.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            The opening explorer lets you click through moves on a board and see every main-line branch from the Lichess masters database, with how often each move is played and how it has scored, plus the opening name and ECO code for the current position. <br/>
                            The game chatbot loads your recent chess.com games and answers questions about them, grounded in the games you actually played. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Games are pulled from the chess.com public API (the last three months by default), parsed with python-chess, and turned into a text summary of the players, opening, result and moves. Each summary is embedded with nomic-embed-text and stored in Chroma. <br/>
                    A question is embedded the same way, the five closest games are retrieved, and Llama 3.1 8B answers from those excerpts. Both models run locally through Ollama. <br/>
                    React, TypeScript and Vite with chess.js and react-chessboard on the frontend; FastAPI on the backend, with Clerk for auth. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#4C6FA8"
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
