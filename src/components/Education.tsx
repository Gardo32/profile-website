import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Education
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4 ">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2022-2025</p>
								<p className="my-1 font-medium sm:text-xl">Cloud Computing Diploma</p>
								<p className="my-1 text-sm font-medium">Nasser Vocational Training Center</p>
								<p className="text-sm">CGPA: 94.84</p>
							</div>
							<Image
								src="/nvtc.png"
								alt="NVTC Logo"
								width={100}
								height={100}
								title="NVTC"
								onClick={() => {
									window.open('https://www.nvtc.edu.bh/', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2022-2025</p>
								<p className="my-1 font-medium sm:text-xl">Pearson BTEC International Level 3 Diploma in Information Technology</p>
								<p className="my-1 text-sm font-medium">Training Body: Nasser Vocational Training Center  /  Awarding Body: Pearson BTEC </p>
								<p className="text-sm">CGPA: P (Pass)</p>
							</div>
							<Image
								src="/pearson.png"
								alt="Pearson Logo"
								width={100}
								height={100}
								title="Pearson"
								onClick={() => {
									window.open('https://qualifications.pearson.com/content/dam/pdf/btec-international-level-3/it/specification-and-sample-assessments/btec-international-level-3-it-specification.pdf', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
