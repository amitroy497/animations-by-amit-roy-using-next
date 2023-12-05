import './styles.css';

const EndlessRoad = () => {
	return (
		<article className='flex justify-center items-center min-h-screen bg-[radial-gradient(#2e2e2e, #333)]'>
			<header>Endless Road</header>
			<section className='flex justify-center items-center'>
				<div className='infinite'>
					<div className='shadow'></div>
				</div>
				<div className='box'>
					<div className='square'></div>
				</div>
			</section>
		</article>
	);
};

export default EndlessRoad;
