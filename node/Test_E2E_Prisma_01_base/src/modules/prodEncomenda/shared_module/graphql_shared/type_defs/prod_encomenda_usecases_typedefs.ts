import { gql } from 'apollo-server'

export const prodEncomendaUseCaseTypes = gql`

# CONSULTAS DISPONIVEIS DESTA ENTIDADE
type Query {
  hello: String
  funcaoDois: String
}

# TIPOS CUSTOMIZADOS
# type Hello {
#   mensagem: String
# }

`//