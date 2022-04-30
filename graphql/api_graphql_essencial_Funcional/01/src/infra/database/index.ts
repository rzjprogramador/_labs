import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const STRING_CONEXAO_MONGO = process.env.STRING_CONEXAO_MONGO

mongoose.connect(STRING_CONEXAO_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


// export const connectDB = async () => {

// 	// const STRING_CONEXAO_MONGO = 'mongodb://localhost:27017/graphql-funcional-01'
// 	const STRING_CONEXAO_MONGO = process.env.STRING_CONEXAO_MONGO

// 	try {
// 		await mongoose.connect(STRING_CONEXAO_MONGO, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 			useFindAndModify: false, 
// 			useCreateIndex: true
// 		})
// 		console.log(`Conectado com Sucesso ao Mongo DB`)
// 		}
// 	catch(error) {
// 		console.log('Não foi possivel Conectar ao Mongo DB')
// 		process.exit(1)
// 	}

// }

