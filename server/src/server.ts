import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

app.register(cors, {
  origin: true,
})

const app = fastify()
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP server running on http://localhost:3333'))
