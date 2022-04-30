import 'dotenv/config'
import app from '../src/app/app'
import connectMongoDb from '../src/database/mongo'

// conexao com mongo db
connectMongoDb()

const PORT = process.env.LOCAL_PORT || process.env.LOCAL_PORT

app.listen(PORT, () => console.log(`-- 1-- OK PORTA ${PORT}`))
