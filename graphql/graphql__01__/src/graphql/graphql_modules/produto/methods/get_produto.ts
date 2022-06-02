import { collection_Produtos_HARD } from '../../generics_graphql/hardcoders/repositorios_hardcode/produtos_hardcode'

export const getProduto = (_: any, args: any) => {
  const { id, } = args
  return collection_Produtos_HARD.find(item => item.id === id)
}