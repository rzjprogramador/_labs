import { Users } from '../domain/users.entity'

export interface UsersRepositoryProtocol {
  collectionUser: Users[]
}