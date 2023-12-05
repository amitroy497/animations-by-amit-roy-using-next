import Link from 'next/link';

import { allAnimationLinks } from '@/utils/AllAnimationLink';

const Home = () => {
	return (
		<>
			<h1 className='text-green-600 font-black text-6xl text-center mt-10'>
				Animations
			</h1>
			<div className='font-medium py-20 flex flex-wrap justify-start'>
				{allAnimationLinks.links.map((item) => (
					<Link
						key={item.id}
						href={item.href}
						className='px-3 py-3 mx-3 my-3 bg-gray-200 rounded-full text-black hover:scale-110 flex justify-center hover:text-white hover:bg-green-600'
					>
						{item.id}. {item.title}
					</Link>
				))}
			</div>
		</>
	);
};

export default Home;
