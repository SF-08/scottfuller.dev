"use client";

import React from "react";

const tulips = Array.from({ length: 10 }, (_, i) => ({
	left: `${8 + i * 9}%`,
	delay: `${i * 0.35}s`,
	scale: 0.7 + (i % 3) * 0.12,
	hue: [330, 340, 350, 20, 300][i % 5],
}));

const fireworks = Array.from({ length: 8 }, (_, i) => ({
	left: `${10 + (i * 11) % 80}%`,
	top: `${10 + (i * 13) % 50}%`,
	delay: `${i * 0.9}s`,
	size: 120 + (i % 3) * 30,
}));

const memoryImages = [
	{ title: "More moments", src: "/maddie/IMG_5224.JPEG", alt: "Description of image 1" },
	{ title: "Little reasons you're loved", src: "/maddie/IMG_5307.JPEG", alt: "Description of image 2" },
	{ title: "Keep going forever", src: "/maddie/IMG_5199.JPEG", alt: "Description of image 3" },
];

export default function Page() {
	const [images, setImages] = React.useState(memoryImages);

	return (
		<main className="birthday-scene">
			<div className="sky glow" />
			<div className="sky stars" />

			<div className="fireworks-layer" aria-hidden="true">
				{fireworks.map((firework, index) => (
					<span
						key={index}
						className="firework"
						style={{
							left: firework.left,
							top: firework.top,
							animationDelay: firework.delay,
							width: `${firework.size}px`,
							height: `${firework.size}px`,
						}}
					>
						<span className="burst burst-a" />
						<span className="burst burst-b" />
						<span className="burst burst-c" />
					</span>
				))}
			</div>

			<div className="content">
				<p className="eyebrow">A joyful celebration for you</p>
				<h1>Happy Birthday my beautiful girl!</h1>
				<p className="message">
					Wishing you a day full of laughter, love, and beautiful moments.
					May your day be as blessed as you are.
				</p>

				<div className="cards">
					<div className="card">🎂 Make a wish</div>
					<div className="card">✨ Shine bright</div>
					<div className="card">💐 Celebrate today</div>
				</div>
			</div>

			<div className="garden" aria-hidden="true">
				{tulips.map((tulip, index) => (
					<span
						key={index}
						className="tulip"
						style={{
							left: tulip.left,
							animationDelay: tulip.delay,
							transform: `scale(${tulip.scale})`,
							["--hue" as never]: tulip.hue,
						}}
					>
						<span className="stem" />
						<span className="leaf leaf-left" />
						<span className="leaf leaf-right" />
						<span className="flower" />
					</span>
				))}
			</div>

			<div className="scroll-canvas">
				<section className="memory memory-a">
					<h2>More moments</h2>
					<img src="/maddie/IMG_5224.JPEG" alt="Description of image 1" />
				</section>

				<section className="memory memory-b">
					<h2>Little reasons you're loved</h2>
					<img src="/maddie/IMG_5307.JPEG" alt="Description of image 2" />
				</section>

				<section className="memory memory-c">
					<h2>Keep going forever</h2>
                    <img src="/maddie/IMG_5199.JPEG" alt="Description of image 3" />
				</section>

				<div className="floating-card floating-card-a">💖 You’re the best part of every day</div>
				<div className="floating-card floating-card-b">🌷 The quietness in my heart</div>
			</div>

			<style jsx>{`
				:global(body) {
					margin: 0;
					min-height: 100vh;
					background: #12081a;
					overflow-x: hidden;
					overflow-y: auto;
					font-family: Arial, Helvetica, sans-serif;
				}

				.birthday-scene {
					position: relative;
					min-height: 100vh;
					padding-bottom: 40vh;
					color: #fff;
					background:
						radial-gradient(circle at top, rgba(255, 141, 210, 0.28), transparent 34%),
						radial-gradient(circle at 20% 20%, rgba(160, 120, 255, 0.22), transparent 22%),
						linear-gradient(180deg, #1b0d2a 0%, #12081a 48%, #0b1020 100%);
				}

				.sky,
				.fireworks-layer,
				.garden {
					position: absolute;
					inset: 0;
					pointer-events: none;
				}

				.sky.glow {
					background: radial-gradient(circle at 50% 20%, rgba(255, 174, 223, 0.2), transparent 35%);
					filter: blur(24px);
					animation: drift 12s ease-in-out infinite alternate;
				}

				.sky.stars {
					background-image:
						radial-gradient(#fff 1px, transparent 1px),
						radial-gradient(#ffd8ff 1px, transparent 1px),
						radial-gradient(#fff 1px, transparent 1px);
					background-size: 120px 120px, 180px 180px, 240px 240px;
					background-position: 0 0, 40px 60px, 100px 140px;
					opacity: 0.35;
					animation: twinkle 6s linear infinite;
				}

				.content {
					position: relative;
					z-index: 2;
					width: min(860px, calc(100vw - 32px));
					text-align: center;
					padding: 48px 24px 120px;
					backdrop-filter: blur(6px);
					min-height: 100vh;
					display: grid;
					place-content: center;
					margin: 0 auto;
				}

				.scroll-canvas {
					position: relative;
					min-height: 320vh;
					padding: 10vh 6vw 20vh;
				}

				.memory,
				.floating-card {
					position: absolute;
					max-width: min(420px, 78vw);
					border-radius: 28px;
					background: rgba(255, 255, 255, 0.1);
					border: 1px solid rgba(255, 214, 234, 0.22);
					box-shadow: 0 16px 50px rgba(0, 0, 0, 0.24);
					backdrop-filter: blur(10px);
				}

				.memory {
					padding: 22px 24px;
				}

				.memory h2,
				.memory p {
					margin: 0;
				}

				.memory h2 {
					color: #ffd1e7;
					margin-bottom: 8px;
				}

				.memory p,
				.floating-card {
					color: rgba(255, 245, 250, 0.94);
				}

				.memory-a { top: 18vh; left: 8vw; }
				.memory-b { top: 92vh; right: 10vw; }
				.memory-c { top: 182vh; left: 16vw; }

				.floating-card {
					padding: 18px 20px;
				}

				.floating-card-a { top: 44vh; right: 16vw; }
				.floating-card-b { top: 136vh; left: 12vw; }
				.floating-card-c { top: 236vh; right: 14vw; }

				.eyebrow {
					margin: 0 0 12px;
					letter-spacing: 0.3em;
					text-transform: uppercase;
					color: #ffd6ea;
					font-size: 0.8rem;
				}

				h1 {
					margin: 0;
					font-size: clamp(3rem, 8vw, 6.5rem);
					line-height: 0.95;
					text-shadow: 0 0 20px rgba(255, 140, 201, 0.55);
					animation: popIn 1.1s ease both;
				}

				.message {
					margin: 18px auto 0;
					max-width: 620px;
					font-size: clamp(1rem, 2vw, 1.25rem);
					line-height: 1.7;
					color: rgba(255, 255, 255, 0.9);
				}

				.cards {
					display: flex;
					justify-content: center;
					gap: 14px;
					flex-wrap: wrap;
					margin-top: 28px;
				}

				.card {
					padding: 14px 18px;
					border-radius: 999px;
					background: rgba(255, 255, 255, 0.12);
					border: 1px solid rgba(255, 255, 255, 0.18);
					box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
					animation: float 4s ease-in-out infinite;
				}

				.card:nth-child(2) { animation-delay: 0.4s; }
				.card:nth-child(3) { animation-delay: 0.8s; }

				.garden {
					z-index: 1;
					overflow: hidden;
				}

				.tulip {
					position: absolute;
					bottom: -8px;
					width: 54px;
					height: 180px;
					transform-origin: bottom center;
					animation: sway 4.5s ease-in-out infinite;
				}

				.stem {
					position: absolute;
					left: 50%;
					bottom: 0;
					width: 10px;
					height: 120px;
					border-radius: 999px;
					transform: translateX(-50%);
					background: linear-gradient(180deg, #58d16f, #1f7b34);
				}

				.leaf {
					position: absolute;
					bottom: 38px;
					width: 34px;
					height: 18px;
					border-radius: 100% 0 100% 0;
					background: linear-gradient(180deg, #7df18d, #2f9a4d);
				}

				.leaf-left { left: 0; transform: rotate(-35deg); }
				.leaf-right { right: 0; transform: scaleX(-1) rotate(-35deg); }

				.flower {
					position: absolute;
					left: 50%;
					bottom: 110px;
					width: 44px;
					height: 56px;
					transform: translateX(-50%);
					border-radius: 50% 50% 40% 40%;
					background: linear-gradient(180deg, hsl(var(--hue) 85% 72%), hsl(var(--hue) 85% 54%));
					box-shadow: 0 0 20px hsla(var(--hue), 85%, 70%, 0.45);
				}

				.flower::before,
				.flower::after {
					content: "";
					position: absolute;
					top: -10px;
					width: 24px;
					height: 34px;
					border-radius: 50% 50% 35% 35%;
					background: inherit;
				}

				.flower::before { left: -8px; transform: rotate(-20deg); }
				.flower::after { right: -8px; transform: rotate(20deg); }

				.firework {
					position: absolute;
					display: grid;
					place-items: center;
					border-radius: 50%;
					animation: explode 2.8s ease-in-out infinite;
					opacity: 0;
				}

				.burst {
					position: absolute;
					inset: 50% auto auto 50%;
					width: 4px;
					height: 50%;
					border-radius: 999px;
					transform-origin: bottom center;
					background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0));
					box-shadow: 0 0 18px rgba(255, 255, 255, 0.8);
				}

				.burst-a { transform: translate(-50%, -100%) rotate(0deg); color: #ff8bd1; }
				.burst-b { transform: translate(-50%, -100%) rotate(60deg); }
				.burst-c { transform: translate(-50%, -100%) rotate(120deg); }

				.burst-a,
				.burst-b,
				.burst-c {
					background: linear-gradient(180deg, currentColor, transparent);
				}

				@keyframes drift {
					from { transform: translate3d(0, 0, 0); }
					to { transform: translate3d(0, 16px, 0); }
				}

				@keyframes twinkle {
					0%, 100% { opacity: 0.28; }
					50% { opacity: 0.45; }
				}

				@keyframes popIn {
					from { opacity: 0; transform: scale(0.85); filter: blur(8px); }
					to { opacity: 1; transform: scale(1); filter: blur(0); }
				}

				@keyframes float {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-8px); }
				}

				@keyframes sway {
					0%, 100% { transform: rotate(-2deg); }
					50% { transform: rotate(2deg); }
				}

				@keyframes explode {
					0% { opacity: 0; transform: scale(0.15); }
					10% { opacity: 1; }
					45% { opacity: 1; transform: scale(1); }
					70% { opacity: 0; transform: scale(1.35); }
					100% { opacity: 0; transform: scale(1.35); }
				}
			`}</style>
		</main>
	);
}
