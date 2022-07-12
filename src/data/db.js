const {Sequelize} = require('sequelize')
require('dotenv').config()

const nameDB = process.env.DB_NAME
const user= process.env.DB_USER
const password= process.env.DB_PASSWORD
const host = process.env.DB_HOST

const sequelize = new Sequelize(nameDB,user,password,{
  host: host,
  dialect: 'mysql'
})

const configSequelize = {

start: async function start(){
try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}},

close: async function close(){
  try {
    await sequelize.close()
    console.log('Connection has been closed successfully.')
  } catch (error) {
    console.error('Can\'t was possible closed connection', error)
  }}
}

module.exports = configSequelize
