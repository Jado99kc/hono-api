module.exports = {
    apps: [{
        name: 'hold-api',
        script: './dist/index.js',
        instances: 2,
        exec_mode: 'cluster',
        cwd: '/home/jcastaneda/development/hold-api',
        out_file: '/home/jcastaneda/.pm2/logs/hold-api-out.log',
        error_file: '/home/jcastaneda/.pm2/logs/hold-api-error.log',
        env_production: {
            NODE_ENV: 'production',
            PORT: 3000,
        },
    }],
}