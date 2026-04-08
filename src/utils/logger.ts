import { LogLayer } from "loglayer";
import { pino } from "pino";
import { PinoTransport } from "@loglayer/transport-pino";
import { serializeError } from "serialize-error";
import { join } from "path";

const p = pino({
  level: "trace", // Enable all log levels
  transport: {
    targets:[
    {
      target: 'pino-pretty',
      level: 'info',
      options: { colorize: true }
    },
    {
      target: 'pino-roll',
      level: 'info',
      options: { 
        file: join(process.cwd(), 'logs', 'app.log'),
        mkdir: true 
      }
    }
    ]
  },
});

const log = new LogLayer({
  errorSerializer: serializeError,
  transport: new PinoTransport({
    logger: p,
  }),
});

export default log;
