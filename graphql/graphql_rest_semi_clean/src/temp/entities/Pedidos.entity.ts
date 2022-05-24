import { Users } from '@/core/users/domain/Users.entity'
import { Produtos } from '@/temp/entities/Produtos.entity'


type Pedidos = {
    id: string
    idDB: string
    quantidade: number

    user: Users
    produtos: Produtos[]
}

export { Pedidos }