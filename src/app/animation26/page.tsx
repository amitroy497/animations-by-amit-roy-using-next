import { CSSProperties } from 'react';
import Image from 'next/image';

import { poppins } from '@/utils/fonts';

import './styles.css';

interface CustomCSS extends CSSProperties {
	'--clr': string;
}

const ThreeDimensionCardHoverEffects = () => {
	return (
		<article
			className={`${poppins.className} flex justify-center items-center min-h-screen bg-[#111]`}
		>
			<header>3D Card Hover Efffects</header>
			<section>
				<div className='card' style={{ '--clr': '#e9a643' } as CustomCSS}>
					<div className='imgBx'>
						<Image
							className='oldImage'
							src='/old.jpg'
							alt='old'
							width={300}
							height={400}
						/>
					</div>
					<Image
						className='c3d'
						src='/old3d.png'
						alt='old3d'
						width={300}
						height={400}
					/>
					<h2>Barbarians</h2>
				</div>
				<div className='card' style={{ '--clr': '#ad4a9d' } as CustomCSS}>
					<div className='imgBx'>
						<Image
							className='oldImage'
							src='/archer.jpg'
							alt='archer'
							width={300}
							height={400}
						/>
					</div>
					<Image
						className='c3d'
						src='/archer3d.png'
						alt='archer3d'
						width={300}
						height={400}
					/>
					<h2>Archers</h2>
				</div>
			</section>
		</article>
	);
};

export default ThreeDimensionCardHoverEffects;
