import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`Application is running http://localhost:3333`))
