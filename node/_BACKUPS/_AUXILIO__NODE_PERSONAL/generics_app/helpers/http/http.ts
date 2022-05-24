import { HttpResponse } from '../../contracts/http_protocol'
import { ServerError } from '../error/server_error'

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})

export const sucess = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const serverError = (): HttpResponse => ({
    statusCode: 500,
    body: new ServerError()
})