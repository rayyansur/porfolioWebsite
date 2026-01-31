import Aurora from '@/components/Aurora';
import CurvedLoop from '@/components/CurvedLoop';


export default function ContactPage() {
    return (
        <main>
            <section className="w-full py-24 inset-0 z-1">
                <div>
                    <CurvedLoop
                        marqueeText="Contact Me!"
                        speed={1}
                        curveAmount={100}
                        direction="right"
                        interactive={true}
                        className="custom-text-style"
                    />
                </div>

                <p className="max-w-3xl mx-auto flex flex-col items-left text-6xl opacity-80 text-white">
                    Email: rsurani6@gatech.edu<br/>
                    Phone: (352) 895-2588 <br/>
                    <span>
                    Linkedin: <a href="https://www.linkedin.com/in/rayyan-surani"
                                 className="text-blue-600 underline text-4xl">linkedin.com/in/rayyan-surani</a>
                    </span>
                    <span>
                    Github: <a href="https://github.com/rayyansur"
                                 className="text-blue-600 underline text-4xl">github.com/rayyansur</a>
                    </span>
                    <span>
                    My Resume: <a href="https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/assets/Rayyan%20Surani%20-%20Resume.pdf?raw=true"
                                  download="Rayyan_Surani_Resume"
                                 className="text-blue-600 underline text-4xl">Download</a>
                    </span>
                </p>

            </section>
            <div style={{width: '100%', height: '100%', position: 'absolute'}}
                 className={"fixed inset-0 -z-10 bg-black"}>
                <Aurora
                    colorStops={['#D74545', '#0f5cff', '#6554fc']}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
        </main>
    );
}