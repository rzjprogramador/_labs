export class ProdEncomenda {
  idDB?: string
  id?: string
  nome: string
  preco: number

  private constructor({ nome, preco }: ProdEncomenda) {
    return Object.assign(this, {
      nome, 
      preco
    });
  }

  static create({ nome, preco }: ProdEncomenda) {
    const user = new ProdEncomenda({ nome, preco });
    return user;
  }
}