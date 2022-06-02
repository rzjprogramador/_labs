import { collection_Produtos_HARD } from '../../../../../tests_in_memory/entities/produto/produtos_hardcode'

export const getProduto = (_: any, args: any) => {
  const { id, } = args
  return collection_Produtos_HARD.find(item => item.id === id)
}