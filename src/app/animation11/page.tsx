'use client';

import { useEffect, useRef, useState } from 'react';

import { Side } from './styled.components';

const SplitVideo = () => {
	const sideRef1 = useRef<HTMLInputElement>(null);
	const sideRef2 = useRef<HTMLInputElement>(null);
	const [showHeader, setShowHeader] = useState<boolean>(true);

	const handleScroll = () => {
		if (sideRef1.current !== null) {
			sideRef1.current.style.left = -window.pageYOffset + 'px';
			sideRef1.current.style.left === '0px'
				? setShowHeader(true)
				: setShowHeader(false);
		}
		if (sideRef2.current !== null) {
			sideRef2.current.style.left = window.pageYOffset + 'px';
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<article
			className='min-h-[200vh] overflow-hidden bg-[#222]'
			id='scrollArticle'
		>
			{showHeader && <header>Split Video on Page Scroll</header>}
			<section className='fixed top-0 left-0 w-full h-full pointer-events-none'>
				<Side
					className='absolute top-0 left-0 w-full h-full'
					id='side1'
					ref={sideRef1}
				>
					<video
						className='absolute top-0 left-0 w-full h-full object-cover'
						autoPlay
						loop
						muted
					>
						<source src='/splitVideo.mp4' type='video/mp4' />
					</video>
				</Side>
				<Side
					className='absolute top-0 left-0 w-full h-full'
					id='side2'
					ref={sideRef2}
				>
					<video
						className='absolute top-0 left-0 w-full h-full object-cover'
						autoPlay
						loop
						muted
					>
						<source src='/splitVideo.mp4' type='video/mp4' />
					</video>
				</Side>
			</section>
			<div className='text-white py-[50px] px-[50px] mt-[130vh] '>
				<span className='block my-0 mx-auto w-1/2'>
					<h2 className='text-5xl'>Split Video on Page Scroll</h2>
					<br />
					<p className='text-[1.2rem]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas
						delectus, in non quia sunt repellendus possimus maxime. Voluptas a
						aspernatur enim, dolor incidunt necessitatibus temporibus corrupti
						ad vel perspiciatis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Eaque suscipit totam perferendis facere magni
						assumenda sed, minima alias aliquam a possimus quisquam similique
						incidunt unde rem? Sed natus asperiores commodi? Lorem ipsum dolor
						sit amet, consectetur adipisicing elit. Veritatis, animi officiis
						sapiente architecto ipsam temporibus magnam libero porro
						necessitatibus eligendi sed voluptatibus earum harum itaque
						voluptatum distinctio tenetur incidunt laboriosam. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Itaque quas delectus, in non
						quia sunt repellendus possimus maxime. Voluptas a aspernatur enim,
						dolor incidunt necessitatibus temporibus corrupti ad vel
						perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Eaque suscipit totam perferendis facere magni assumenda sed,
						minima alias aliquam a possimus quisquam similique incidunt unde
						rem? Sed natus asperiores commodi? Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Veritatis, animi officiis sapiente
						architecto ipsam temporibus magnam libero porro necessitatibus
						eligendi sed voluptatibus earum harum itaque voluptatum distinctio
						tenetur incidunt laboriosam.
					</p>
				</span>
			</div>
		</article>
	);
};

export default SplitVideo;
