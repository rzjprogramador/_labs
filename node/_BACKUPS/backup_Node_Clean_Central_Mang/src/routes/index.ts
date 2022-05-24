import { Router } from 'express'

export const rotaModulos = Router()

rotaModulos.get('/modulos', (req, res) => {
    res.send('ola')
})