import { User } from '../entity/User.entity'

describe('ProdEncomenda', () => {
  test('criar objeto da entidade user', async () => {
    const userRequest = {
      nome: 'request_nome',
      estabelecimento: 'request_estabelecimento',
      email: 'request_email',
      password: 'request_password',
    }

    const newUserUm = User.create(userRequest)
    console.log(newUserUm)

    const createUser = User.create(newUserUm)

    expect(createUser).toHaveProperty('id')
  }) //
})
