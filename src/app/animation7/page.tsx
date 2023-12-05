'use client';

import { Section } from './styled.components';

const ButtonRippleEffectOnHover = () => {
	return (
		<article className='flex justify-center relative min-h-screen'>
			<header className='text-black'>Button Ripple Hover</header>
			<Section>
				<button>Pause</button>
			</Section>
		</article>
	);
};

export default ButtonRippleEffectOnHover;
