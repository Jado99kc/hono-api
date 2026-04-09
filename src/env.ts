import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().default(3000),
  LOG_FILE: z.string().default("./logs/app.log"),
});

export const env = envSchema.parse(process.env);
