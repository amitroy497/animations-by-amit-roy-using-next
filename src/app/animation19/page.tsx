import { poppins } from '@/utils/fonts';

import './styles.css';

const WaterWaveText = () => {
	return (
		<article
			className={`${poppins.className} flex justify-center items-center`}
		>
			<header className='z-10'>Wave Animation Text</header>
			<section className='relative w-full h-screen flex justify-center items-center bg-[#183954]'>
				<h2 className='text-[26vw] absolute text-white'>Water</h2>
				<h2 className='text-[26vw] absolute text-[#2196f3] opacity-50'>
					Water
				</h2>
				<h2 className='text-[26vw] absolute text-[#2196f3] opacity-50'>
					Water
				</h2>
				<h2 className='text-[26vw] absolute text-[#2196f3]'>Water</h2>
			</section>
		</article>
	);
};

export default WaterWaveText;
