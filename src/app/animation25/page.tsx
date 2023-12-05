'use client';

import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

import { poppins } from '@/utils/fonts';

import './styles.css';

interface CustomCSS extends CSSProperties {
	'--i': string;
	'--clr': string;
}

const AnalogClock: FC = () => {
	const hrRef = useRef<HTMLInputElement>(null);
	const mnRef = useRef<HTMLInputElement>(null);
	const scRef = useRef<HTMLInputElement>(null);

	const [digiTime, setDigiTime] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
		ampm: 'AM',
	});

	useEffect(() => {
		setInterval(() => {
			// Analog Clock
			const day = new Date();
			const hh = day.getHours() * 30;
			const mm = day.getMinutes() * 6;
			const ss = day.getSeconds() * 6;
			if (hrRef.current !== null) {
				hrRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
			}
			if (mnRef.current !== null) {
				mnRef.current.style.transform = `rotateZ(${mm}deg)`;
			}
			if (scRef.current !== null) {
				scRef.current.style.transform = `rotateZ(${ss}deg)`;
			}

			// Digital Clock
			let h = new Date().getHours();
			let m = new Date().getMinutes();
			let s = new Date().getSeconds();

			const am = h >= 12 ? 'PM' : 'AM';

			// Convert 24 hours clock to 12 hours clock

			if (h > 12) {
				h = h - 12;
			}

			//Add zero before single digit
			const ho = (h < 10 ? '0' + h : h).toString();
			const mi = (m < 10 ? '0' + m : m).toString();
			const se = (s < 10 ? '0' + s : s).toString();

			setDigiTime({
				hours: ho,
				minutes: mi,
				seconds: se,
				ampm: am,
			});
		}, 1000);
	}, []);
	return (
		<article
			className={`${poppins.className} flex justify-center items-center min-h-screen bg-[#acbcca]`}
		>
			<header>Analog Clock</header>
			<section className='clock'>
				{/* Analog Clock */}
				<div className='numbers'>
					<div
						className='circle'
						id='sec'
						ref={scRef}
						style={{ '--clr': '#04fc43' } as CustomCSS}
					>
						<i />
					</div>
					<div
						className='circle'
						id='min'
						ref={mnRef}
						style={{ '--clr': '#fee800' } as CustomCSS}
					>
						<i />
					</div>
					<div
						className='circle'
						id='hrs'
						ref={hrRef}
						style={{ '--clr': '#ff2972' } as CustomCSS}
					>
						<i />
					</div>
					<span style={{ '--i': '0' } as CustomCSS}>
						<b>12</b>
					</span>
					<span style={{ '--i': '1' } as CustomCSS}>
						<b>1</b>
					</span>
					<span style={{ '--i': '2' } as CustomCSS}>
						<b>2</b>
					</span>
					<span style={{ '--i': '3' } as CustomCSS}>
						<b>3</b>
					</span>
					<span style={{ '--i': '4' } as CustomCSS}>
						<b>4</b>
					</span>
					<span style={{ '--i': '5' } as CustomCSS}>
						<b>5</b>
					</span>
					<span style={{ '--i': '6' } as CustomCSS}>
						<b>6</b>
					</span>
					<span style={{ '--i': '7' } as CustomCSS}>
						<b>7</b>
					</span>
					<span style={{ '--i': '8' } as CustomCSS}>
						<b>8</b>
					</span>
					<span style={{ '--i': '9' } as CustomCSS}>
						<b>9</b>
					</span>
					<span style={{ '--i': '10' } as CustomCSS}>
						<b>10</b>
					</span>
					<span style={{ '--i': '11' } as CustomCSS}>
						<b>11</b>
					</span>
				</div>
				{/* /Digital Clock */}
				<div id='time'>
					<div id='hour' style={{ '--clr': '#ff2972' } as CustomCSS}>
						{digiTime.hours}
					</div>
					<div id='minutes' style={{ '--clr': '#fee800' } as CustomCSS}>
						{digiTime.minutes}
					</div>
					<div id='seconds' style={{ '--clr': '#04fc43' } as CustomCSS}>
						{digiTime.seconds}
					</div>
					<div id='ampm' style={{ '--clr': '#fff' } as CustomCSS}>
						{digiTime.ampm}
					</div>
				</div>
			</section>
		</article>
	);
};

export default AnalogClock;
