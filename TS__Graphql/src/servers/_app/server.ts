import 'dotenv/config'

import { app } from './app'

const PORT = process.env.PORT_DEV_GRAPHQL

app.listen(PORT, () => console.log(`SERVER ON >> ${PORT}`))
