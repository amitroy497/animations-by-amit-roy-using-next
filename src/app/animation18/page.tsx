import Image from 'next/image';

import './styles.css';

const LamborginiMovingJumping = () => {
	return (
		<article className='flex justify-center items-center min-h-screen overflow-hidden fixed w-full'>
			<header className='z-20 text-black'>
				Car Moving & Jumping Animation
			</header>
			<section className='h-screen w-full absolute bg-[url("/background18.jpg")] bg-no-repeat'>
				<div className='h-screen w-full absolute top-[-144px] bg-[url("/trees18.png")] bg-no-repeat bg-cover' />
				<div className='track' />
				<div className='car'>
					<div className='wheel '>
						<audio autoPlay hidden loop>
							<source src='/sound.mp3' type='audio/mp3' />
						</audio>
						<Image
							src='/car_wheel_left.png'
							alt='Left Wheel'
							width={77}
							height={77}
							className='wheel1 relative top-[42px] left-[42px]'
						/>
					</div>
					<div className='wheel'>
						<Image
							src='/car_wheel_right.png'
							alt='Right Wheel'
							width={77}
							height={77}
							className='wheel2 relative top-[-39px] left-[225px]'
						/>
					</div>
				</div>
			</section>
		</article>
	);
};

export default LamborginiMovingJumping;
