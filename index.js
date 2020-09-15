require('dotenv').config();

module.exports = {
    process: process.env,
    database: {
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: process.env.DB_CONNECTION || 'mysql',
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT || 3306,
        name: process.env.DP_DATABASE || 'mysql',
    },
    env: process.env.APP_ENV || 'local',
    name: process.env.APP_NAME || 'default',
    url: process.env.APP_URL || 'http://localhost',
    debug: process.env.APP_DEBUG || 'true',
}