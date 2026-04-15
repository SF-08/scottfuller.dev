import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const socials = [
    { icon: FaGithub, href: "https://github.com/SF-08" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/scott-fuller-10a08431b/" },
    { icon: FaXTwitter, href: "https://twitter.com/sc0tt08" }
]

const bulletPoints = [
    { icon: "📍", label: "based in kent" },
    {
        icon: "📧",
        linkText: "let's get in touch!",
        href: "mailto:shrgf08@icloud.com"
    },
    {
        icon: "📄",
        linkText: "view my resume",
        href: "/ScottFullerResume.pdf",
        download: "ScottFullerResume"
    }
];

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row justify center items-center gap-10 md:gap-20">
            {/* Profile Picture */}
            <div className="relative w-[350px] md:w-2/5">
            <Image
                src="/self.png"
                alt='Profile Picutre'
                width={350}
                height={350}
                className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-full p-3 w-full h-auto"
                />
            </div>         


        {/* Bio Section */}        
        <div>
            <div className="text-center md:text-left mb-4">
                <h1 className="text-5x1">
                    Hi, I'm <span className="bg-gradient-to-tl from-indigo-500 to fuchsia-500 text-transparent bg-clip-text font-bold">Scott Fuller</span>
                    <span className="animate-wave inline-block">✋🏻</span>
                </h1>
                <h2 className="text-3x1">
                    I'm a Web & App Developer.
                </h2>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-1 text-xl text-center md:text-left">
                {bulletPoints.map(({ icon, label, linkText, href, download }, index) => (
                    <li key={index}>
                        <span className="mr-2">{icon}</span>
                        {label}
                        {href && (
                            <a href={href} download={download} className="link link-primary">{linkText}</a>
                        )}
                    </li>
                ))}
            </ul>
            
            {/* Social Links */}
            <ul className="flex justfify-center text-3x1 gap-10 mt-4">
                {socials.map(({ icon: Icon, href, label }) => (
                    <li key={label} className="hover:scale-125 hover:text-white transition-all ease-in-out">
                        <Link href={href} target="_blank" aria_label={label}>
                            <Icon />
                        </Link>
                    </li>
                ))}
            </ul>
            </div>        
        </div>
    );
}