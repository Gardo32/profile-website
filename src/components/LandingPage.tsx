import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiCredly } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function LandingPage() {
	const line1 = 'Hi, I am an enthusiastic cloud computing student from Bahrain';
	const line2 = 'I like to learn new things and build stuff.';

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const titles = ['Azure AI Engineer', 'AWS Cloud Practitioner', 'NVTC Cloud-Computing Student', 'Tech Enthusiast'];
	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [titles.length]);

	return (
		<div className="min-h-[100dvh] w-full md:flex md:items-center md:justify-center">
			<div className="px-10 pt-10 text-center">
				<h1 className="py-2 text-3xl font-medium text-cyan-700 dark:text-cyan-600 sm:text-4xl md:text-5xl">
					Mohammed Aldaqaq
				</h1>

				{mounted ? (
					<TextTransition springConfig={presets.default} className="flex items-center justify-center">
						<p className="py-2 text-xl font-medium sm:text-2xl">{titles[titleIndex % titles.length]}</p>
					</TextTransition>
				) : (
					<p className="py-2 text-xl font-medium sm:text-2xl">{titles[titleIndex % titles.length]}</p>
				)}

				{mounted ? (
					<motion.h3
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 1 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.02,
								},
							},
						}}
						className="py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg"
					>
						{line1.split('').map((char, index) => {
							return (
								<motion.span
									key={char + '-' + index}
									variants={{
										hidden: { opacity: 0, y: 50 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
								>
									{char}
								</motion.span>
							);
						})}

						<br />

						{line2.split('').map((char, index) => {
							return (
								<motion.span
									key={char + '-' + index}
									variants={{
										hidden: { opacity: 0, y: 50 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
								>
									{char}
								</motion.span>
							);
						})}
					</motion.h3>
				) : (
					<div className="py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
						{' '}
						<br />{' '}
					</div>
				)}
				<div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
					<a
						href="https://github.com/Gardo32"
						target="_blank"
						aria-label="Github"
						rel="noreferrer"
						className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
					>
						<AiFillGithub />
						<p className="invisible text-xs group-hover:visible">Github</p>
					</a>
					<a
						href="https://www.linkedin.com/in/mohammed-aldaqaq-5b6a7528b/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="group hover:cursor-pointer hover:text-cyan-800 dark:hover:text-cyan-500"
					>
						<AiFillLinkedin />
						<p className=" invisible  text-xs group-hover:visible">LinkedIn</p>
					</a>
					<a
						href="https://www.credly.com/users/mohammed-aldaqaq/badges"
						target="_blank"
						rel="noreferrer"
						aria-label="Leetcode"
						className="group hover:cursor-pointer hover:text-yellow-600"
					>
						<SiCredly />
						<p className="invisible text-xs group-hover:visible">Credly</p>
					</a>
				</div>
			</div>

			<div className="px-10 py-20 md:px-0">
				<video
					autoPlay
					loop
					muted
					className="w-100 mx-auto rounded-full border-4 border-cyan-500"
					poster="/coding_anim_thumb.jpg"
				>
					<source src="/w.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}
