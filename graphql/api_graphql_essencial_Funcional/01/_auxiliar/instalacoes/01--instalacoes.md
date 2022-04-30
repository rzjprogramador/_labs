# Dependencias
npm i graphql type-graphql class-validator reflect-metadata apollo-server
npm i mongoose

# Dev Dependencies
npm i -D ts-node-dev typescript @types/mongoose
npm i -D dotenv

# Mongo

* MongoAtlas :
mongodb+srv://123user:<password>@cluster0.sprhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
MONGO ATLAS STRING SÓ SE SUBSTITUI O PASS E O NOME DO BANCO -- O PRIMEIRO QUE VEM SETADO É O NOME DO BANCO :

Substitua <password> pela senha do usuário 123user . 
Substitua myFirstDatabase pelo nome do banco de dados que as conexões usarão por padrão

ESTRUTURA ::
ESQUEMA          _  SCHEMA
Banco_De_DADOS   _  DATABASE
COLECAO          _  COLLECTION
DOCUMENTO        _  DOCUMENT



# CONFIGURACOES ::
* DOTENV NO ARQUIVO :
import dotenv from 'dotenv'
dotenv.config()

---
