'use client'

import { useRef } from "react";
import CardSwap, { Card, type CardSwapHandle } from "@/components/CardSwap";

const experiences = [
    {
        company: "Vanguard",
        role: "AI Engineer Intern",
        period: "Sep 2026 – Apr 2027",
        location: "Charlotte, NC",
        points: [
            "Building AI-powered developer tools inside Vanguard's IT division to improve internal engineering workflows.",
            "Integrating LLM capabilities into developer-facing tooling with prompt engineering and RAG patterns.",
            "Shipping production-grade AI tooling alongside senior engineers with a focus on reliability and observability."
        ],
        stack: ["LLMs", "RAG", "Prompt Engineering"],
        accent: "#B01E28",
        url: "https://www.vanguard.com/"
    },
    {
        company: "ResMed",
        role: "AI Engineer Intern",
        period: "May 2026 – Aug 2026",
        location: "Atlanta, GA",
        points: [
            "Integrated RAG LLMs on AWS to reduce customer support inquiries for healthcare customers.",
            "Built agentic AI solutions in a cloud-native microservices architecture using Java, Spring Boot, and SQL.",
            "Shipped production AI features with senior engineers and R&D leadership, cutting support latency by 40%."
        ],
        stack: ["Java", "Spring Boot", "AWS", "SQL"],
        accent: "#0091DA",
        url: "https://www.resmed.com/"
    },
    {
        company: "The Robot Collective, VIP",
        role: "Undergraduate Researcher",
        period: "Jan 2026 – May 2026",
        location: "Atlanta, GA",
        points: [
            "Designed and evaluated feature expansions for swarm robotics systems.",
            "Researched inter-agent communication strategies for swarm coordination and behavior evaluation.",
            "Trained lightweight computer vision models for real-time swarm control under hardware constraints."
        ],
        stack: ["ROS2", "YOLO", "Raspberry Pi", "Teensy"],
        accent: "#B3A369",
        url: "https://www.vip.gatech.edu/teams/robot-collective"
    }
];

export default function Experience() {
    const stack = useRef<CardSwapHandle>(null);

    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start pb-40 lg:pb-24">
            <div className="w-full lg:w-1/2 pt-6">
                <h1 className="text-5xl sm:text-6xl font-bold mb-4">Experience</h1>
                <p className="opacity-80 text-lg sm:text-2xl max-w-xl">
                    The internships and roles where I have shipped real software.<br/>
                    Hover the stack to pause it. Click a card to open the company.
                </p>

                <button
                    type="button"
                    onClick={() => stack.current?.next()}
                    className="mt-6 rounded-full border border-white/40 px-5 py-2 text-sm uppercase tracking-widest opacity-80 transition hover:border-white hover:opacity-100"
                >
                    Next role →
                </button>
            </div>

            <div className="relative w-full lg:w-1/2 h-[30rem] mt-10 lg:mt-24">
                <CardSwap
                    ref={stack}
                    width={480}
                    height={340}
                    cardDistance={60}
                    verticalDistance={70}
                    delay={4500}
                    pauseOnHover={true}
                    skewAmount={6}
                    easing="elastic"
                    onCardClick={(idx) => {
                        const url = experiences[idx]?.url;
                        if (url) window.open(url, "_blank", "noopener,noreferrer");
                    }}
                >
                    {experiences.map((exp) => (
                        <Card
                            key={exp.company + exp.period}
                            customClass="overflow-hidden flex flex-col cursor-pointer"
                            style={{
                                borderColor: exp.accent,
                                background: `linear-gradient(180deg, ${exp.accent}, #222)`
                            }}
                        >
                            <div className="flex items-center gap-3 border-b border-white/25 px-5 py-3">
                                <span
                                    className="h-3 w-3 rounded-full"
                                    style={{backgroundColor: exp.accent, boxShadow: `0 0 12px ${exp.accent}`}}
                                />
                                <span className="text-sm uppercase tracking-widest opacity-80">{exp.period}</span>
                            </div>

                            <div className="flex min-h-0 flex-1 flex-col px-5 py-4 text-white">
                                <h2 className="text-2xl font-bold leading-tight">{exp.company}</h2>
                                <h3 className="text-base italic opacity-80">{exp.role} · {exp.location}</h3>

                                <ul className="mt-3 space-y-1.5 text-sm opacity-90 list-disc list-inside">
                                    {exp.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>

                                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                                    {exp.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/40 px-2.5 py-0.5 text-xs opacity-90"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </div>
    );
}
