import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	min-height: 100vh;
	background: #031321;
	font-family: consolas;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		position: relative;
		display: inline-block;
		padding: 15px 30px;
		color: #2196f3;
		text-transform: uppercase;
		letter-spacing: 4px;
		font-size: 24px;
		overflow: hidden;
		transition: 0.2s;
		cursor: pointer;

		&:hover {
			color: #255784;
			background: #2196f3;
			box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
			transition-delay: 1s;
			font-weight: bold;
		}

		span {
			position: absolute;
			display: block;
		}

		span:first-child {
			top: 0;
			left: -100%;
			width: 100%;
			height: 2px;
			background: linear-gradient(90deg, transparent, #2196f3);
		}

		&:hover span:first-child {
			left: 100%;
			transition: 1s;
		}
		span:nth-child(3) {
			bottom: 0;
			right: -100%;
			width: 100%;
			height: 2px;
			background: linear-gradient(270deg, transparent, #2196f3);
		}

		&:hover span:nth-child(3) {
			right: 100%;
			transition: 1s;
			transition-delay: 0.5s;
		}

		span:nth-child(2) {
			top: -100%;
			right: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(180deg, transparent, #2196f3);
		}

		&:hover span:nth-child(2) {
			top: 100%;
			transition: 1s;
			transition-delay: 0.25s;
		}

		span:nth-child(4) {
			bottom: -100%;
			left: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(360deg, transparent, #2196f3);
		}

		&:hover span:nth-child(4) {
			bottom: 100%;
			transition: 1s;
			transition-delay: 0.75s;
		}
	}
`;
