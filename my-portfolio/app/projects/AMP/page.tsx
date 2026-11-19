import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Advanced Music Production</h1>
                <b className={"opacity-80 font-bold text-center"}>A data pipeline that turns the MAESTRO classical piano dataset into normalized note sequences for training a music model.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            The groundwork for a piano music generation project. It takes the MAESTRO v3 dataset of recorded piano performances and turns every performance in the training split into a clean sequence of notes a model can learn from. <br/>
                            So far this is the data stage: about 5.66 million note events extracted, plus a script that turns the sequences back into a playable MIDI file to check the round trip. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Each MIDI file is read with mido, and music21 analyzes its key so the whole piece can be transposed to C, putting every performance in the same key. <br/>
                    Only note-on events with a nonzero velocity are kept, stored as time delta, pitch and velocity, normalized to the 0 to 1 range, and written to CSV with pandas. <br/>
                    A second script reverses the normalization and writes the notes back out as MIDI. <br/>
                </b>


            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#C2389C"
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
