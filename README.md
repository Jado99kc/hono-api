# Hono API Template

A production-ready Hono API template with TypeScript, Vite, Pino logging, and PM2.

## Stack
- [Hono](https://hono.dev) — Web framework
- [Vite](https://vitejs.dev) — Build tool (no .js extensions needed)
- [Zod](https://zod.dev) — Env validation & schema validation
- [Pino](https://getpino.io) — Structured logging
- [PM2](https://pm2.keymetrics.io) — Process management

## Getting Started

1. Clone and install
```bash
   pnpm install
```
2. Copy env file
```bash
   cp .env.example .env
```
3. Run in development
```bash
   pnpm dev
```
4. Build and run in production
```bash
   pnpm build
   pm2 start ecosystem.config.cjs --env production
```

## Project Structure
src/
├── routes/         # Add route groups here
├── middlewares/    # not-found, on-error
├── utils/          # logger
├── env.ts          # Zod-validated environment
├── app.ts          # Hono app (routes wired here)
└── index.ts        # Server entry point