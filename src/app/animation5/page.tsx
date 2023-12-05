'use client';

import { SpanButton } from './styled.components';

const ButtonRippleHover = () => {
	const mouseMove = (e: any) => {
		const btn = document.querySelector('.btn');
		if (btn instanceof HTMLElement) {
			const x = e.pageX - btn.offsetLeft;
			const y = e.pageY - btn.offsetTop;
			btn.style.setProperty('--x', x + 'px');
			btn.style.setProperty('--y', y + 'px');
		}
	};
	return (
		<article className='flex justify-center items-center bg-[#222] min-h-screen'>
			<header>Button Hover Effect</header>
			<section>
				<div
					className='btn relative inline-flex px-[30px] py-[10px] bg-[#363636] text-white overflow-hidden no-underline tracking-[0.063rem] cursor-pointer'
					onMouseMove={(e) => mouseMove(e)}
				>
					<SpanButton className='relative z-10 text-[25px] font-bold'>
						Button
					</SpanButton>
				</div>
			</section>
		</article>
	);
};

export default ButtonRippleHover;
