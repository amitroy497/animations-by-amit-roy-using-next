import { poppins } from '@/utils/fonts';

import './styles.css';

const TextDistortion = () => {
	return (
		<article
			className={`flex justify-center items-center min-h-screen bg-black ${poppins}`}
		>
			<header>Particles Distortion</header>
			<section className='my-0 mx-auto w-1/2 relative'>
				<video
					className='absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none mix-blend-screen'
					autoPlay
					loop
					muted
				>
					<source src='/particles.mp4' type='video/mp4' />
				</video>
				<h2 className='relative mt-[20px] text-[4rem] font-black text-white z-10 overflow-hidden text-center'>
					<span className='text-[#ff022c]'>P</span>articles Di<span>st</span>
					ortion
				</h2>
			</section>
		</article>
	);
};

export default TextDistortion;
