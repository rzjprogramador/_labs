/* eslint-disable no-unused-vars */

import { Users } from '@/core/users/domain/Users.entity';

interface ICreateUsersRepository {
    // dbFake: Users[]

    create: (data: Users) => Promise<Users>
    all: () => Promise<Users[]>
}

export { ICreateUsersRepository }