'use client';

import { Section } from './styled.components';

const LoaderAnimation = () => {
	return (
		<article className='flex justify-center items-center min-h-screen bg-[#102626]'>
			<header>Loader Animation</header>
			<Section>
				<div>
					<span></span>
				</div>
			</Section>
		</article>
	);
};

export default LoaderAnimation;
