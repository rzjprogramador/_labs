import { Pedidos } from '@/temp/entities/Pedidos.entity';

class Users {
    id?: string
    idDB: string
    nome: string
    email: string
    password: string

    pedidos?: Pedidos[]
}

export { Users }