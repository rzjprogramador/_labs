export class Cliente {
  id?: string
  nome: string
  email: string
  password: string
  identificador: string

  private constructor({ nome, email, password, identificador }: Cliente) {
    return Object.assign(this, { nome, email, password, identificador })
  }

  static create({ nome, email, password, identificador }: Cliente) {
    const cliente = new Cliente({ nome, email, password, identificador })
    return cliente
  }
}
