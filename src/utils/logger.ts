import { LogLayer } from "loglayer";
import { pino } from "pino";
import { PinoTransport } from "@loglayer/transport-pino";
import { serializeError } from "serialize-error";

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

// Development: pretty-printed console output
const devTransport = {
  target: "pino-pretty",
  level: "debug",
  options: { colorize: true },
};

const fileTransport = {
  target: 'pino/file',
  options: { destination: process.env.LOG_FILE || './logs/app.log', mkdir: true }
}

const p = pino({
  level: IS_DEVELOPMENT ? "debug" : "info",
  transport: IS_DEVELOPMENT ? { targets: [devTransport] } : {targets: [devTransport,fileTransport] },
});

const log = new LogLayer({
  errorSerializer: serializeError,
  transport: new PinoTransport({
    logger: p,
  }),
});

export default log;
