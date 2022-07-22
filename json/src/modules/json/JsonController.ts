import { Request, Response } from 'express'
import fs from 'fs'

function collectionAtual() {
    const content = fs.readFileSync('data/items.json', 'utf-8')
    return JSON.parse(content)
}

class JsonController {

    getAll(req: Request, res: Response) {
        const content = collectionAtual()
        res.send(content)
    }

    insert(req: Request, res: Response) {
        const { nome, email, senha } = req.body
        const conteudoAtual = collectionAtual()
        conteudoAtual.push({ nome, email, senha })
        // SALVAR
        fs.writeFileSync(
            'data/items.json',JSON.stringify(conteudoAtual), 'utf-8'
            )
        res.json({ menssage: 'OK SUCESSO!'})
    }
}

export default new JsonController()



// export const JsonController = (req: Request, res: Response) => {
//     const content = fs.readFileSync("../../data/items.json", "utf-8")
//     const result = JSON.parse(content)
//     return result
// }