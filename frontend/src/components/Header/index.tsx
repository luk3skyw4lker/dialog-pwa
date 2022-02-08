import React from 'react';

import { Container, Search, Title } from './styles';

interface HeaderProps {
	onChangeSearch: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeSearch }) => {
	return (
		<header>
			<Container>
				<Title>MySocial</Title>
				<Search
					placeholder="search"
					type="text"
					onChange={event => onChangeSearch(event.target.value)}
				/>
			</Container>
		</header>
	);
};

export default Header;
