import { makeID, makeCodigo, makeDate } from '@src/globals/makers/maker_identificator'

export class Pedido {
  id?: string
  codigo?: string
  quantidade: number
  endereco: string
  createdAt?: Date

  private constructor({ quantidade, endereco }: Pedido) {
    if (!this.id) {
      this.id = makeID()
    }
    if (!this.codigo) {
      this.codigo = makeCodigo()
    }
    if (!this.createdAt) {
      this.createdAt = makeDate()
    }

    return Object.assign(this, { quantidade, endereco })
  }

  static create({ quantidade, endereco }: Pedido) {
    const pedido = new Pedido({ quantidade, endereco })
    return pedido
  }
}
