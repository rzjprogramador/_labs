// DEFININDO TIPAGENS PARA AS ACOES DO CLIENT QUE PRECISARAM SER RESOLVIDAS
import { gql } from 'apollo-server'

export const hardCode = gql`



type Query { 
  # CONSULTAS QUE A ENTIDADE PODE FAZER
    texto: String
    
  }


`
//