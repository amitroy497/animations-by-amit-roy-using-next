'use client';

import { CSSProperties, FC } from 'react';

import { BoxDiv } from './styled.components';

interface CustomCSS extends CSSProperties {
	'--i': string;
}
const RippleAnimation: FC = () => {
	return (
		<article className='flex justify-center items-center min-h-screen bg-[#111]'>
			<header>Ripple Animation</header>
			<section className='flex justify-center items-center relative'>
				<BoxDiv>
					<span style={{ '--i': '1' } as CustomCSS}></span>
					<span style={{ '--i': '2' } as CustomCSS}></span>
					<span style={{ '--i': '3' } as CustomCSS}></span>
					<span style={{ '--i': '4' } as CustomCSS}></span>
					<span style={{ '--i': '5' } as CustomCSS}></span>
					<span style={{ '--i': '6' } as CustomCSS}></span>
					<span style={{ '--i': '7' } as CustomCSS}></span>
					<span style={{ '--i': '8' } as CustomCSS}></span>
					<span style={{ '--i': '9' } as CustomCSS}></span>
					<span style={{ '--i': '10' } as CustomCSS}></span>
				</BoxDiv>
				<div>
					<span style={{ '--i': '1' } as CustomCSS}></span>
					<span style={{ '--i': '2' } as CustomCSS}></span>
					<span style={{ '--i': '3' } as CustomCSS}></span>
					<span style={{ '--i': '4' } as CustomCSS}></span>
					<span style={{ '--i': '5' } as CustomCSS}></span>
					<span style={{ '--i': '6' } as CustomCSS}></span>
					<span style={{ '--i': '7' } as CustomCSS}></span>
					<span style={{ '--i': '8' } as CustomCSS}></span>
					<span style={{ '--i': '9' } as CustomCSS}></span>
					<span style={{ '--i': '10' } as CustomCSS}></span>
				</div>
			</section>
		</article>
	);
};

export default RippleAnimation;
