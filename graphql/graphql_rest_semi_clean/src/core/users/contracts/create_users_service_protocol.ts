/* eslint-disable no-unused-vars */

import { Users } from '@/core/users/domain/Users.entity';
import { UsersDTO } from '@/core/users/contracts/UsersDTO';

interface ICreateUsersService {
    createUsers: (data: UsersDTO) => Promise<Users>
    allUsers: () => Promise<Users[]>
}

export  { ICreateUsersService }