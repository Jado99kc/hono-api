// src/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      // Add other variables here as well
      PORT?: string;
      LOG_FILE?: string;
    }
  }
}

export {};
