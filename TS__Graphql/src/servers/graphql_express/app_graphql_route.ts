import { graphqlHTTP } from 'express-graphql'

import { schema } from './schema_central'



// PRINCIPAL MIDLE ROTA GQL PARA SER CHAMADO NO APP
export const graphqlRoute = graphqlHTTP({
  schema,
  graphiql: true,
})

