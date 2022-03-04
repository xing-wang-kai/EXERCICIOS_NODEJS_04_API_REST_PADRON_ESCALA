const Sequelize = require('sequelize');
const config = require('config');

const instancia = new Sequelize(

    "petshop",
    "root",
    "hoot",
    {
        host: "localhost",
        dialect: 'mysql'
    }

)


module.exports = instancia;