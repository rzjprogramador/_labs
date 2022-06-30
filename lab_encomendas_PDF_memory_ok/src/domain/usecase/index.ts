import { CreateProdutoEncomendaPdfUseCase } from "./create-produto-encomenda-pdf-controller"
import { CreateProdutoEncomendaPdfRequestAdapt } from "@/domain/request-adapt"

const createProdutoEncomendaPdfRequestAdapt = new CreateProdutoEncomendaPdfRequestAdapt()

export const createProdutoEncomendaPdfUseCase = new CreateProdutoEncomendaPdfUseCase(createProdutoEncomendaPdfRequestAdapt)
