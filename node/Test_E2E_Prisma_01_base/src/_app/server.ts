// @ts-ignore
import 'module-alias/register'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql_central/schema'

import { app } from './app'
import { routes } from './routes'

app.use(express.json())
app.use(routes)

// MIDLE GRAPHQL SUBIR O SERVER
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true

}))

// const schema = {
//   resolvers,
//   typeDefs,
// }



app.listen(3333, () => {
  console.log(`SERVER_ON :: 3333`)
})