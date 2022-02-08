import { Logger } from '@bristom/logger';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { DocumentNode } from 'graphql';
import { createServer } from 'http';
import morgan from 'morgan';

import { formatLog } from './config/morgan';
import { definedResolvers, defs } from './graphql/definitions';

const startApolloServer = async (typeDefs: DocumentNode, resolvers: any) => {
	const app = express();

	app.use(morgan(formatLog));

	const httpServer = createServer(app);
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
	});
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });
	await new Promise<void>((resolve) => {
		httpServer.listen({ port: 4000 }, resolve);
	});

	Logger.info(
		`Server running at http://localhost:4000${apolloServer.graphqlPath}`
	);
};

startApolloServer(defs, definedResolvers);
