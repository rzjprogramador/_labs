// FUNCOES QUE ALIMENTA OS RESOLVERS DA ENTIDADE


const hello = () => {
  return {
    texto: 'Hello Texto',
    logico: true
  }
}


/*
* APONTAMENTO DE RESOLVERS
* REGISTRAR NO RESOLVERS CENTRALIZERS
*/

export const helloResolvers = {
  Query: {
    hello,

  },

  // Mutation: {}
  
}