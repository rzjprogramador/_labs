import { Users } from '../domain/users.entity'

export class UsersMemoryRepository {

  constructor(
    public collectionUser: Users[] = []
  ) {}
  