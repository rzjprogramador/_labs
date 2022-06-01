-- CreateTable
CREATE TABLE "prod_encomendas" (
    "idDB" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "prod_encomendas_pkey" PRIMARY KEY ("idDB")
);
