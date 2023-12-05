'use client';
import { Button, Wrapper } from './styled.components';

const SwipeToExplore = () => {
	return (
		<Wrapper className="bg-black h-screen font-['poppins'] relative">
			<header>Swipe Animation</header>
			<Button className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white py-3 px-12 text-4xl font-semibold border-none whitespace-nowrap bg-left bg-clip-text bg-gradient-to-r from-[#4d4d4d] from-0% via-[#00ffff] via-10% at-[#00ffff] at-20% to-[#4d4d4d] to-30%'>
				Swipe To Explore
			</Button>
		</Wrapper>
	);
};

export default SwipeToExplore;
