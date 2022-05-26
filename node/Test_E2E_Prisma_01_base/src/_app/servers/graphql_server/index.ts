import { ApolloServer , gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
  type Query {
    hello: String
    funcaoDois: String
  }`,
  resolvers: {
    Query: {
      hello: () => `Hello Word`,
      funcaoDois: () => `Ola funcao Dois`
    }
  },
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))