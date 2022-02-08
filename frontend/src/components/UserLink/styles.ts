import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
	display: flex;
	border: 1px solid #000;
	border-radius: 10px;
	cursor: pointer;
	flex-direction: column;
	width: 15em;
	color: #000;
`;

export const ProfilePicture = styled.img`
	display: flex;
	flex: 1;
	margin: 10px;
`;

export const UserInfo = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 10px;
	line-break: anywhere;
	align-items: flex-start;
	text-align: left;
`;

export const UserInfoText = styled.p`
	margin: 0;
`;
