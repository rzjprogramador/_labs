import { produtos_collection_HARD } from '../../../../../inmemory/entities/produto/produtos_collection_hardcode'

export const getProduto = (_: any, args: any) => {
  const { id, } = args
  return produtos_collection_HARD.find(item => item.id === id)
}