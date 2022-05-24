import { Users } from '@src/modules/users/domain/Users.entity'


export interface IServiceList {
  execute(): Promise<Users[]>
}
