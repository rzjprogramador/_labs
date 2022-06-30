import { buildSchemaSync } from 'type-graphql'

import { User } from '@src/entities/User'
import { SessionController } from '@src/controller/SessionController'
import { Auth } from '@src/entities/Auth'
import { AuthenticationMidle } from '@src/midlewares/authentication'

// import Node from './Node'

const schema = buildSchemaSync({
  resolvers: [User, Auth, SessionController],
  authChecker: AuthenticationMidle,
})

export default schema
