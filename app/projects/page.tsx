"use client";

import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub, FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import MotionHoc from "../pages/motionhoc";

type Project = {
    name: string;
    summary: string;
    year: string;
    role: string;
    stack: string[];
    status: string;
    accent: string;
    sourceUrl?: string;
    expandUrl?: string;
};

export const projects = [
    {
        name: "scottfuller.dev",
        summary:
            "My personal website built with Next.js, Tailwind, and Framer Motion.",
        year: "2026",
        role: "Design + Frontend",
        stack: ["Next.js", "Tailwind", "Framer Motion"],
        status: "Live",
        accent: "from-sky-500/30 via-cyan-500/10 to-transparent",
        sourceUrl: "https://github.com/SF-08/scottfuller.dev",
    },
    {
        name: "Concept Commision Work - WIP",
        summary:
            "A clean dashboard system designed to track invoices, stock & customer orders.",
        year: "2026",
        role: "UX/UI Design + Frontend",
        stack: ["React", "TypeScript", "Tailwind", "NodeJS"],
        status: "Prototype",
        accent: "from-emerald-500/30 via-lime-500/10 to-transparent",
        sourceUrl: "https://github.com/SF-08/CommisionWork",
        expandUrl: ""
    },
    {
        name: "LateFix - WIP",
        summary:
            "A mobile app specialised to improve a person's sleep schedule and not be late for day-to-day events.",
        year: "2025",
        role: "Full Stack Development",
        stack: ["React", "Figma", "Responsive Design"],
        status: "Prototype",
        accent: "from-fuchsia-500/30 via-pink-500/10 to-transparent",
        sourceUrl: "https://github.com/SF-08/LateFix",
        expandUrl: "/projects/latefix",
    },
    ] satisfies Project[];

const highlights = [
    { label: "Projects shown", value: "04" },
    { label: "Primary stack", value: "React, Next + Tailwind" },
    { label: "Focus", value: "Speed + clarity" },
];

const ProjectsComponent = () => {
    return (
        <section className="w-full py-10 md:py-16 [zoom:50%]">
            <div className="mb-10 max-w-3xl text-center md:text-left">
                <h1 className="text-4xl font-bold text-white md:text-6xl">
                    Projects
                </h1>
            </div>

            <div className="mb-10 grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur"
                    >
                        <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                            {item.label}
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6">
                {projects.map((project) => (
                    <article
                        key={project.name}
                        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur"
                    >
                        <div className={`h-2 bg-linear-to-r ${project.accent}`} />
                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
                                <span>{project.year}</span>
                                <span>•</span>
                                <span>{project.role}</span>
                                <span>•</span>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">
                                    {project.status}
                                </span>
                            </div>

                            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                                {project.name}
                            </h2>

                            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                                {project.summary}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                                >
                                    View live demo
                                    <FaArrowUpRightFromSquare />
                                </Link>
                                {project.sourceUrl ? (
                                    <Link
                                        href={project.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                    >
                                        Source code
                                        <FaGithub />
                                    </Link>
                                ) : (
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/45">
                                        Source code private
                                        <FaGithub />
                                    </span>
                                )}
                                {project.expandUrl ? (
                                    <Link
                                    href={project.expandUrl}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                    >
                                        Expand
                                        
                                        <FaUpRightAndDownLeftFromCenter />
                                    </Link>
                                ) : (
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/45">
                                        No additional details
                                        <FaUpRightAndDownLeftFromCenter />
                                    </span>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
