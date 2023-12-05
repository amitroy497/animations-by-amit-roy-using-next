import { CSSProperties, FC } from 'react';

import './styles.css';

interface CustomCSS extends CSSProperties {
	'--i': string;
}

const HotTeaCup: FC = () => {
	return (
		<article className='flex justify-center items-center min-h-screen bg-[#607d8b]'>
			<header>Animated Hot Cup of Tea</header>
			<section className='relative top-[50px]'>
				<div className='plate'></div>
				<div className='cup'>
					<div className='top'>
						<div className='vapour'>
							<span style={{ '--i': '1' } as CustomCSS}></span>
							<span style={{ '--i': '3' } as CustomCSS}></span>
							<span style={{ '--i': '16' } as CustomCSS}></span>
							<span style={{ '--i': '5' } as CustomCSS}></span>
							<span style={{ '--i': '13' } as CustomCSS}></span>
							<span style={{ '--i': '20' } as CustomCSS}></span>
							<span style={{ '--i': '6' } as CustomCSS}></span>
							<span style={{ '--i': '7' } as CustomCSS}></span>
							<span style={{ '--i': '10' } as CustomCSS}></span>
							<span style={{ '--i': '8' } as CustomCSS}></span>
							<span style={{ '--i': '17' } as CustomCSS}></span>
							<span style={{ '--i': '11' } as CustomCSS}></span>
							<span style={{ '--i': '12' } as CustomCSS}></span>
							<span style={{ '--i': '14' } as CustomCSS}></span>
							<span style={{ '--i': '2' } as CustomCSS}></span>
							<span style={{ '--i': '18' } as CustomCSS}></span>
							<span style={{ '--i': '9' } as CustomCSS}></span>
							<span style={{ '--i': '15' } as CustomCSS}></span>
							<span style={{ '--i': '4' } as CustomCSS}></span>
							<span style={{ '--i': '19' } as CustomCSS}></span>
						</div>
						<div className='circle'>
							<div className='tea' />
						</div>
					</div>
					<div className='handle' />
				</div>
			</section>
		</article>
	);
};

export default HotTeaCup;
