-- CreateEnum
CREATE TYPE "CargoUser" AS ENUM ('USER', 'ADMIN', 'MODERADOR', 'FUNCIONARIO', 'ENTREGADOR');

-- CreateEnum
CREATE TYPE "StatusEntrega" AS ENUM ('HA_RECOLHER', 'ANALISE', 'TRANSITANDO', 'ENTREGUE');

-- CreateEnum
CREATE TYPE "AreaCobertura" AS ENUM ('APROVADO', 'INDISPONIVEL');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "estabelecimento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimoLogin" TIMESTAMP(3),
    "cargo" "CargoUser" NOT NULL DEFAULT E'USER',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco_base" DOUBLE PRECISION NOT NULL,
    "acrescimo" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "preco_final" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cidades" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregas" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "remetente" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidadesId" TEXT,

    CONSTRAINT "Entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco_base" DOUBLE PRECISION NOT NULL,
    "acrescimo" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "preco_final" DOUBLE PRECISION NOT NULL,
    "statusEntrega" "StatusEntrega",
    "areaCobertura" "AreaCobertura",
    "author_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    "entregasId" TEXT NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_nome_key" ON "Produtos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Cidades_id_key" ON "Cidades"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cidades_nome_key" ON "Cidades"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Entregas_id_key" ON "Entregas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pedidos_id_key" ON "Pedidos"("id");

-- AddForeignKey
ALTER TABLE "Entregas" ADD CONSTRAINT "Entregas_cidadesId_fkey" FOREIGN KEY ("cidadesId") REFERENCES "Cidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_entregasId_fkey" FOREIGN KEY ("entregasId") REFERENCES "Entregas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
