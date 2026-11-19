import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>BiasLens</h1>
                <b className={"opacity-80 font-bold text-center"}>News Ingestion website that does Political Bias and Sentiment Analysis.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            BiasLens is a full-stack ML system for detecting political bias, sentiment, and narrative framing in news text. <br/>
                            Its core feature is narrative drift tracking: monitoring how the same story is framed differently across sources and over time. <br/>
                            Articles can be analyzed from the Next.js dashboard or straight from the page you are reading with the Chrome extension, and every result is saved to an analysis history. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    The FastAPI backend sends text to an ML pipeline built on HuggingFace Transformers (PyTorch) and stores results in PostgreSQL through SQLAlchemy and Alembic, behind JWT authentication. <br/>
                    The drift score runs from 0 (identical framing) to 1 (maximally opposed framing). It combines the cosine distance between bias score vectors, the KL divergence between sentiment distributions, and the embedding similarity of the article bodies. <br/>
                    Articles can be ingested in bulk from NewsAPI, and the whole stack runs with Docker Compose. <br/>
                </b>
                <a href={"https://github.com/rayyansur/BiasLens"}
                   className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#3DA1FF"
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
