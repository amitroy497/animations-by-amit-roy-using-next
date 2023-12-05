import styled from 'styled-components';

export const Section = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: url(/bg2.jpg) no-repeat;
	background-position-x: center;
	background-size: cover;
	animation: animateBg 50s linear infinite;

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4px;
		height: 4px;
		background: #fff;
		border-radius: 50%;
		box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
			0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
		animation: animate6 3s linear infinite;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 300px;
			height: 1px;
			background: linear-gradient(90deg, #fff, transparent);
		}

		&:first-child {
			top: 0;
			right: 0;
			left: initial;
			animation-delay: 0;
			animation-duration: 1s;
		}
		&:nth-child(2) {
			top: 0;
			right: 80px;
			left: initial;
			animation-delay: 0.2s;
			animation-duration: 3s;
		}
		&:nth-child(3) {
			top: 80px;
			right: 0;
			left: initial;
			animation-delay: 0.4s;
			animation-duration: 2s;
		}
		&:nth-child(4) {
			top: 0;
			right: 180px;
			left: initial;
			animation-delay: 0.6s;
			animation-duration: 1.5s;
		}
		&:nth-child(5) {
			top: 0;
			right: 400px;
			left: initial;
			animation-delay: 0.8s;
			animation-duration: 2.5s;
		}
		&:nth-child(6) {
			top: 0;
			right: 600px;
			left: initial;
			animation-delay: 1s;
			animation-duration: 3s;
		}
		&:nth-child(7) {
			top: 300px;
			right: 0;
			left: initial;
			animation-delay: 1.2s;
			animation-duration: 1.75s;
		}
		&:nth-child(8) {
			top: 0;
			right: 700px;
			left: initial;
			animation-delay: 1.4s;
			animation-duration: 1.25s;
		}
		&:nth-child(9) {
			top: 0;
			right: 1000px;
			left: initial;
			animation-delay: 0.75s;
			animation-duration: 2.25s;
		}
		&:last-child {
			top: 0;
			right: 450px;
			left: initial;
			animation-delay: 2.75s;
			animation-duration: 2.25s;
		}
	}
	@keyframes animateBg {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}
	@keyframes animate6 {
		0% {
			transform: rotate(315deg) translateX(0);
			opacity: 1;
		}
		70% {
			opacity: 1;
		}
		100% {
			transform: rotate(315deg) translateX(-1000px);
			opacity: 0;
		}
	}
`;
