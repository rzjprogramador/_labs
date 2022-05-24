import { Pedidos } from '@/temp/entities/Pedidos.entity'

type Produtos = {
    id: string
    idDB: string
    nome: string
    preco: number

    pedidos: Pedidos[]
}

export { Produtos }