// import Acao from '../Acao'
import acaoModelMongo from '../providers/db_mongo/acaoModelMongo'

export abstract class AcaoRepository {
    

    /*  buscar todos no mongo  */
    static async getAll () {
        return await acaoModelMongo.find({})
    }

    /*  buscar por id no mongo  */
    static async getById (id) {
        return await acaoModelMongo.findById(id)
    }

}


// /*  buscar todos no mongo  */
// const getAll = async() => await AcaoModel.find({})

// /*  buscar por id no mongo  */
// const getById = async(id) => await AcaoModel.findById(id)


// module.exports = {
//     getAll,
//     getById
// }