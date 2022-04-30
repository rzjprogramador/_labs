import { app } from './app'
import 'dotenv/config'

const porta = process.env.PORT || 3333

const server = app.listen(porta, () => {
    console.log(`Server Rodando na ${porta}`)
})

process.on('SIGINT', () => {
    server.close()
    console.log(`App Finalizado !`)
})
