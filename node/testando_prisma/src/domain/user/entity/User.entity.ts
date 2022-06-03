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

  private constructor(
    props: Omit<User, 'id'>, id?: string,
    // receber todas props da classe User menos a "id", TODO depois vou receber o id como opcional para Entidade que ja tem, nao recriar ou pra nova criar
  ) {
    Object.assign(this, props)
    // A cada propriedade vai adicionar o this, Para nao atribuir cada campo recebido ao campo da classe

    if (!id) {
      this.id = makeID()
    }
  }

  // O CONSTRUTOR É PRIVADO - PARA CRIAR FORA A ENTIDADE USE A CLASSE.CREATE: USE EM TEST
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
