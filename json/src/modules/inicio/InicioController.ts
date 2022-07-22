import { Request, Response } from 'express'

export const InicioController = (req: Request, res: Response) => {
    return res.json({
        mensagem: 'Inicio Ok'
    })
}