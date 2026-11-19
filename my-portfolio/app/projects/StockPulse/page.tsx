import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>StockPulse</h1>
                <b className={"opacity-80 font-bold text-center"}>A stock and fund dashboard that ranks the market with a blended score pulled from multiple data sources.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            StockPulse ranks S&P 500 stocks and a set of funds so you can spot market movers at a glance and filter by sector. <br/>
                            Each stock has interactive 1D, 1W, 1M and 1Y charts with key metrics, two stocks can be compared side by side, and a personal watchlist is saved to your account. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Every ticker gets a 0 to 100 score that blends price momentum, volume surge against its 30-day average, P/E against the sector median, analyst consensus and RSI. I later reworked it to curb peak-chasing and flag dip rebounds. <br/>
                    Market data is aggregated from Finnhub, Alpha Vantage, Polygon and yfinance, falling back between sources and tagging each response with where its data came from. A market-hours-aware scheduler pre-fetches quotes, snapshots and bulk history into Redis, so the API rarely has to call an upstream source on a request. <br/>
                    FastAPI, PostgreSQL, Redis and APScheduler on the backend; React, Vite, Tailwind, Recharts and React Query on the frontend. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#F59E0B"
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
