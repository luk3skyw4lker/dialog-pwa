import styled from 'styled-components';

export const Container = styled.main`
	padding: 0 1em;
`;

export const UsersGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
	justify-items: center;
	column-gap: 1em;
	row-gap: 1em;
`;
