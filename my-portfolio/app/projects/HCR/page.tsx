import PixelSnow from '@/components/PixelSnow';

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Handwritten Character Recognizer</h1>
                <b className={"opacity-80 font-bold text-center"}>Draw in the air with your finger in front of a webcam and a CNN recognizes what you wrote.</b>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            MediaPipe hand tracking follows your index fingertip through the webcam and draws its path onto a canvas, with the thumb acting as the pen toggle. <br/>
                            When you are done, the drawing is preprocessed and passed to a convolutional neural network that predicts the digit. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    The model, HDRNet, is a small PyTorch CNN: three convolutional layers with batch normalization, max pooling, dropout and global average pooling into a linear classifier. <br/>
                    It was trained on the MNIST dataset with a held-out validation split, with training runs logged to TensorBoard. <br/>
                    OpenCV handles the webcam feed and drawing overlay. <br/>
                </b>
                <a href={"https://github.com/rayyansur/Handwritten-Digit-Recognizer"}
                   className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#6C42F5"
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
