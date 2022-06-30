import { Request, Response } from 'express'
import { CreateProdutoEncomendaPdfRequestAdapt } from '@/domain/request-adapt'

export class CreateProdutoEncomendaPdfUseCase {
    constructor (
        private createProdutoEncomendaPdfRequestAdapt: CreateProdutoEncomendaPdfRequestAdapt
    ) { }

    async handle (req: Request, res: Response): Promise<Response> {
        const { file } = req
        const prodPdf = await this.createProdutoEncomendaPdfRequestAdapt.execute(file!)
        console.log(prodPdf) // AQUI NA VAR PRODPDF :: TENHO OS DADOS DO PDF EM OBJETO
        return res.send()
    }
}
