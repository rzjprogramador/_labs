import { CreateHelloRequest } from '../../contracts/repositories_contracts/create_hello_request'
import { createHelloControll } from '../../usecases/inject_controll/createHelloControll'
import { listHelloControll } from '../../usecases/inject_controll/listHelloControll'
import { hello1_ObjHardCode, hello2_ObjHardCode } from '../../use/hello_object'
import { Hello } from '../../entity/Hello.entity'

// ARRAY MARRETADO
const arrayHellos = [
  { id: '1', nome: 'hello1', preco: 15 },
  { id: '2', nome: 'hello2', preco: 15 },
]

const allHellos = () =>  arrayHellos
const getHello = () => arrayHellos[0]

const createHello = () => arrayHellos[0]

// const createHello = ({ nome, preco }: CreateHelloRequest) => createHelloControll().handle({ nome, preco })

export const helloResolvers = {
  Query: {
    allHellos,
    getHello,
  },

  Mutation: {
    createHello,
  },
}