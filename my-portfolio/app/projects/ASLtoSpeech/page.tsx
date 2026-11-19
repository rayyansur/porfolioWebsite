import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>ASL-to-Speech</h1>
                <b className={"opacity-80 font-bold text-center"}>Pattern recognition model using computer vision for sign language to speech to aid in real time conversations.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            An American Sign Language alphabet translator built as a real-time conversation aid. <br/>
                            Letters are read from the webcam one at a time and collected into a word. When the hand leaves the frame, the word is spoken out loud. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    Each frame goes through Google&apos;s MediaPipe hand landmarker, and the 21 hand landmarks (63 coordinates) are normalized and passed to a PyTorch multilayer perceptron that classifies 29 classes: the 26 letters plus space, delete and nothing. <br/>
                    The model was trained on landmarks extracted from the Kaggle ASL Alphabet dataset. <br/>
                    A Flask API serves predictions to an HTML frontend that runs locally in a pywebview window, and pyttsx3 handles text to speech. <br/>
                </b>
                <a href={"https://github.com/rayyansur/ASL-to-Speech"}
                   className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#6CF5F5"
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
