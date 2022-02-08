import React from 'react';

import { Container, ProfilePicture, UserInfo, UserInfoText } from './styles';
import { Users } from '../../@types/Users';

interface UserCardProps {
	user: Users;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	return (
		<Container to={`/${user._id}`}>
			<ProfilePicture src={user.picture} />
			<UserInfo>
				<UserInfoText>name: {user.name}</UserInfoText>
				<UserInfoText>age: {user.age}</UserInfoText>
				<UserInfoText>eyeColor: {user.eyeColor}</UserInfoText>
				<UserInfoText>company: {user.company}</UserInfoText>
				<UserInfoText>email: {user.email}</UserInfoText>
			</UserInfo>
		</Container>
	);
};

export default UserCard;
