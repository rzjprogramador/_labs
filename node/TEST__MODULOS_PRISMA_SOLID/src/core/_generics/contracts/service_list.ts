import { Users } from '@/modules/users/domain/Users.entity'


export interface IServiceList {
  execute(): Promise<Users[]>
}
