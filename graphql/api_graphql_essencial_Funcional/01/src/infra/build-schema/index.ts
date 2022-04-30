import { buildSchema } from 'type-graphql'

import Acao from '../../entidades/Acao/Acao'

import AcaoController from '../../entidades/Acao/AcaoController'

const schema = async () => await buildSchema({
    resolvers: [Acao, AcaoController]

})

export default schema