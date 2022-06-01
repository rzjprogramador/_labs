

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICACOES
*/


const hello = () => {
  return {
    texto: 'Hello Texto 1 ',
    logico: true
  }
}


/*
* EXPORT REFERENCIAS RESOLVERS
*/

export default {
  Query: {
    hello,

  },

  // Mutation: {}
  
}
