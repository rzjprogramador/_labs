import "module-alias/register"

import { env_app } from '../generic_server/env_app'

import { app } from './app'

app.listen(env_app.port, () => console.log(`SERVER_ON :: ${env_app.port}`))