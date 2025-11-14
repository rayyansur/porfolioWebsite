export default function Projects() {
    return (
        <section className="w-full max-w-3xl py-16">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="grid gap-6">
                <div className="p-6 rounded-2xl bg-neutral-900 shadow-md">
                    <h3 className="text-xl font-semibold">ASL CNN</h3>
                    <p className="opacity-70 text-sm">Deep learning model for sign language recognition.</p>
                </div>
                <div className="p-6 rounded-2xl bg-neutral-900 shadow-md">
                    <h3 className="text-xl font-semibold">BiasLens</h3>
                    <p className="opacity-70 text-sm">Chrome extension detecting political bias & sentiment.</p>
                </div>
            </div>
        </section>
    );
}