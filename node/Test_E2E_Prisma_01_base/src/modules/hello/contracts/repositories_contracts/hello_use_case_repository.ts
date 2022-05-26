import { Hello } from '../../entity/Hello.entity'

export interface CreateHello {
  nome: string
  preco: number
}

export interface HelloRepository {
  create(data: CreateHello): Promise<void>
  list(): Promise<Hello[]>
}