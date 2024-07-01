import { AiOutlineLink, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import Link from 'next/link';

const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

export default function ContactMe() {
	const form = useRef<HTMLFormElement | null>(null);
	const [disable, setDisable] = useState<boolean>(false);
	const [status, setStatus] = useState<string>('Submit');

	const submitForm = (e: FormEvent) => {
		e.preventDefault();

		if (validateEmail(form.current?.from_email.value) === null) {
			setStatus('Invalid Email!');
			setTimeout(() => {
				setStatus('Submit');
			}, 3000);
			return;
		}

		setDisable(true);
		setStatus('Sending...');

		if (form.current === null) {
			return;
		}

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					setStatus('Sent!');
				},
				(error) => {
					setStatus('Error!');
					setTimeout(() => {
						setStatus('Submit');
					}, 3000);

					setDisable(false);
				}
			);
	};

	return (
		<div className="flex flex-col items-center justify-center border-t-2 border-cyan-400 bg-cyan-100 py-5 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white sm:flex-row">
					<h1 className='mx-5 '>
						- Source code: ChiragAgg5k
					</h1>
					<h1 className='mx-5 '>
						- Modifications/Addons: Mohammed Aldaqaq
					</h1>
		</div>
	);
}
