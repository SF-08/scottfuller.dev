import type {Config} from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0deg)" },
                    "10%": { transform: "rotate(20deg)" },
                    "20%": { transform: "rotate(-16deg)" },
                    "30%": { transform: "rotate(20deg)" },
                    "40%": { transform: "rotate(-8deg)" },
                    "50%": { transform: "rotate(20deg)" },
                    "60%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(0deg)" }
                }
            },
            animation: {
                wave: "wave 2s ease-in-out infinite"
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"]
    }
};

export default config