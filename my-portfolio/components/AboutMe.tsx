import CurvedLoop from './CurvedLoop';


export default function AboutMe() {
    return (
        <section className="w-full py-24 inset-0">
            <div >
                <CurvedLoop
                    marqueeText= "Hello! My name is Rayyan!"
                    speed={3}
                    curveAmount={100}
                    direction="right"
                    interactive={false}
                    className="custom-text-style"
                />
            </div>

            <p className="max-w-3xl mx-auto flex flex-col items-center text-lg opacity-80">
                I am a Junior Computer Science major at Georgia Tech<br/>
                This website works is my portfolio<br/>

            </p>

        </section>
    );
}