import styled from 'styled-components';

export const Section = styled.section`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #fcfc9c;

	button {
		position: relative;
		top: 50%;
		left: 50%;
		width: 84px;
		height: 84px;
		color: #fff;
		background: #00a002;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
		font-size: 20px;
		cursor: pointer;
		outline: none;
		border: none;
		transition: all 0.2s ease;

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 2px;
			left: 2px;
			width: 80px;
			height: 80px;
			border-radius: 50%;
			border: 2px solid rgba(0, 0, 0, 0.5);
			transform-origin: center;
			z-index: -1;
		}

		&:hover::before,
		&:hover::after {
			border-color: transparent;
			filter: blur(2px);
		}

		&:hover::before {
			transform: scale(4);
			transition: 1s transform ease, 2s blur ease, 0.8s border-color ease;
		}

		&:hover::after {
			transform: scale(3);
			transition: 1s transform ease, 2s blur ease, 0.8s border-color ease;
		}
	}
`;
