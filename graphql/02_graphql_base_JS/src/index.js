import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';

import { context } from './graphql/context.js';

// 1- Aqui no server é o roteador Principal
// Importar as definicoes subRoteadas no schema principal

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context,
});

server.listen(7777).then(({ url }) => console.log(`ServerOn ${url}`));
