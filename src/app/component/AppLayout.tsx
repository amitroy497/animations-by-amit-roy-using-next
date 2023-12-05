'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

interface AppLayoutProps {
	child: ReactNode;
}
const AppLayout: FC<AppLayoutProps> = ({ child }) => {
	const pathName = usePathname();
	const [animationNumber, setAnimationNumber] = useState<string>('');

	useEffect(() => {
		setAnimationNumber(pathName.substring(10));
	}, [pathName]);

	return (
		<div>
			{pathName !== '/' && (
				<Link
					href={
						pathName === '/animation1'
							? '/'
							: `/animation${Number(animationNumber) - 1}`
					}
					className='flex items-center top-2 left-2 cursor-pointer text-red-700 font-extrabold fixed z-10 text-3xl'
				>
					<MdKeyboardDoubleArrowLeft /> Previous
				</Link>
			)}
			{child}
			{pathName !== '/' && (
				<Link
					href={`/animation${Number(animationNumber) + 1}`}
					className='flex items-center top-2 right-2 cursor-pointer text-red-700 font-extrabold fixed z-10 text-3xl'
				>
					Next <MdKeyboardDoubleArrowRight />
				</Link>
			)}
		</div>
	);
};

export default AppLayout;
