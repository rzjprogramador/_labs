import { collection_Users_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/usuarios_hardcode'
import { collection_Perfil_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/perfis_hardcode'
import { makeID } from '../../utils_gql/makes/makeID'
import { MSG } from '../../utils_gql/mensagens/error_mensagens'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICACOES
*/

const getUser = (_: any, args: any) => {
  const { id, email } = args

  if(id) {
    return collection_Users_HARD.find(user => user.id === id)
  }
  if(email) {
    return collection_Users_HARD.find(user => user.email === email)
  }
}


/*
* EXPORT REFERENCIAS RESOLVERS
*/

export default {
  Query: {
    getUser,
    allUsers: () => {
      return collection_Users_HARD
    }

  },
  
  // RESOLVER TRIVIAL : CAMPO QUE A QUERY NAO CONSEGUE RESOLVER
  User: {
    perfil: (user: any) => {
      return collection_Perfil_HARD.find(p => p.id === user.perfil)
    }
  },

  Mutation: {
    createUser: (_, args: any) => {

      // VERIFICAR SE EXIST
      const { email  } = args
      const exist = collection_Users_HARD.some(u => u.email === email)
      if(exist) throw new Error(`${MSG.NOT_CADASTRO} ${email}`)


      const user = { 
        ...args, id: makeID(), perfil: '2' 
      }

      collection_Users_HARD.push(user)

      return user
    }
  }
  
}

