module.exports = {
    apps: [{
        name: 'my-hono-api',
        script: './dist/index.js',
        instances: 2,
        exec_mode: 'cluster',
        out_file: `${process.env.HOME}/.pm2/logs/my-hono-api-out.log`,
        error_file: `${process.env.HOME}/.pm2/logs/my-hono-api-error.log`,
        env_production: {
            NODE_ENV: 'production',
            PORT: 3000,
        },
    }],
}