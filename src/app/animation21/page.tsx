'use client';

import { useEffect, useRef } from 'react';

import { roboto } from '@/utils/fonts';

import SplitText from '../component/SplitText';

import './styles.css';

const AnimatedCircleMouseoverTextEffect = () => {
	const textRef = useRef<HTMLInputElement>(null);
	const alignTransformElement = () => {
		const element = document.querySelectorAll('span');
		for (let i = 0; i < element.length; i++) {
			element[i].style.transform = 'rotate(' + i * 18 + 'deg)';
		}
	};

	const mouseMove = (e: any) => {
		if (textRef.current !== null) {
			textRef.current.style.left = e.pageX + 'px';
			textRef.current.style.top = e.pageY + 'px';
		}
	};

	useEffect(() => {
		alignTransformElement();

		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);
	return (
		<article
			className={`${roboto.className} flex justify-center items-center min-h-screen bg-[#111]`}
		>
			<header>Animated Circle Text Effect on Mouse Over</header>
			<section className='relative flex justify-center items-center h-screen overflow-hidden w-full'>
				<h2
					className='absolute text-white text-[1.5em] select-none pointer-events-none'
					aria-label='Circle-Text-Effects'
					ref={textRef}
				>
					<SplitText copy='Circle-Text-Effects' />
				</h2>
			</section>
		</article>
	);
};

export default AnimatedCircleMouseoverTextEffect;
