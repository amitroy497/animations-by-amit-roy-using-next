import styled from 'styled-components';

export const Wrapper = styled.article`
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;
export const Button = styled.button`
	background-position: 0;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-text-size-adjust: none;
	animation: swipe 3s infinite linear;
	animation-fill-mode: forwards;

	@keyframes swipe {
		0% {
			background-position: 0;
		}
		60% {
			background-position: 200px;
		}
		100% {
			background-position: 400px;
		}
	}
`;
