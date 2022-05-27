// METODOS RESOLVEDORES
const ola = () => `Ola... 1 ...`

const hello = () => {
  return { id: '1', nome: 'hello1...2....', preco: 15 }
}


// REFERENCIANDO TODOS RESOLVEDORES > PARA SEREM USADOS NO CENTRALIZADOR DE RESOLVERS

export const olaResolvers = {
  Query: {
    ola,
    hello,
  }
  
}