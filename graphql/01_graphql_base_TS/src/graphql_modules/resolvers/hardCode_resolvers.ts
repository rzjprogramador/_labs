
export const hardCodeResolvers = {

  Query: {
    texto: () => {
      return `Texto -->  1  <----`
    },

    logico: () => true,

    numeroInteiro: () => 10,

    userTest: () => {
      return {
        id: 'UserTest',
        username: 'UserName',
        nome: 'Nome',
        sobrenome: 'Sobrenome'
      }
    }

  },
  // Mutation: {}
}

/**
 * RESOLVENDO AS DEFINICOES DE TIPOS
*/