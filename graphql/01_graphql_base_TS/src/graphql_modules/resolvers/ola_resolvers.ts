// METODOS RESOLVEDORES
const ola = () => `Ola... 1 ...`

const hello = () => {
  return { id: '1', nome: 'hello1...2....', preco: 15 }
}

interface HelloRequest {
  id: number
  nome: string
  preco: number
}

const createHello = (hello: HelloRequest) => {
  const { id, nome, preco } = hello

 const newHello = Object.assign({
   id, nome, preco
 })
  return newHello
}


// REFERENCIANDO TODOS RESOLVEDORES > PARA SEREM USADOS NO CENTRALIZADOR DE RESOLVERS

export const olaResolvers = {
  Query: {
    ola,
    hello,
  },

  Mutation: {
    createHello,
  }
}