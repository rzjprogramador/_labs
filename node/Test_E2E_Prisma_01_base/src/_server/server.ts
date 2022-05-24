import 'module-alias/register'
import express from 'express'

// import { app } from '@/_server/app'
import { app } from './app'
// import routes  from '../routes'
import { routes } from '../routes'

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log(`SERVER_ON :: 3333`)
})