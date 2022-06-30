export interface IUser {
  idb?: string
  id?: string
  nome: string
  email: string
  password: string
  identificador: string

  createdAt?: Date
  updatedAt?: Date
  utimoLogin?: Date
}
