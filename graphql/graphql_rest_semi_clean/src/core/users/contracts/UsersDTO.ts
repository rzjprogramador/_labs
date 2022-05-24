import { Pedidos } from '@/temp/entities/Pedidos.entity';

interface UsersDTO {
    id?: string
    idDB: string
    nome: string
    email: string
    password: string

    pedidos?: Pedidos[]
}

export { UsersDTO }
