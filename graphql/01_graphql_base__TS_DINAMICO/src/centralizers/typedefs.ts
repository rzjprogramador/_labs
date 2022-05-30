import { hello } from '../graphql_modules/hello/typedefs'
import { user } from '../graphql_modules/user/typedefs'
import { produto } from '../graphql_modules/produto/typedefs'


export const typeDefs = [
  hello,
  user , 
  produto,
]

/*
* AQUI É O SCHEMA - CONJUNTO DE TYPEDEFS DOS OBJETOS MODULOS
** ESTE SERÁ CHAMADO NO OBJETO CONFIGURACAO DO SERVER APOLLO
*/
