import { OpenAPIHono } from '@hono/zod-openapi'
import notFound from './middlewares/not-found'
import onError from './middlewares/on-error'
import { honoLogLayer } from '@loglayer/hono'
import log from './utils/logger'

const app = new OpenAPIHono()
app.use(honoLogLayer({ instance: log }))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/error", (c) => {
    c.status(422)
  throw new Error("This is a test error");
});


app.post("/echo", async (c) => {
  const body = await c.req.json();
  log.info("Received body", JSON.stringify(body) );
  return c.json({ received: body });
});

app.notFound(notFound)
app.onError(onError)

export default app