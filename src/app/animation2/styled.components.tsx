import styled from 'styled-components';

export const HouseWrapper = styled.article`
	background: #000;
	height: 100vh;
	font-family: poppins;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Section = styled.section`
	position: relative;
	width: 700px;
	height: 350px;
	border-bottom: 8px solid #175117;
`;
export const Main = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 400px;
	height: 200px;
	background: #fff;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 10px;
		background: rgba(0, 0, 0, 0.1);
	}
`;
export const Roof = styled.div`
	position: absolute;
	width: 100%;
	height: 100px;
	top: -100px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 60%;
		height: 100%;
		background: #257582;
		transform: skewX(330deg);
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 60%;
		height: 100%;
		background: #257582;
		transform: skewX(30deg);
	}
`;
export const Front = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 180px;
	height: 180px;
	background: #f1f1f1;

	&::before {
		content: '';
		position: absolute;
		left: 50%;
		top: -64px;
		width: 126px;
		height: 126px;
		background: #f1f1f1;
		transform: translateX(-50%) rotate(45deg);
		border-top: 4px solid #222;
		border-left: 4px solid #222;
	}

	&::after {
		content: '';
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		width: 120px;
		height: 60px;
		background: #333;
		background-image: linear-gradient(
				to right,
				transparent 10%,
				transparent 90%,
				#333 90%
			),
			linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
		background-size: 10px 15px;
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		border: 4px solid #333;
	}
`;
export const Door = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 60px;
	height: 80px;
	background: #4d2418;
	border-top-left-radius: 60px;
	border-top-right-radius: 60px;

	&::before {
		content: '';
		position: absolute;
		top: 30px;
		left: -45px;
		width: 30px;
		height: 30px;
		background: #333;
		background-image: linear-gradient(
				to right,
				transparent 10%,
				transparent 90%,
				#333 90%
			),
			linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
		background-size: 10px 10px;
		border-top: 5px solid #333;
		border-bottom: 5px solid #333;
	}

	&::after {
		content: '';
		position: absolute;
		top: 30px;
		right: -45px;
		width: 30px;
		height: 30px;
		background: #333;
		background-image: linear-gradient(
				to right,
				transparent 10%,
				transparent 90%,
				#333 90%
			),
			linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
		background-size: 10px 10px;
		border-top: 5px solid #333;
		border-bottom: 5px solid #333;
	}
`;
export const Line = styled.div`
	position: absolute;
	top: 38%;
	width: 100%;
	height: 12px;
	width: 100%;
	height: 12px;
	border-top: 4px solid #257582;
	border-bottom: 4px solid #257582;
`;
export const LineAdjust = styled.div`
	position: absolute;
	top: 45%;
	width: 100%;
	height: 12px;
	width: 100%;
	height: 12px;
	border-top: 4px solid #257582;
	border-bottom: 4px solid #257582;
`;
export const WindowsRight = styled.div`
	position: absolute;
	top: 20px;
	right: 30px;
	width: 60px;
	height: 50px;
	background: #333;
	background-image: linear-gradient(
			to right,
			transparent 10%,
			transparent 90%,
			#333 90%
		),
		linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
	background-size: 10px 10px;
	border-top: 5px solid #333;
	border-bottom: 5px solid #333;

	&::before {
		content: '';
		position: absolute;
		top: 90px;
		width: 50px;
		height: 60px;
		background: #333;
		background-image: linear-gradient(
				to right,
				transparent 10%,
				transparent 90%,
				#333 90%
			),
			linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
		background-size: 10px 10px;
		border: 2px solid #333;
		border-bottom: 5px solid #333;
		border-top-left-radius: 60px;
		border-top-right-radius: 60px;
	}
`;
export const WindowsLeft = styled.div`
	position: absolute;
	top: 20px;
	left: 30px;
	width: 60px;
	height: 50px;
	background: #333;
	background-image: linear-gradient(
			to right,
			transparent 10%,
			transparent 90%,
			#333 90%
		),
		linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
	background-size: 10px 10px;
	border-top: 5px solid #333;
	border-bottom: 5px solid #333;

	&::before {
		content: '';
		position: absolute;
		top: 90px;
		width: 50px;
		height: 60px;
		background: #333;
		background-image: linear-gradient(
				to right,
				transparent 10%,
				transparent 90%,
				#333 90%
			),
			linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
		background-size: 10px 10px;
		border: 2px solid #333;
		border-bottom: 5px solid #333;
		border-top-left-radius: 60px;
		border-top-right-radius: 60px;
	}
`;
export const Side = styled.div`
	position: absolute;
	bottom: 0;
	left: -120px;
	width: 140px;
	height: 140px;
	background: #f1f1f1;

	&::before {
		content: '';
		position: absolute;
		top: -52px;
		left: 50%;
		width: 100px;
		height: 100px;
		background: #f1f1f1;
		transform: translateX(-50%) rotate(45deg);
		border-top: 4px solid #222;
		border-left: 4px solid #222;
	}

	&::after {
		content: '';
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		width: 70px;
		height: 40px;
		background: #333;
		background-image: linear-gradient(
				to right,
				transparent 10%,
				transparent 90%,
				#333 90%
			),
			linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
		background-size: 10px 10px;
		border: 2px solid #333;
		border-top-left-radius: 60px;
		border-top-right-radius: 60px;
	}
`;
export const SideLine = styled.div`
	position: absolute;
	top: 38%;
	width: 100%;
	height: 12px;
	width: 100%;
	height: 12px;
	border-top: 4px solid #257582;
	border-bottom: 4px solid #257582;
	transform: translateY(-16px);
`;
export const Windows = styled.div`
	position: absolute;
	top: 60px;
	left: 30px;
	width: 80px;
	height: 70px;
	background: #333;
	background-image: linear-gradient(
			to right,
			transparent 10%,
			transparent 90%,
			#333 90%
		),
		linear-gradient(to bottom, transparent 10%, #6d6d7d 10%, #6d6d7d 90%);
	background-size: 10px 10px;
	border-top: 5px solid #333;
	border-bottom: 5px solid #333;
`;
export const Tree = styled.div`
	position: absolute;
	top: -10px;
	right: -120px;
	width: 120px;
	height: 120px;
	background: #94ab38;
	border-top-left-radius: 100px;
	border-bottom-right-radius: 100px;
	transform: rotate(315deg);

	&::before {
		content: '';
		position: absolute;
		top: 85px;
		left: -20px;
		width: 10px;
		height: 100px;
		background: #3c2703;
		transform: rotate(45deg);
	}
`;
export const SecondTree = styled.div`
	position: absolute;
	top: -55px;
	right: -70px;
	width: 120px;
	height: 120px;
	background: #7b921f;
	border-top-left-radius: 100px;
	border-bottom-right-radius: 100px;
	transform: rotate(315deg) scale(1.25);

	&::before {
		content: '';
		position: absolute;
		top: 85px;
		left: -20px;
		width: 10px;
		height: 100px;
		background: #3c2703;
		transform: rotate(45deg);
	}
`;
