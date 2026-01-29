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
                This website is my portfolio to showcase all my academic and personal projects.<br/>
                Most of my projects have either full-stack or back-end development done by me.<br/>
                I am most interested in Computer Vision and a lot of my projects are centered around it. <br/>
                I am proficient with frameworks like Django and React and programming languages like Java, Python, C++. <br/>
                You can find out more about my projects and my contact details from the menu. <br/>
            </p>

        </section>
    );
}