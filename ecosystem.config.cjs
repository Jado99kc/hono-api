module.exports = {
    apps: [{
        name: 'hono-api',
        script: './dist/index.js',
        instances: 2,
        exec_mode: 'cluster',
        cwd: '/home/jcastaneda/development/hono-api',
        out_file: '/home/jcastaneda/.pm2/logs/hono-api-out.log',
        error_file: '/home/jcastaneda/.pm2/logs/hono-api-error.log',
        env_production: {
            NODE_ENV: 'production',
            PORT: 3000,
        },
    }],
}