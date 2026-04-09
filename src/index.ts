import "dotenv/config";
import { serve } from "@hono/node-server";
import app from "./app";
import { env } from "./env";
import log from "./lib/logger";


serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    log.info(
      `Server running on http://localhost:${info.port} [${env.NODE_ENV}]`,
    );
  },
);
