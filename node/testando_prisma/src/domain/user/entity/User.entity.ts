import { makeID } from './../../../generics/helpers/makes/makeID'

export class User {
  public nome: string
  public estabelecimento: string
  public email: string
  public password: string

  public readonly id?: string

  idDB?: string
  indexRef?: number
  createdAt?: Date
  updated?: Date
  ultimoLogin?: Date

  private constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = makeID()
    }
  }

  static create({ nome, estabelecimento, email, password }: User) {
    const user = new User({
      nome,
      estabelecimento,
      email,
      password,
    })
    return user
  }
}

/*
Obrigatorios:
    nome,
    estabelecimento,
    email,
    password,

    */
