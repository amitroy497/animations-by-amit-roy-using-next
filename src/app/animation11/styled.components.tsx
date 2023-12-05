import styled from 'styled-components';

export const Side = styled.div`
	&#side1 {
		clip-path: polygon(0 0, 0 100%, 100% 100%);
	}

	&#side2 {
		clip-path: polygon(0 0, 100% 0, 100% 100%);
	}
`;
