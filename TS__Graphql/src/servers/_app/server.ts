// import 'dotenv/config'
import { ENV } from '../../globals/env/enviroments'

import { app } from './app'

const PORT = ENV.PORT_DEV_GRAPHQL

app.listen(PORT, () => console.log(`SERVER ON >> ${PORT}`))
