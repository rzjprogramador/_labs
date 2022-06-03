import { User } from '../entity/User.entity'

describe('ProdEncomenda', () => {
  test('criar objeto da entidade user', async () => {
    //   const user = new User()

    const userRequest = {
      nome: 'request_nome',
      estabelecimento: 'request_estabelecimento',
      email: 'request_email',
      password: 'request_password',
    }

    const newUserUm = User.create(userRequest)

    console.log(newUserUm)

    expect(User.create(newUserUm)).toHaveProperty('id')
  }) //
})
