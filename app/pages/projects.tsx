import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import MotionHoc from "./motionhoc";

const projects = [
    {
        name: "Portfolio Website",
        summary:
            "A personal site built with Next.js, Tailwind, and motion to present projects, experience, and contact details.",
        year: "2026",
        role: "Design + Frontend",
        stack: ["Next.js", "Tailwind", "Framer Motion"],
        status: "Live",
        accent: "from-sky-500/30 via-cyan-500/10 to-transparent",
    },
    {
        name: "Task Tracker UI",
        summary:
            "A clean task management interface with filtering, status indicators, and a focus on fast scanning.",
        year: "2025",
        role: "UI Concept",
        stack: ["React", "TypeScript", "Tailwind"],
        status: "Prototype",
        accent: "from-emerald-500/30 via-lime-500/10 to-transparent",
    },
    {
        name: "Local Business Landing Page",
        summary:
            "A conversion-focused landing page layout with strong calls-to-action and responsive sections.",
        year: "2025",
        role: "Landing Page",
        stack: ["Next.js", "SEO", "Responsive Design"],
        status: "Case Study",
        accent: "from-fuchsia-500/30 via-pink-500/10 to-transparent",
    },
];

const highlights = [
    { label: "Projects shown", value: "03" },
    { label: "Primary stack", value: "Next + Tailwind" },
    { label: "Focus", value: "Speed + clarity" },
];

const ProjectsComponent = () => {
    return (
        <section className="w-full py-10 md:py-16">
            <div className="mb-10 max-w-3xl text-center md:text-left">
                <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
                    Selected work
                </p>
                <h1 className="text-4xl font-bold text-white md:text-6xl">
                    Example projects layout
                </h1>
                <p className="mt-4 text-lg leading-8 text-white/70 md:text-xl">
                    This is a sample layout for showing your best work. Each card can hold a
                    screenshot, short description, stack, and links to the live site or source.
                </p>
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
                        <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_0.9fr] md:p-8">
                            <div>
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
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                    >
                                        Source code
                                        <FaGithub />
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                                <div className="flex aspect-4/3 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-linear-to-br from-white/10 to-transparent text-center text-sm text-white/45">
                                    Project screenshot
                                    <br />
                                    or preview mockup goes here
                                </div>

                                <div className="mt-5 grid gap-3 text-sm text-white/70">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span>Goal</span>
                                        <span className="text-white">Showcase work clearly</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span>Design style</span>
                                        <span className="text-white">Minimal + bold</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Best for</span>
                                        <span className="text-white">Portfolio presentation</span>
                                    </div>
                                </div>
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