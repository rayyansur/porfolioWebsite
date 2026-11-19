import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Gauntlet</h1>
                <b className={"opacity-80 font-bold text-center"}>A public arena where classic quant models and LLMs paper-trade the S&P 500 head to head.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            Classic quant models and frontier LLMs paper-trade the same S&P 500 universe on the same daily data, long-only with no leverage, shorts or options. <br/>
                            Contestants are ranked forward-only against SPY buy-and-hold by Deflated Sharpe ratio, which accounts for every contestant version ever run so a lucky model cannot top the board by chance. <br/>
                            Everything is disclosed: prompts, configs, risk limits and every signal. Decisions are committed with a SHA-256 hash before the next open and revealed after the next close, and seasons are frozen and hashed before day one, so anyone can verify the results. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Every contestant goes through one pipeline: Contestant, Signal, RiskEngine, OrderIntent, Broker. <br/>
                    The quant side includes SMA crossover, cross-sectional momentum, mean-reversion z-score, HMM regime, gradient-boosted triple-barrier and ARIMA-GARCH models. LLM contestants get a versioned prompt and a point-in-time market snapshot through LiteLLM, and calls are cached so replays never re-call an API. <br/>
                    Position sizing uses volatility targeting with quarter-Kelly caps, plus halts and a kill switch. Data comes from Alpaca with a point-in-time S&P 500 universe and FinBERT headline sentiment, and the feature panel is built so a model can never see past its decision day. <br/>
                    Python, FastAPI, PostgreSQL and Redis, with an APScheduler worker that runs the daily cycle after each close. The public leaderboard and operator console are built in React. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#E63946"
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
