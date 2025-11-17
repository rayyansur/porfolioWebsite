import Prism from '@/components/Prism';


export default function ContactPage() {
    return (
        <main>
            <div style={{width: '100%', height: '100%', position: 'absolute'}} className={"fixed inset-0 -z-10 bg-black"}>
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0.1}
                    glow={0.9}
                />
            </div>


        </main>
    );
}