import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";
import React from "react";

const MotionHoc = (Component: React.ComponentType) => {
    return function HOC() {
        return (
            <motion.div
            initial={{y: 500}}
            animate={{
                y: 0,
                transition: { duration: 0.5, type: "spring" },
            }}
            exit={{
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
            }}
        >
            <Component />
        </motion.div>
        );
    };
};

export default MotionHoc;