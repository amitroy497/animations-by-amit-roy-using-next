import styled from 'styled-components';

export const SpanButton = styled.span`
	&::before {
		content: '';
		position: absolute;
		top: var(--y);
		left: var(--x);
		transform: translate(-50%, -50%);
		width: 0;
		height: 0;
		border-radius: 50%;
		background: #2196f3;
		transition: width 0.5s, height 0.5s;
	}

	&:hover::before {
		width: 300px;
		height: 300px;
	}
`;
