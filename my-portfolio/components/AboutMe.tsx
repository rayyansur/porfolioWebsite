import CurvedLoop from './CurvedLoop';


export default function AboutMe() {
    return (
        <section className="w-full py-10 md:py-24 inset-0 z-1">
            <div >
                <CurvedLoop
                    marqueeText= "Hello! My name is Rayyan!"
                    speed={1}
                    curveAmount={100}
                    direction="right"
                    interactive={true}
                    className="custom-text-style"
                />
            </div>

            <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed opacity-85">
                <p>I&apos;m a senior at Georgia Tech studying Computer Science, with concentrations in Intelligence and Modeling &amp; Simulation. I graduate in December 2027.</p>
                <p>Right now I&apos;m an AI Engineer Intern at Vanguard in Charlotte, building AI tools for their developers. Before that I spent the summer at ResMed shipping RAG and agentic AI features, and I did swarm robotics research with the Robot Collective at Tech.</p>
                <p>Most of what I build lands somewhere between machine learning and full-stack work. A lot of my projects start with a model and end with an app built around it.</p>
                <p>I mostly write Python, Java and C++, and I usually reach for FastAPI, Django, Spring Boot or React when I&apos;m putting something together.</p>
                <p>This site is where I keep my school and personal projects. Open the menu to see them, my experience, or how to get in touch.</p>
            </div>

        </section>
    );
}