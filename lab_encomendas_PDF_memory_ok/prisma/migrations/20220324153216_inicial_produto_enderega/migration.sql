-- CreateTable
CREATE TABLE "ProdutoEncomenda" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProdutoEncomenda_pkey" PRIMARY KEY ("id")
);
