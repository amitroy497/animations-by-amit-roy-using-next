import './styles.css';

const GooeyEffect = () => {
	return (
		<article className='flex justify-center items-center bg-black min-h-screen'>
			<header>Gooey Effect</header>
			<section className='flex justify-center items-center w-[350px] h-[350px] bg-black border border-solid border-white blur-[10px] contrast-[30]'>
				<div className='ball1 absolute rounded-[50%] left-[40px] w-[50px] h-[50px] bg-[aqua]'></div>
				<div className='ball2 absolute rounded-[50%] left-1/2 translate-x-[-50%] w-[120px] h-[120px] bg-[aqua]'></div>
			</section>
		</article>
	);
};

export default GooeyEffect;
