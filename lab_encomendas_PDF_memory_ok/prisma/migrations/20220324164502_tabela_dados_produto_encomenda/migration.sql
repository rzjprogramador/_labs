-- CreateTable
CREATE TABLE "DadosProdutoEncomenda" (
    "id" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "comprador" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,

    CONSTRAINT "DadosProdutoEncomenda_pkey" PRIMARY KEY ("id")
);
