import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import { Users } from '../../@types/Users';

import { Container, UsersGrid } from './styles';

const USERS_QUERY = gql`
	{
		list {
			_id
			age
			company
			email
			eyeColor
			index
			name
			phone
			picture
			friends {
				_id
				age
				company
				email
				eyeColor
				index
				name
				phone
				picture
			}
		}
	}
`;

const Home: React.FC = () => {
	const { data, loading, error } = useQuery<{ list: Users[] }>(USERS_QUERY);
	const [search, setSearch] = useState<string>('');

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>{error}</h1>;
	}

	const handleSearch = (value: string) => setSearch(value);

	return (
		<>
			<Header onChangeSearch={handleSearch} />
			<Container>
				<UsersGrid>
					{data?.list
						.filter(user =>
							search
								? user.name.toLowerCase().includes(search.toLowerCase())
								: user
						)
						.map(user => (
							<UserCard key={user._id} user={user} />
						))}
				</UsersGrid>
			</Container>
		</>
	);
};

export default Home;
