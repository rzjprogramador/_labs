import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv'
dotenv.config()

import '../database'
import '../../entidades/Acao/protocolos/AcaoSchemaProtocol'

import schemaFn from '../build-schema'

const app = async () => {

    const schema = await schemaFn()

    const server = new ApolloServer({ schema })

    server.listen({ port: 4000 }, () => console.log(`Server Rodando na 4000 `))

}

app()