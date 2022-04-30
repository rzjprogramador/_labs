// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id String @id @default(uuid())
  nome String 
  estabelecimento String
  email String @unique
  password String
  createdAt DateTime @default(now())
  ultimoLogin DateTime?

  cargo CargoUser @default(USER)

  pedidos Pedido[]

  UserPedido UserPedido[]
}

model Produto {
  id String @id @default(uuid())
  nome String @unique

  preco_base Float
  acrescimo Float
  desconto Float
  preco_final Float

  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())

  pedidos Pedido[]

  ProdutoPedido ProdutoPedido[]

	
}

model Pedido {
  id String @id @default(uuid()) @unique
  nome String

  preco_base Float
  acrescimo Float
  desconto Float
  preco_final Float

  quantidade Int
  remetente String
  destinatario String
  logradouro String
  numero String
  complemento String
  cep String
  cidade String
  estado String 

  statusEntrega StatusEntrega
  areaCobertura AreaCobertura


  author     User       @relation(fields: [author_id], references: [id])
  author_id   String

  produto    Produto       @relation(fields: [produto_id], references: [id])
  produto_id   String @map("produto_id")

  UserPedido UserPedido[]
  ProdutoPedido ProdutoPedido[]

}

// ENUMS 

enum CargoUser {
  USER
  ADMIN
  MODERADOR
  FUNCIONARIO
  ENTREGADOR
}

enum StatusEntrega {
  HA_RECOLHER
  ANALISE
  TRANSITANDO
  ENTREGUE
}

enum AreaCobertura {
  APROVADO
  INDISPONIVEL
}

// CONFIGURACAO : TABELAS PIVO

// MANY TO MANY :: AQUI NA TABELA PIVO:: 1 USER PODE TER MUITOS PEDIDO

model UserPedido {
  id String @default(uuid()) @unique
  user User @relation(fields: [id_user], references: [id])
  pedido Pedido @relation(fields: [id_pedidos], references: [id])
  id_user String
  id_pedidos String

}

// MANY TO MANY :: AQUI NA TABELA PIVO:: 1 PRODUTO PODE TER MUITOS PEDIDO

model ProdutoPedido {
  id String @default(uuid()) @unique
  produto Produto @relation(fields: [id_produto], references: [id])
  pedido Pedido @relation(fields: [id_pedidos], references: [id])
  id_produto String
  id_pedidos String

}

