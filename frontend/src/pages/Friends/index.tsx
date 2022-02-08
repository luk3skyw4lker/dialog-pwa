import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import { Users } from '../../@types/Users';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

import { UsersGrid } from '../Home/styles';

import {
	Container,
	UserFriendsCardTitle,
	UserFriendsContainer,
	UserInfoCard,
	UserInfoPicture,
	UserInfoText,
	UserInfoTextContainer
} from './styles';

const GET_USER_QUERY = gql`
	query ($id: String!) {
		get(id: $id) {
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

const Friends: React.FC = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery<{ get: Users }>(GET_USER_QUERY, {
		variables: { id }
	});

	const [search, setSearch] = useState<string>();

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>{JSON.stringify(error)}</h1>;
	}

	return (
		<div className="App">
			<Header onChangeSearch={setSearch} />
			<Container>
				<UserInfoCard>
					<UserInfoPicture src={data?.get.picture} />
					<UserInfoTextContainer>
						<UserInfoText>name: {data?.get.name}</UserInfoText>
						<UserInfoText>age: {data?.get.age}</UserInfoText>
						<UserInfoText>email: {data?.get.email}</UserInfoText>
					</UserInfoTextContainer>
				</UserInfoCard>
				<UserFriendsCardTitle>Friends:</UserFriendsCardTitle>
				<UserFriendsContainer>
					<UsersGrid>
						{data?.get.friends
							.filter(friend =>
								search
									? friend.name.toLowerCase().includes(search.toLowerCase())
									: friend
							)
							.map(friend => (
								<UserCard key={friend._id} user={friend} />
							))}
					</UsersGrid>
				</UserFriendsContainer>
			</Container>
		</div>
	);
};

export default Friends;
