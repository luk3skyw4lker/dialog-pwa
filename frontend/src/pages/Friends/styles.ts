import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex: 1;
	padding: 0 1em;
	flex-direction: column;
	align-items: flex-start;
`;

export const UserInfoCard = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row;
`;

export const UserFriendsContainer = styled.div`
	width: 100%;
`;

export const UserFriendsCardTitle = styled.h1``;

export const UserInfoTextContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	margin-left: 1em;
`;

export const UserInfoText = styled.p`
	margin: 0;
	font-size: 2em;
	text-align: left;
	line-break: anywhere;
`;

export const UserInfoPicture = styled.img`
	width: 15em;
	height: 15em;
`;
