export class ServerError extends Error {
    constructor () {
        super(`Erro inesperado no Servidor`)
        this.name = 'ServerError'
    }
}
