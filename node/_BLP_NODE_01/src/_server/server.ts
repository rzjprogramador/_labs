import 'module-alias/register'

import express from 'express'

import { rotaModulos } from '@/routes'
// import { rotaModulos } from '../routes'


const app = express()

app.use(rotaModulos)

// MIDLEWARES EXPRESS
app.use(express.json())

app.listen(3333, () => {
    console.log(`SERVEN_ON`)
})