import { Router } from 'express'
import { Request, Response } from 'express'

// Exportar o roteador
export const router = Router()

/* Rotas */
router.get('/inicio', (req: Request, res: Response) => {
    res.send('OLA MUNDO')
})
