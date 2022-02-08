import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Header from '../../components/Header';
import UserLink from '../../components/UserLink';
import { Users } from '../../@types/Users';

import { Container, UsersGrid } from './styles';

const LIST_USERS_QUERY = gql`
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
		}
	}
`;

const Home: React.FC = () => {
	const { data, loading, error } =
		useQuery<{ list: Users[] }>(LIST_USERS_QUERY);
	const [search, setSearch] = useState<string>('');

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<>
			<Header onChangeSearch={setSearch} />
			<Container>
				<UsersGrid>
					{data?.list
						.filter(user =>
							search
								? user.name.toLowerCase().includes(search.toLowerCase())
								: user
						)
						.map(user => (
							<UserLink key={user._id} user={user} />
						))}
				</UsersGrid>
			</Container>
		</>
	);
};

export default Home;
