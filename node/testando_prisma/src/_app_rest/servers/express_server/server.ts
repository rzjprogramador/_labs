// @ts-ignore
import 'module-alias/register'
import express from 'express'

import { app } from './app'
import { routes } from './routes_express'

app.use(express.json())
app.use(routes)




app.listen(3333, () => {
  console.log(`SERVER_ON :: 3333`)
})