const { Sequelize} = require('sequelize');
const sequelize = new Sequelize('Telefonos', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'//manejador de base de datos
})
module.exports = sequelize