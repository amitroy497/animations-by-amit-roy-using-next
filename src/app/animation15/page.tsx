import './styles.css';

const RotatingCube = () => {
	return (
		<article className='flex items-center justify-center min-h-screen'>
			<header>Rotating Cube</header>
			<section>
				<div className='cube'>
					<div className='surface surface1 bg-[#f46666]'></div>
					<div className='surface surface2 bg-[#9b67ef]'></div>
					<div className='surface surface3 bg-[#77f4ec]'></div>
					<div className='surface surface4 bg-[#9aff68]'></div>
				</div>
			</section>
		</article>
	);
};

export default RotatingCube;
