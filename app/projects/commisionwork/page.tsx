"use client";

import Link from "next/link";
import MotionHoc from "../../pages/motionhoc";
import { projects } from "../page";

const commisionworkProject = projects.find((project) => project.name === "Concept Commision Work - WIP");

const CommisionworkComponent = () => {
    return (
        <section className="w-full py-10 md:py-16 [zoom:50%]">
            <div className="mb-10 max-w-3xl text-left md:text-left">
                <h1 className="text-4xl font-bold text-white md:text-6xl">
                    Concept Commision Work
                </h1>
                <p className="mt-4 text-white/70 md:text-lg">
                    Concept commision work is a creative project that explores innovative design solutions and artistic expression. It combines elements of visual storytelling, interactive media, and user experience to create engaging and meaningful digital experiences.
                </p>
            </div>

            {commisionworkProject ? (
                <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                    <span>{commisionworkProject.year}</span>
                    <span>•</span>
                    <span>{commisionworkProject.role}</span>
                    <div className="w-full" />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {commisionworkProject.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                    Back to projects
                </Link>
                <Link
                    href={commisionworkProject?.sourceUrl ?? "https://github.com/SF-08/CommissionWork"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                    View source
                </Link>
            </div>
        </section>
    );
};

const Commisionwork = MotionHoc(CommisionworkComponent);

export default Commisionwork;