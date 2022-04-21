-- CreateTable
CREATE TABLE "DeletarTestPai" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,

    CONSTRAINT "DeletarTestPai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeletarPedidoFilho" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "logradouro" TEXT NOT NULL,
    "pronto" BOOLEAN DEFAULT false,
    "autor_paiId" INTEGER,

    CONSTRAINT "DeletarPedidoFilho_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeletarTestPai_email_key" ON "DeletarTestPai"("email");

-- AddForeignKey
ALTER TABLE "DeletarPedidoFilho" ADD CONSTRAINT "DeletarPedidoFilho_autor_paiId_fkey" FOREIGN KEY ("autor_paiId") REFERENCES "DeletarTestPai"("id") ON DELETE SET NULL ON UPDATE CASCADE;
