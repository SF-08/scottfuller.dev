"use client";

import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub, FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import NavBar from "../../components/nav/nav";
import MotionHoc from "../../pages/motionhoc";

const LateFix = () => {
    return (
        <section className="w-full py-10 md:py-16 [zoom:50%]">
            <div className="mb-10 max-w-3xl text-center md:text-left">
                <h1 className="text-4xl font-bold text-white md:text-6xl">
                    Latefix
                </h1>
            </div>// Add more content about LateFix here, such as project details, images, etc.
        </section>
    );
}