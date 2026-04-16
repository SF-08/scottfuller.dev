"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import MotionHoc from "../../pages/motionhoc";


const Logo = ({ className }: { className?: string }) => {
    return (
        <img alt="logo" src="/logo.png" className={`w-20 ${className ?? ""}`} />
    );
};

const NavBar = () => {
    const pathname = usePathname();
    const showBackButton = pathname !== "/";

    return (
        <nav className="navbar w-full py-4">
            <div className="relative w-full flex justify-center items-center h-auto">
                {showBackButton && (
                    <Link
                        href="/"
                        className="absolute left-0 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                        <FaArrowLeft />
                        Back to home
                    </Link>
                )}

                <Link href="/" aria-label="Go to homepage">
                    <Logo />
                </Link>
            </div>
        </nav>
    );
};

const NavBarWithMotion = MotionHoc(NavBar);

export default NavBarWithMotion;