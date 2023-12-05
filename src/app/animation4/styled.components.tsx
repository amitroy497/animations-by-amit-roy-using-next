import styled from 'styled-components';

export const Section = styled.section`
	div {
		border-radius: 57% 43% 37% 63% / 45% 52% 48% 55%;
		box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
			15px 25px 10px rgba(0, 0, 0, 0.1), 15px 20px 20px rgba(0, 0, 0, 0.05),
			inset -10px -10px 15px rgba(255, 255, 255, 0.9);
	}
	div::before {
		content: '';
		position: absolute;
		top: 25px;
		left: 35px;
		background: #fff;
		width: 20px;
		height: 20px;
		border-radius: 25% 75% 37% 63% / 40% 43% 57% 60%;
	}
	div::after {
		content: '';
		position: absolute;
		top: 25px;
		left: 65px;
		background: #fff;
		width: 10px;
		height: 10px;
		border-radius: 57% 43% 37% 63% / 48% 37% 63% 52%;
	}
	div:nth-child(2) {
		transform: scale(0.5) translate(-200px, 180px);
		border-radius: 64% 36% 42% 58% / 42% 37% 63% 58%;
	}
	div:nth-child(3) {
		transform: scale(0.5) translate(280px, 10px);
		border-radius: 49% 51% 42% 58% / 56% 47% 53% 44%;
	}
	div:last-child {
		transform: scale(0.35) translate(120px, -350px);
		border-radius: 39% 61% 63% 37% / 77% 47% 53% 23%;
	}
`;
