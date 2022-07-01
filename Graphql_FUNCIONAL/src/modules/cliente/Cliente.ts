import { makeID } from '@src/globals/makers/maker_identificator'

export class Cliente {
  id?: string
  nome: string
  email: string
  password: string
  identificador: string

  private constructor({ nome, email, password, identificador }: Cliente) {
    if (!this.id) {
      this.id = makeID()
    }
    return Object.assign(this, { nome, email, password, identificador })
  }

  static create({ nome, email, password, identificador }: Cliente) {
    const cliente = new Cliente({ id: '222', nome, email, password, identificador })
    return cliente
  }
}
