import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Spotd</h1>
                <b className={"opacity-80 font-bold text-center"}>A social gym check-in app: post your daily workout photo to unlock your friends&apos; posts and keep your streak alive.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            Post one photo a day from the gym to see what your friends posted that day. Your own post is the key: friends&apos; posts for a day stay locked until you have posted yours, except on rest days, when nothing is required. <br/>
                            Streaks only count on the days you schedule as workout days, so a rest day never breaks one, and a leaderboard ranks you against your friends by current streak. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    The iOS app is built with Expo (React Native) and Expo Router, with tabs for the feed, posting, the leaderboard and your profile. <br/>
                    The FastAPI backend handles JWT auth, friend requests, workout schedules and plans, and reactions on posts, with SQLAlchemy models. Photos upload straight to AWS S3 through presigned URLs, with a local-storage fallback for development. <br/>
                    A streak goes up with a post made on a scheduled day and resets on the first missed scheduled day, while unscheduled days stay neutral. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#FF5A1F"
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
