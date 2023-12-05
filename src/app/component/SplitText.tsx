import { FC } from 'react';

interface SplitTextProps {
	copy: string;
}

const SplitText: FC<SplitTextProps> = ({ copy }) => {
	return (
		<span
			className='inline-block absolute uppercase origin-[0px_100px] top-[-100px]'
			aria-label={copy}
		>
			{copy.split('').map((char, index) => (
				<span aria-hidden='true' key={index}>
					{char}
				</span>
			))}
		</span>
	);
};

export default SplitText;
