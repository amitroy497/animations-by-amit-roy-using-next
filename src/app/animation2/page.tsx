'use client';
import {
	Door,
	Front,
	HouseWrapper,
	Line,
	LineAdjust,
	Main,
	Roof,
	SecondTree,
	Section,
	Side,
	SideLine,
	Tree,
	Windows,
	WindowsLeft,
	WindowsRight,
} from './styled.components';

const House = () => {
	return (
		<HouseWrapper>
			<header>House</header>
			<Section>
				<Main className='main'>
					<WindowsRight className='windows_right' />
					<WindowsLeft />
					<LineAdjust />
					<Roof />
					<Front>
						<Line />
						<Door />
					</Front>
					<Side>
						<SideLine />
						<Windows />
					</Side>
					<Tree className='tree' />
					<SecondTree />
				</Main>
			</Section>
		</HouseWrapper>
	);
};

export default House;
