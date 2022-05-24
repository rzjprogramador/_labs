import 'module-alias/register'

import { app } from './app'

app.listen(3333, () => {
  console.log(`SERVER_ON :: 3333`)
})