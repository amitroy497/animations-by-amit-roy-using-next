'use client';
import { useEffect, useState } from 'react';

import './styles.css';

const RandomBackgroundColor = () => {
	const [bgColor, setBgColor] = useState<string>('#222');
	useEffect(() => {
		setInterval(() => {
			const r = Math.floor(Math.random() * 255);
			const g = Math.floor(Math.random() * 255);
			const b = Math.floor(Math.random() * 255);
			setBgColor(`rgba(${r},${g},${b})`);
		}, 1000);
	}, []);
	return (
		<article
			className='flex justify-center items-center min-h-screen'
			style={{ backgroundColor: `${bgColor}` }}
		>
			<header>Random Background Color Animation</header>
			<section className='box'>
				<div className='circle'></div>
			</section>
		</article>
	);
};

export default RandomBackgroundColor;
