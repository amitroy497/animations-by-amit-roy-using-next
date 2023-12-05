'use client';

import { Section } from './styled.components';

const WaterDrops = () => {
	return (
		<article className='flex justify-center items-center min-h-screen bg-[#edeeed]'>
			<header className='text-black'>Water Droplets</header>
			<Section className='relative flex items-center justify-center'>
				<div className='absolute w-[150px] h-[150px] bg-transparent'></div>
				<div className='absolute w-[150px] h-[150px] bg-transparent'></div>
				<div className='absolute w-[150px] h-[150px] bg-transparent'></div>
				<div className='absolute w-[150px] h-[150px] bg-transparent'></div>
			</Section>
		</article>
	);
};

export default WaterDrops;
