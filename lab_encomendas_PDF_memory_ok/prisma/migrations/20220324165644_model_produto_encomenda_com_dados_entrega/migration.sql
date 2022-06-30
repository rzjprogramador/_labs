/*
  Warnings:

  - You are about to drop the `DadosProdutoEncomenda` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cep` to the `ProdutoEncomenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `ProdutoEncomenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comprador` to the `ProdutoEncomenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinatario` to the `ProdutoEncomenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `ProdutoEncomenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `ProdutoEncomenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProdutoEncomenda" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "complemento" TEXT NOT NULL,
ADD COLUMN     "comprador" TEXT NOT NULL,
ADD COLUMN     "destinatario" TEXT NOT NULL,
ADD COLUMN     "logradouro" TEXT NOT NULL,
ADD COLUMN     "quantidade" TEXT NOT NULL;

-- DropTable
DROP TABLE "DadosProdutoEncomenda";
