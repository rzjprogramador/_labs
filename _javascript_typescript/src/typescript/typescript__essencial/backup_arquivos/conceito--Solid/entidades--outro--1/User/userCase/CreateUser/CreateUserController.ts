import { request, Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private CreateUserUseCase: CreateUserUseCase,
    ) {}

    async handle(resquest: Request, response: Response): Promise<Response> {

        const { nome, email, senha } = request.body

        try {
            await this.CreateUserUseCase.execute({
                nome,
                email,
                senha
            })

            return response.status(201).send()
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Inesperado Erro >> '
            })
        }
    }
}