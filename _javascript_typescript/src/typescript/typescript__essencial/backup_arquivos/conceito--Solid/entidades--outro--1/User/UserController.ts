import { Request, Response } from 'express'
// import User from './UserModel'
const UserModel = require('./UserModel')

const UserController = {
    // // Criar usuarios
    // async createUser(req: Request, res: Response): Promise<Response> {
    //     const bodyData = req.body

    //     try {
    //         const newUser = await UserModel.create(bodyData)
    //         return res.status(201).json(newUser)
    //     } catch {
    //         return res.status(400)
    //     }
    // },

    // Retornar todos usuarios
    async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UserModel.find()
            return res.status(201).json(users)
        } catch (err) {
            return res.status(400).json(err)
        }
    },

    // Buscar usuario por Id
    async getUserById(req: Request, res: Response): Promise<Response> {

        const { user_id } = req.params

        try {
            const users = await UserModel.findById(user_id)
            return res.status(201).json(users)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = UserController
