import { buildSchemaSync } from 'type-graphql'

import { UserController } from '../controller/UserController'
import { User } from '../entities/User'

const schema = buildSchemaSync({
  resolvers: [User, UserController],
})

export default schema
