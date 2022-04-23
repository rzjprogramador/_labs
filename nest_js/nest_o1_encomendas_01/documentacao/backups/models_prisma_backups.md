# BACKUPS MODELS PRISMA

model DeletarPai {
  id    Int     @default(autoincrement()) @id
  email String  @unique
  nome  String?
  pedidos DeletarPedidoFilho[]
	@@map("DeletarTestPai")
}

model DeletarPedidoFilho {
  id        Int      @default(autoincrement()) @id
  titulo     String
  preco     Float
  logradouro     String
  pronto Boolean? @default(false)
  autor_pai    DeletarPai?    @relation(fields: [autor_paiId], references: [id])
  autor_paiId  Int?
}