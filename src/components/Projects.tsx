import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';

interface Project {
	index: number;
	image: string;
	image_dark: string;
	description: string;
	name: string;
	demo_link: string;
	github_link: string;
	hover_gif_dark: string;
	hover_gif_light: string;
}

export default function Projects() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { theme } = useTheme();

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setModalImg(undefined);
			}
		};
		window.addEventListener('keydown', closeOnEscapeKey);
		return () => window.removeEventListener('keydown', closeOnEscapeKey);
	}, []);

	useEffect(() => {
		if (modalImg === undefined) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [modalImg]);

	const projects: Project[] = [
		{
			index: 0,
			image: '/project_thumbnails/images/cloud.jpeg',
			image_dark: '/project_thumbnails/images/cloud.jpeg',
			description: 'Learning Guide',
			name: 'Cloud Guide',
			demo_link: 'https://gardo32.github.io/Cloud-Guide/',
			github_link: 'https://github.com/Gardo32/Cloud-Guide',
			hover_gif_dark: '/project_thumbnails/images/cloud.jpeg',
			hover_gif_light: '/project_thumbnails/images/cloud.jpeg',
		},
		{
			index: 1,
			image: '/project_thumbnails/images/azure.jpeg',
			image_dark: '/project_thumbnails/images/azure.jpeg',
			description: 'Web Application',
			name: 'Audio Translation With Azure',
			demo_link: '#',
			github_link: 'https://github.com/Gardo32/AI-Speech-Translate',
			hover_gif_dark: '/project_thumbnails/images/azure.jpeg',
			hover_gif_light: '/project_thumbnails/images/azure.jpeg',
		},
		{
			index: 2,
			image: '/project_thumbnails/images/onrobo.jpeg',
			image_dark: '/project_thumbnails/images/onrobo.jpeg',
			description: 'Portable Development Kit',
			name: 'Onrobo System',
			demo_link: 'https://onrobo.me/',
			github_link: 'https://github.com/Gardo32/Onrobo',
			hover_gif_dark: '/project_thumbnails/images/onrobo.jpeg',
			hover_gif_light: '/project_thumbnails/images/onrobo.jpeg',
		},
	];

	const columns = projects.length < 3 ? projects.length : 3;
	const rows = Math.ceil(projects.length / columns);

	return (
		<>
			<Element name="projects" className="relative" />
			<div className="mb-48">
				<h2 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Projects
				</h2>
				<div
					className={`mx-0 grid grid-cols-${columns} grid-rows-${rows} sm:grid-cols-2 md:mx-4 lg:grid-cols-3`}
				>
					{projects.map((project) => (
						<div
							key={project.index}
							className="group m-6 flex flex-col items-center justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700"
						>
							<Fade bottom>
								<div className="relative flex h-full items-center justify-center">
									<Image
										src={theme === 'light' ? project.image : project.image_dark}
										alt={project.name}
										width={300}
										height={224}
										title="Click to enlarge"
										onClick={() => {
											setModalImg(theme === 'dark' ? project.image_dark : project.image);
										}}
										className="absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0"
									/>
									<Image
										src={theme === 'light' ? project.hover_gif_light : project.hover_gif_dark}
										alt={project.name}
										width={300}
										height={224}
										unoptimized={true}
										className="mb-4 h-auto max-h-56 w-full rounded-lg object-contain"
									/>
								</div>
								<div className="w-full">
									<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
										{project.description}
									</p>
									<p className="my-1 text-xl font-medium">{project.name}</p>
									<div className="flex justify-between">
										<Link
											className="text-sm"
											href={project.demo_link}
											aria-label="Visit Demo"
											onClick={
												project.demo_link === '#'
													? (e) => {
															e.preventDefault();
													  }
													: (e) => {
															e.preventDefault();
															window.open(project.demo_link, '_blank');
													  }
											}
										>
											{project.demo_link === '#' ? '' : 'Visit'}
											<span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
										</Link>
										<Link
											href={project.github_link}
											rel="noreferrer"
											title="Github Link"
											target="_blank"
										>
											<AiFillGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
										</Link>
									</div>
								</div>
							</Fade>
						</div>
					))}
				</div>
			</div>
			<div
				id="modal"
				className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
					showModal ? 'flex' : 'hidden'
				}`}
				onClick={() => {
					setModalImg(undefined);
				}}
			>
				<div className="flex items-center justify-center sm:m-10 lg:m-20">
					{/* eslint-disable @next/next/no-img-element */}
					<img id="modal-img" alt="" src={modalImg ? modalImg : ''} className="max-h-[90dvh]" />
				</div>
			</div>
		</>
	);
}
