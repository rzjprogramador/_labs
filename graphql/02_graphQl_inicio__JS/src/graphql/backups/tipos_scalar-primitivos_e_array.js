/*

type Query {
      id: ID!
      texto: String
      numeroInteiro: Int
      numeroDecimal: Float
      logico: Boolean!
      listaDeTextos: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => `1`,
      texto: () => `texto`,
      numeroInteiro: () => 10,
      numeroDecimal: () => 100.5,
      logico: () => true,
      listaDeTextos: () => ['A', 'B', 'C'],
    },
  },
  
*/
