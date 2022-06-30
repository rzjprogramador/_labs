import { UserController } from '@src/controller/UserController'
import { User } from '@src/entities/User'
import { buildSchemaSync } from 'type-graphql'

const schema = buildSchemaSync({
  resolvers: [User, UserController],
})

export default schema
