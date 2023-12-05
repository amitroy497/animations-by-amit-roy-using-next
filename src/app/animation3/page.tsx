const ImageComparisonSlider = () => {
	return (
		<article className='flex justify-center items-center min-h-screen bg-[#070c15]'>
			<header>Image Comparison Slider</header>
			<section className='relative w-[442px] h-[500px]'>
				<textarea
					className="absolute top-0 left-0 w-full max-w-full h-full resize-none outline-none border-none opacity-40 grayscale bg-[url('/captainMarvel.png')]"
					readOnly
				></textarea>
				<textarea
					className="absolute top-0 left-0 w-[150px] max-w-full h-full resize-x overflow-auto outline-none border-r-2 border-solid border-white opacity-100 grayscale-0 bg-[url('/captainMarvel.png')]"
					readOnly
				></textarea>
			</section>
		</article>
	);
};

export default ImageComparisonSlider;
