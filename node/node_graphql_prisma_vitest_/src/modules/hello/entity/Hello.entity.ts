export class Hello {
  idDB?: string
  id?: string
  nome: string
  preco: number

  private constructor({ nome, preco }: Hello) {
    return Object.assign(this, {
      nome, 
      preco
    });
  }

  static create({ nome, preco }: Hello) {
    const hello = new Hello({ nome, preco });
    return hello
  }
}