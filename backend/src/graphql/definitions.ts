import { gql } from 'apollo-server-core';

import { Resolvers } from '../@types/Resolvers';
import { ListParams, GetParams } from '../@types/UsersParameters';
import { users } from '../data/users';

export const defs = gql`
	type Users {
		_id: String!
		index: Int!
		picture: String!
		age: Int!
		eyeColor: String!
		name: String!
		company: String!
		email: String!
		phone: String!
		friends: [Users]!
	}

	type Query {
		list(name: String): [Users]
		get(id: String): Users
	}
`;

export const definedResolvers: Resolvers = {
	Query: {
		list: (_parent: any, args: ListParams) => {
			if (!args.name) {
				return users;
			}

			const regex = new RegExp(`${args.name.split(' ').join('.*')}`, 'gi');

			return users.filter((user) => regex.test(user.name));
		},
		get: (_parent: any, args: GetParams) =>
			users.find((user) => user._id === args.id)
	}
};
