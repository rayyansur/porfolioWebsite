import PixelSnow from '@/components/PixelSnow';
import ReactPlayer from "react-player";

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>Knowledge Location Recognition.ai</h1>
                <b className={"opacity-80 font-bold text-center"}>A hackathon project to help visually impaired people find objects using voice commands and detect collisions using computer vision.</b>
                    <div className={"item"}>
                        <h2 className="text-2xl font-bold mb-4"><br/>Video Demo</h2>
                        <ReactPlayer src={"https://www.youtube.com/watch?v=0AqZr2csHA8"} controls={true} height={"240px"}
                                     width={"400px"}></ReactPlayer>
                    </div>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            This project utilizes two industry standard computer vision libraries, YOLO for object detection,
                            and MiDaS for relative depth perception. <br/>
                            The goal of this project was to provide a convenient way for pathfinding and object detection using
                            computer vision for visually impaired users. <br/>
                        </b>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    The functionalities of this project were broken down into two, pathfinding and object detection. <br/>
                    For pathfinding, the video stream from the camera would give images to MiDaS to check for any object that is close
                    to the user, if it is, that image would go into YOLO to be classified and sent to an LLM which would create a warning
                    for the user, then ElevenLabs text to speech was utilized to voice the warning out. <br/>
                    For object detection, the speech to text model from ElevenLabs was used to give the user an opportunity to prompt for
                    their item, if the item is detected in the frame using YOLO, the LLM was given position and depth data to generate a message
                    for the user that was again read out. <br/>
                </b>
                <a href={"https://github.com/rayyansur/KLR.ai"}
                   className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div className="fixed inset-0 -z-1 bg-black">

                <PixelSnow
                    color="#0f4396"
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