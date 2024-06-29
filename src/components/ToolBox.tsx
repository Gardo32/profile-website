import React, { useState } from 'react';
import { DiAws, DiMongodb, DiPostgresql, DiPython } from 'react-icons/di';
import { SiFlask, SiMysql, SiPandas, SiReact, SiMicrosoftazure, SiAmazonaws,SiKubernetes,SiSolidity,SiGithub,SiGnubash,SiPowershell} from 'react-icons/si';
import { BsAndroid2, BsGit } from 'react-icons/bs';
import { BiLogoJavascript } from 'react-icons/bi';
import { FcLinux } from 'react-icons/fc';
import { FaDocker } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

interface Tool {
	index: number;
	name: string;
	icon: React.ReactElement;
}

const languageTools: Tool[] = [
	{
		index: 0,
		name: 'Python',
		icon: <DiPython className="m-4 text-6xl text-cyan-700" />,
	},
	{
		index: 3,
		name: 'Javascript',
		icon: <BiLogoJavascript className={'m-4 text-6xl text-yellow-500'} />,
	},
	{
		index: 5,
		name: 'Solidity',
		icon: <SiSolidity className={'m-4 text-6xl text-gray-500'} />,
	},
	{
		index: 1,
		name: 'Pandas',
		icon: <SiPandas className={'m-4 text-6xl'} />,

	},
	{
		index: 2,
		name: 'Flask',
		icon: <SiFlask className={'m-4 text-6xl text-blue-500'} />,
	},
	{
		index: 4,
		name: 'React',
		icon: <SiReact className={'m-4 text-6xl text-blue-500'} />,
	},
];

const databaseTools: Tool[] = [
	{
		index: 0,
		name: 'MongoDB',
		icon: <DiMongodb className={'m-4 text-6xl text-green-800'} />,
	},
	{
		index: 1,
		name: 'PostgreSQL',
		icon: <DiPostgresql className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 2,
		name: 'MySQL',
		icon: <SiMysql className={'m-4 text-6xl text-orange-600'} />,
	},
	{
		index: 3,
		name: 'AWS',
		icon: <SiAmazonaws className={'m-4 text-6xl'} />,
	},
	{
		index: 4,
		name: 'Azure',
		icon: <SiMicrosoftazure className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 5,
		name: 'Github',
		icon: <SiGithub className={'m-4 text-6xl text-black'} />,
	},
];

const otherTools = [
	{
		index: 0,
		name: 'Git',
		icon: <BsGit className={'m-4 text-6xl text-red-500'} />,
	},
	{
		index: 1,
		name: 'Linux',
		icon: <FcLinux className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 2,
		name: 'Docker',
		icon: <FaDocker className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 3,
		name: 'Kubernetes',
		icon: <SiKubernetes className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 4,
		name: 'Bash',
		icon: <SiGnubash className={'m-4 text-6xl text-gray-800'} />,
	},
	{
		index: 5,
		name: 'PowerShell',
		icon: <SiPowershell className={'m-4 text-6xl text-blue-600'} />,
	},

];

const columnHeaders = [
	{
		name: 'Languages & Frameworks',
		tools: languageTools,
	},
	{
		name: 'Databases & Cloud Platforms',
		tools: databaseTools,
	},
	{
		name: 'Other',
		tools: otherTools,
	},
];

export default function ToolBox() {
	const [tools, setTools] = useState(languageTools);

	return (
		<>
			<Element name="toolbox" className="relative" />
			<div className="mx-5 mb-48 overflow-hidden rounded-xl  border-2 border-cyan-300 bg-cyan-100 px-4 pb-5 pt-6 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white md:mx-10 md:px-8 md:pb-8">
				<h3 className="text-center text-2xl font-medium md:text-3xl">My Toolbox</h3>
				<div className="mt-6 flex flex-col sm:flex-row">
					<div className="mb-5 flex flex-row justify-between overflow-scroll rounded-xl bg-cyan-200 px-2 py-5 dark:bg-gray-700 sm:mb-0 sm:mr-8 sm:flex-col sm:overflow-visible md:px-5">
						{columnHeaders.map((columnHeader) => {
							return (
								<Fade bottom key={columnHeader.name}>
									<h4
										className="mb-2 cursor-pointer whitespace-nowrap rounded px-4 py-2 text-center hover:bg-cyan-500 hover:text-white dark:hover:bg-gray-600"
										onClick={() => {
											setTools([...columnHeader.tools]);
										}}
									>
										{columnHeader.name}
									</h4>
								</Fade>
							);
						})}
					</div>
					<div className="grid w-full grid-cols-2 rounded-xl bg-cyan-200 p-5 dark:bg-gray-700 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  xl:grid-cols-10">
						{tools.map((tool) => {
							return (
								<Fade right key={tool.index} cascade>
									<div className="m-auto">
										<a>
											<motion.button
												whileHover={{
													scale: 1.2,
													rotate: 360,
													transition: { duration: 2 },
												}}
												whileTap={{ scale: 0.9 }}
											>
												{tool.icon}
											</motion.button>
										</a>
										<p className="text-center text-sm">{tool.name}</p>
									</div>
								</Fade>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
