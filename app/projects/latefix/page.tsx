"use client";

import Link from "next/link";
import MotionHoc from "../../pages/motionhoc";
import { projects } from "../page";

const lateFixProject = projects.find((project) => project.name === "LateFix - WIP");

const LateFixComponent = () => {
    return (
        <section className="w-full py-10 md:py-16 [zoom:50%]">
            <div className="mb-10 max-w-3xl text-left md:text-left">
                <h1 className="text-4xl font-bold text-white md:text-6xl">
                    LateFix
                </h1>
                <p className="mt-4 text-white/70 md:text-lg">
                    Latefix is a productivity and wellness app that helps users improve their sleep schedule while staying on time for daily tasks. It combines smart reminders, adaptive alarms, and personalised insights to promote healthier routines, better time management, and consistent punctuality.
                </p>
            </div>

            {lateFixProject ? (
                <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                    <span>{lateFixProject.year}</span>
                    <span>•</span>
                    <span>{lateFixProject.role}</span>
                    <div className="w-full" />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {lateFixProject.stack.map((tech) => (
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
                    href={lateFixProject?.sourceUrl ?? "https://github.com/SF-08/LateFix"}
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

const LateFix = MotionHoc(LateFixComponent);

export default LateFix;