import { Router } from 'express'
import multer from 'multer'
import { createProdutoEncomendaPdfUseCase } from '@/domain/usecase'

export const produtoEncomendaPdfRoute = Router()

const upload = multer({
    dest: './temp'
})

/* ROTAS DESSE OBJETIVO */
produtoEncomendaPdfRoute.post('/', upload.single('file'), (req, res) => {
    return createProdutoEncomendaPdfUseCase.handle(req, res)
})
