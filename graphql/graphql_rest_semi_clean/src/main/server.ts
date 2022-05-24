import { env_app } from '@/main/config/env_app'
import app from '@/main/config/app'

app.listen(env_app.port, () => console.log(`SERVERON${env_app.port}`))