import { makeId } from '@src/core/_generics/factories/make_id'

export class Users {
  public readonly id: string

  public idDB?: string
  public nome: string
  public email: string
  public password: string
  public indexRef: number

  constructor(
    props: Omit<Users, 'id'>, id?: string
  ) {
    Object.assign(this, props)

    if(!id) {
      this.id = makeId()
    }
  }

}
