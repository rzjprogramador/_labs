import { makeId } from '@/core/_generics/factories/make_id'

export class Users {
  public readonly id: string

  public idDB?: string
  public nome: string
  public email: string
  public password: string
  public indexRef?: number

  private constructor({ name, username, email }: Users) {
    return Object.assign(this, {
      nome,
      email,
      password,
    });
  }

  static create({ name, username, email }: User) {
    const user = new User({ username, name, email });
    return user;
  }

}
