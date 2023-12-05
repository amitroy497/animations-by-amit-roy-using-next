import styled from 'styled-components';

export const BoxDiv = styled.div`
	width: 500px;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px 0;

	span {
		position: absolute;
		box-sizing: border-box;
		border: 2px solid #fff;
		border-radius: 50%;
		animation: animate8 5s linear infinite;
		animation-delay: calc(0.5s * var(--i));
	}

	&:last-child span {
		border: none;
		background: rgba(0, 255, 0, 0.25);
	}

	@keyframes animate8 {
		0% {
			width: 0;
			height: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			width: 500px;
			height: 500px;
			opacity: 0;
		}
	}
`;
