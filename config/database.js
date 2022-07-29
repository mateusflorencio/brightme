require('dotenv').config()

const devDbName = process.env.DEV_DB_NAME
const devDbUser = process.env.DEV_DB_USER
const devDbRootPassword = process.env.DEV_DB_ROOT_PASSWORD
const devDbHost = process.env.DEV_DB_HOST
const devDbPort = process.env.DEV_DB_PORT

module.exports = {
    development: {
        "username": devDbUser,
        "password": devDbRootPassword,
        "database": devDbName,
        "host": devDbHost,
        "dialect": "mysql",
        "ports" : devDbPort
    }
}
