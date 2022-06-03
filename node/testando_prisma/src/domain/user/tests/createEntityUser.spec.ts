import { User } from '../entity/User.entity'

describe('ProdEncomenda', () => {
  test('criar objeto da entidade user', async () => {
    const userRequest = {
        nome: 'nome_hard_um_request',
        estabelecimento: 'estabelecimento_hard_um_request',
        email: 'email@email_hard_um_request',
        password: 'password_hard_um_request',
    }

    const newUserUm = User.create(userRequest)
    console.log(newUserUm)

    const createUser = User.create(newUserUm)

    expect(createUser).toHaveProperty('id')
  }) //
})
