

export const olaResolvers = {
  Query: {
    ola: () => `Ola... 1 ...`,
    hello: () => {
      return { id: '1', nome: 'hello1', preco: 15 }
    } ,
  }
}