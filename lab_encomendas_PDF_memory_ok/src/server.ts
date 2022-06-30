import express from 'express'

import { routes } from '@/routes'
import emoji from 'node-emoji'

const app = express()

/* MIDDLEWARES EXPRESS */
app.use(express.json())

/*
* ROTAS: POLO-UNICO
*/
app.use(routes)

// --------------------------------------------------
/* SERVIDOR */
//
app.listen(3333, () => console.log(`RODANDO NA 3333 ${emoji.get('fire')}`))
